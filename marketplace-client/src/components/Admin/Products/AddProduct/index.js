import React, { Component } from "react";
import "./style.scss";
import { Button, Form, FormGroup, Label, Input, CardHeader, Progress } from "reactstrap";
import Navbar from "../../../Navbars/AdminNavbar";
import axios from "axios";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      name: "",
      vendor: null,
      description: "",
      host: "",
      location: "",
      meetingPoint: "",
      duration: "",
      highlight1: "",
      highlight2: "",
      highlight3: "",
      disclaimer: "",
      slackChannel: "",
      filenames: [],
      downloadURLs: [],
      isUploading: false,
      uploadProgress: 0,
      date: "",
      time: "",
      type: null,
      quantity: "",
      price: ""
    };
  }

  getVendors = () => {
    axios.get(`https://marketplace-backend-gr.herokuapp.com/api/vendors`).then(responseFromApi => {
      this.setState({
        vendors: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getVendors();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //   =========================================== Upload Images to Firebase ==========================================

  handleUploadStart = () =>
    this.setState({
      isUploading: true,
      uploadProgress: 0
    });

  handleProgress = progress =>
    this.setState({
      uploadProgress: progress
    });

  handleUploadError = error => {
    this.setState({
      isUploading: false
      // Todo: handle error
    });
    console.error(error);
  };

  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL();

    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {
      name,
      vendor,
      description,
      host,
      location,
      meetingPoint,
      duration,
      highlight1,
      highlight2,
      highlight3,
      disclaimer,
      slackChannel,
      downloadURLs,
      date,
      time,
      type,
      quantity,
      price
    } = this.state;
    axios
      .post("https://marketplace-backend-gr.herokuapp.com/api/product", {
        name,
        vendor,
        description,
        host,
        location,
        meetingPoint,
        duration,
        highlight1,
        highlight2,
        highlight3,
        disclaimer,
        slackChannel,
        downloadURLs,
        date,
        time,
        type,
        quantity,
        price,
        city: "Lisbon"
      })
      .then(() => {
        this.props.history.push("/admin/products/lisbon");
      })
      .catch(error => console.log(error));
  };

  render() {
    const arrayOfVendors = this.state.vendors.map(vendors => {
      return (
        <option key={vendors._id} value={vendors._id}>
          {vendors.name}
        </option>
      );
    });

    return (
      <div className="container">
        <Navbar></Navbar>
        <div className="add-vendor-form">
          <Form onSubmit={e => this.handleFormSubmit(e)}>
            <CardHeader style={{ backgroundColor: "#1eb5b2", color: "#fff" }}>Product Details</CardHeader>
            <div className="container add-vendor">
              <FormGroup>
                <Label for="name">Product Name*</Label>
                <Input required type="text" name="name" id="name" placeholder="Welcome Tour" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Vendor*</Label>
                <Input required type="select" name="vendor" id="vendor" onChange={e => this.handleChange(e)}>
                  <option>Select a Vendor</option>
                  {arrayOfVendors}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="name">Product description*</Label>
                <Input required type="textarea" name="description" id="description" placeholder="Max 200 characters" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="name">Host description*</Label>
                <Input
                  required
                  type="textarea"
                  name="host"
                  id="host"
                  placeholder="Tell the remotes all about who is hosting the experiences, Max 200 characters"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate">Date*</Label>
                <Input required type="date" name="date" id="Date" placeholder="Select Date" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleTime">Time*</Label>
                <Input required type="time" name="time" id="Time" placeholder="Select Time (local time)" onChange={e => this.handleChange(e)} />
              </FormGroup>

              <FormGroup>
                <Label for="name">Expected duration*</Label>
                <Input required type="text" name="duration" id="duration" placeholder="2 hours" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="name">Location*</Label>
                <Input required type="text" name="location" id="location" placeholder="Lisbon City Center" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="name">Meeting point*</Label>
                <Input required type="text" name="meetingPoint" id="meetingPoint" placeholder="ex. Time Out Market South Entrance" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Type*</Label>
                <Input required type="select" name="type" id="vendor" onChange={e => this.handleChange(e)}>
                  <option>Select event type</option>
                  <option>Track</option>
                  <option>Experience</option>
                  <option>Sidetrip</option>
                  <option>Amenitie</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="name">Tickets Available*</Label>
                <Input required type="number" name="quantity" id="quantity" placeholder="15" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="name">Price in Dollars*</Label>
                <Input required type="number" name="price" id="price" placeholder="15$" onChange={e => this.handleChange(e)} />
              </FormGroup>

              <FormGroup>
                <Label for="name">Highlights*</Label>
                <Input required type="text" name="highlight1" id="highlight1" placeholder="ex. Amazing Views" onChange={e => this.handleChange(e)} />
                <br />
                <Input required type="text" name="highlight2" id="highlight2" placeholder="ex. Try the traditional Custard" onChange={e => this.handleChange(e)} />
                <br />
                <Input required type="text" name="highlight3" id="highlight3" placeholder="ex. Make some new local friends" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="name">Disclaimer*</Label>
                <Input required type="text" name="disclaimer" id="disclaimer" placeholder="ex. Bring comfortable shoes" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="name">Slack channel*</Label>
                <Input type="text" name="slackChannel" id="slackChannel" placeholder="Max 200 characters" onChange={e => this.handleChange(e)} />
              </FormGroup>

              <label
                style={{
                  borderColor: "#1eb5b2",
                  border: "solid",
                  borderWidth: 1,
                  backgroundColor: "white",
                  color: "#1eb5b2",
                  padding: 10,
                  borderRadius: 4,
                  cursor: "pointer",
                  textAlign: "center"
                }}
              >
                Select Product Images*
                <FileUploader
                  required
                  hidden
                  accept="image/*"
                  name="image-uploader-multiple"
                  randomizeFilename
                  storageRef={firebase.storage().ref("images")}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                  multiple
                />
              </label>
              <br></br>
              <Progress striped color="info" value={this.state.uploadProgress} />
              <br></br>
              <Button style={{ backgroundColor: "#1eb5b2", color: "white", padding: 10, cursor: "pointer", textAlign: "center", border: "0" }}>Add Product</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default AddProduct;
