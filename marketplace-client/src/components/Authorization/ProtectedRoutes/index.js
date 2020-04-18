import React from "react";
import { Redirect, Route } from "react-router-dom";

class ProtectedRoutes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Component = this.props.component;
    const isAuthenticated = sessionStorage.getItem("fbaseUser");

    return isAuthenticated ? (
      <Route
        exact
        path={this.props.path}
        render={props => (
          <Component
            endpoint={this.props.endpoint}
            title={this.props.title}
            description={this.props.description}
            addToCart={this.props.addToCart}
            cart={this.props.cart}
            {...props}
          />
        )}
      />
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );
  }
}

export default ProtectedRoutes;
