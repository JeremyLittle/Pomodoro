import React, { Component } from "react";
import ImageDrop from "./ImageDrop";
import request from "superagent";
import InfoForm from "./InfoForm";
import "./profile.css";
import Topbar from "./Topbar.js";
import {
  Checkbox,
  Radio,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Alert
} from "react-bootstrap";
import firebase from "./Firebase.js";

const CLOUDINARY_UPLOAD_PRESET = "bmzjbxoq";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/react-cloudinary/upload";

class Profile extends Component {
  state = {
    uploadedFile: null,
    uploadedFileCloudinaryUrl: "",
    showForm: false,
    age: "",
    gender: "",
    name: "",
    showImageDrop: false,
    ageEdit: false,
    genEdit: false,
    editor: ""
  };

  componentDidMount() {
    const nameRef = firebase
      .database()
      .ref(firebase.auth().currentUser.uid + "/name");

    const genderRef = firebase
      .database()
      .ref(firebase.auth().currentUser.uid + "/gender");

    const ageRef = firebase
      .database()
      .ref(firebase.auth().currentUser.uid + "/age");

    nameRef.on("value", snapshot => {
      let name = snapshot.val();
      this.setState({
        name: name
      });
    });

    genderRef.on("value", snapshot => {
      let gender = snapshot.val();
      this.setState({
        gender: gender
      });
    });
    ageRef.on("value", snapshot => {
      let age = snapshot.val();
      this.setState({
        age: age
      });
    });
  }

  handleImageUpload = file => {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  };

  onImageDrop = files => {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  };

  handleEdit = () => {
    this.setState({
      showForm: true
    });
  };

  handleImageEdit = () => {
    this.setState({
      showImageDrop: true
    });
  };

  submitHandler = () => {
    this.setState({
      showImageDrop: false
    });
  };

  editAge = () => {
    this.setState({
      ageEdit: true,
      editor: (
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            placeholder="New age"
            // value={this.state.birthday}
            onChange={this.changeEdit}
          />
          <FormControl.Feedback />
          <Button bsStyle="primary" bsSize="xsmall" onClick={this.submitEdit}>
            submit
          </Button>
        </FormGroup>
      )
    });
  };

  editGender = () => {
    this.setState({
      genEdit: true,
      editor: (
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            placeholder="New gender"
            onChange={this.changeEdit}
          />
          <FormControl.Feedback />
          <Button bsStyle="primary" bsSize="xsmall" onClick={this.submitEdit}>
            submit
          </Button>
        </FormGroup>
      )
    });
  };

  submitEdit = e => {
    e.preventDefault();
    let newChange = null;
    let path = null;
    if (this.state.ageEdit) {
      newChange = this.state.age;
      path = "age";
    } else if (this.state.genEdit) {
      newChange = this.state.gender;
      path = "gender";
    }
    if (newChange !== "") {
      let taskRef = firebase
        .database()
        .ref(firebase.auth().currentUser.uid)
        .child(path)
        .set(newChange);
    }
    this.setState({
      age: "",
      gender: "",
      editor: "",
      ageEdit: false,
      genEdit: false
    });
  };

  changeEdit = e => {
    if (this.state.ageEdit) {
      this.setState({ age: e.target.value });
    } else if (this.state.genEdit) {
      this.setState({ gender: e.target.value });
    }
  };

  render() {
    const style = {
      height: "200px",
      width: "200px"
    };
    const tinyFont = {
      fontSize: "12px",
      color: "blue"
    };

    return (
      <div id="general">
        <Topbar />
        <br />
        <div>
          {" "}
          <h1>{this.state.name}</h1>{" "}
          <h20 style={tinyFont} onClick={this.handleImageEdit}>
            Edit
          </h20>
        </div>
        <div>
          {this.state.showImageDrop === false ? null : (
            <div>
              {" "}
              <ImageDrop onDrop={this.onImageDrop} />{" "}
              <button onClick={this.submitHandler}>Submit</button>
            </div>
          )}

          {this.state.uploadedFileCloudinaryUrl === "" ? (
            <div>
              {" "}
              <img
                src="https://i.pinimg.com/736x/d6/dd/7f/d6dd7f730792c32a3a7899c6b136d34d--tomatoes-painting-tips.jpg"
                style={style}
              />
            </div>
          ) : (
            <div>
              <img
                id="profileimage"
                src={this.state.uploadedFileCloudinaryUrl}
                style={style}
              />
            </div>
          )}
        </div>

        <div className="Info">
          <div>
            {" "}
            <h2> About </h2>
          </div>
          <h3>Age: {this.state.age} </h3>
          <h20 style={tinyFont} onClick={this.editAge}>
            {" "}
            Edit{" "}
          </h20>
          <h3> Gender: {this.state.gender}</h3>
          <h20 style={tinyFont} onClick={this.editGender}>
            {" "}
            Edit{" "}
          </h20>
          {this.state.editor}
        </div>
      </div>
    );
  }
}

export default Profile;
