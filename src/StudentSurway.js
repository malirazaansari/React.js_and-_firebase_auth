import React, { Component } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
var uuid = require("uuid");

const firebaseConfig = {
  apiKey: "AIzaSyAbKnmiGJvfU03rkDfH-VA39L8AjPr2knY",
  authDomain: "surway-response-aaab8.firebaseapp.com",
  databaseURL: "https://surway-response-aaab8-default-rtdb.firebaseio.com",
  projectId: "surway-response-aaab8",
  storageBucket: "surway-response-aaab8.appspot.com",
  messagingSenderId: "754169376689",
  appId: "1:754169376689:web:51cf97b1cc8eb2b18c9790",
  measurementId: "G-8FQ21NTXV8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class StudentSurway extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: uuid.v1(),
      studentName: "",
      answers: {
        ans1: "",
        ans2: "",
        ans3: "",
        ans4: "",
        ans5: "",
      },
      isSubmitted: false,
    };
    this.studentNameSubmit = this.studentNameSubmit.bind(this);
  }

  studentNameSubmit(event) {
    event.preventDefault();
    var name = this.nameInput.value;
    this.setState({ studentName: name }, function () {
      console.log(this.state);
    });
  }

  render() {
    var name = "";
    var questions = "";

    if (this.state.studentName == "" && this.state.isSubmitted == false) {
      name = (
        <div>
          <h1>Hey! Please enter Your name.</h1>
          <form onSubmit={this.studentNameSubmit}>
            <input
              className="sname"
              type="text"
              placeholder="Enter your name"
              ref={(input) => (this.nameInput = input)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    } else if (
      this.state.studentName !== "" &&
      this.state.isSubmitted == false
    ) {
      name = (
        <div>
          <h1>Welcome {this.state.studentName} to our surway</h1>
        </div>
      );
      questions = <div>Let's Start Surway</div>;
    }

    return (
      <div>
        {name}
        ===================
        {questions}
      </div>
    );
  }
}

export default StudentSurway;
