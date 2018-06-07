import React, { Component } from "react";
import ImageDrop from "./ImageDrop";

import request from "superagent";
import InfoForm from "./InfoForm";
import profilestyle from "./profile.css";
import Topbar from "./Topbar.js";

const CLOUDINARY_UPLOAD_PRESET = "bmzjbxoq";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/react-cloudinary/upload";

class Profile extends Component {
  state = {
    uploadedFile: null,
    uploadedFileCloudinaryUrl: "",
    showForm: false,
    birthday: "",
    showImageDrop: false
  };

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
    console.log("Heere");
    console.log(String(this.state.birthday));
    this.setState({
      showForm: true
    });
  };

  handleSubmit = e => {
    console.log("Here");
    this.setState({
      birthday: e.target.value
    });
    console.log("Eliza");
    console.log(String(this.state.birthday));
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

  render() {
    const style = {
      height: "200px",
      width: "200px"
    };
    const tinyFont = {
      fontSize: "12px"
    };

    let form = null;
    console.log(this.state);
    if (this.state.showForm) {
      form = <InfoForm onSubmit={e => this.handleSubmit(e)} />;
    }
    return (
      <div>
        <Topbar />
        <br />
        <div>
          {" "}
          <h1>User Name</h1>{" "}
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
            <h4 onClick={this.handleEdit}>Edit {form}</h4>
          </div>
          {this.state.birthday === "" ? null : (
            <h3>Birthday: {String(this.state.birthday)} </h3>
          )}
          {/* <h3>Birthday:</h3>
                    <h3> Gender: </h3> */}
        </div>
      </div>
    );
  }
}
export default Profile;
