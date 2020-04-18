// app.js
import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import firebase from "firebase";
import config from "./configurations/firebase-config";
import ProtectedRoute from "./components/Authorization/ProtectedRoutes/index";
import axios from "axios";

import Signup from "./components/Authorization/Signup";
import Login from "./components/Authorization/Login";
import City from "./components/City/Main";
import Dashboard from "./components/Admin/Dashboard";
import Vendors from "./components/Admin/Vendors/VendorList";
import AddVendor from "./components/Admin/Vendors/AddVendor";
import VendorDetails from "./components/Admin/Vendors/VendorDetails";
import Products from "./components/Admin/Products/ProductsList";
import Orders from "./components/Admin/Orders";
import ProductDetails from "./components/Admin/Products/ProductDetails";
import AddProduct from "./components/Admin/Products/AddProduct";
import Tracks from "./components/City/Tracks";
import UserProfile from "./components/User/UserProfile";
import UserCreation from "./components/User/UserCreation";
import AllProducts from "./components/City/AllProducts";
import Cart from "./components/User/ShoppingCart";
import Product from "./components/City/Product";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      jwt: "",
      uid: "",
      cart: []
    };
  }

  componentDidMount() {
    const loggedInUser = JSON.parse(window.sessionStorage.getItem("fbaseUser"));
    const jwt = window.sessionStorage.getItem("fbaseJwt");
    if (loggedInUser && jwt && !this.state.loggedInUser) {
      this.setState({ loggedInUser, jwt });
    }
  }
  // componentDidUpdate() {
  //   this.getUserFromDatabase();
  // }

  createUserInDatabase(email, uid) {
    axios.post("https://marketplace-backend-gr.herokuapp.com/api/user", {
      email: email,
      uid: uid
    });
  }

  // getUserFromDatabase() {
  //   axios.get(`https://marketplace-backend-gr.herokuapp.com/api/user/${this.state.loggedInUser.email}`).then(responseFromApi => {
  //     this.setState({
  //       user: responseFromApi.data
  //     });
  //   });
  // }

  getJWT(user) {
    user
      .getIdToken()
      .then(resp => {
        this.setState({ jwt: resp });
        window.sessionStorage.setItem("fbaseUser", JSON.stringify(user));
        window.sessionStorage.setItem("fbaseJwt", resp);
      })
      .catch(err => console.log(err));
  }

  createNewFbaseUser = (email, password, callbackNavToProj) => {
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createuserwithemailandpassword
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(resp => {
        this.getJWT(resp.user);
        this.setState({ loggedInUser: resp.user, uid: resp.user.uid });
        this.createUserInDatabase(email, resp.user.uid);
        callbackNavToProj();
      })
      .catch(err => alert(err));
  };

  loginFbaseUser = (email, password, callbackNavToProj) => {
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signinwithemailandpassword
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(resp => {
        console.log("firebase resp ", resp.user);
        this.setState({ loggedInUser: resp.user, uid: resp.user.uid });
        this.getJWT(resp.user);
        callbackNavToProj();
      })
      .catch(err => alert(err));
  };

  logoutFbaseUser = () => {
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#sign-out
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ loggedInUser: null, jwt: "" });
        window.sessionStorage.removeItem("fbaseUser");
        window.sessionStorage.removeItem("fbaseJwt");
      })
      .catch(err => alert(err));
  };

  addToCart = product => {
    console.log("We are here");
    const cart = [...this.state.cart];
    cart.push(product);
    this.setState({ cart: cart });
  };
  amenitiesDescription =
    "Every month you are landing in a new city with new people, cultures, and customs. While there is so much joy in these new experiences it can sometime be a bit overwhelming. To help you ease into these new environments, we have put together a few simple Amenities and Services curated to support a more comfortable transition. ";

  sidetripsDescription =
    "We curated unforgettable Side Trips that take you out of the city of Lisbon to explore new territory with new friends. We'll take care of the planning so you can focus on work, adjusting to your new home and doing what makes you happy. ";

  experiencesDescription =
    "Choose your own adventure and experience Lisbon to its fullest. Our Local Experiences are curated experiences by our local City Teams that highlight some of the best the city has to offer with vetted vendors and confidence of the Remote Year platform backing it up. ";

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/signup" render={props => <Signup createNewFbaseUser={this.createNewFbaseUser} {...props} />} />
          <Route
            exact
            path="/"
            render={props => <Login loginFbaseUser={this.loginFbaseUser} loggedInUser={this.state.loggedInUser} logoutFbase={this.logoutFbaseUser} {...props} />}
          />
          <ProtectedRoute exact path="/createuser" component={UserCreation} />
          <ProtectedRoute exact path="/user" component={UserProfile} />
          <ProtectedRoute exact path="/user/cart" component={Cart} cart={this.state.cart} />
          <ProtectedRoute exact path="/lisbon" component={City} addToCart={this.addToCart} />} />
          <ProtectedRoute exact path="/lisbon/tracks" endpoint="tracks" component={Tracks} />
          <ProtectedRoute exact path="/lisbon/product/:id" component={Product} addToCart={this.addToCart} />
          <ProtectedRoute
            exact
            path="/lisbon/experiences"
            endpoint="experiences"
            title="Local Experiences"
            description={this.experiencesDescription}
            component={AllProducts}
            addToCart={this.addToCart}
          />
          <ProtectedRoute
            exact
            path="/lisbon/sidetrips"
            endpoint="sidetrips"
            title="Sidetrips"
            description={this.sidetripsDescription}
            component={AllProducts}
            addToCart={this.addToCart}
          />
          <ProtectedRoute
            exact
            path="/lisbon/amenities"
            endpoint="amenities"
            title="Amenities & Services"
            description={this.amenitiesDescription}
            component={AllProducts}
            addToCart={this.addToCart}
          />
          <ProtectedRoute exact path="/admin/lisbon" component={Dashboard} />
          <ProtectedRoute exact path="/admin/vendors/lisbon" component={Vendors} />
          <ProtectedRoute exact path="/admin/vendors/lisbon/add" component={AddVendor} />
          <ProtectedRoute exact path="/admin/vendors/lisbon/:id" component={VendorDetails} />} />
          <ProtectedRoute exact path="/admin/products/lisbon" component={Products} />} />
          <ProtectedRoute exact path="/admin/products/lisbon/add" component={AddProduct} />
          <ProtectedRoute exact path="/admin/products/lisbon/:id" component={ProductDetails} />
          <ProtectedRoute exact path="/admin/orders/lisbon" component={Orders} />
        </Switch>
      </div>
    );
  }
}

export default App;
