import React, { Component } from "react";
import "../Q2style.css";
import Message from "../FuncComps/FCQuestion2";

export default class CCQuestion2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "",
      firstName: "",
      psychometricScore: "",

      lastNameMessage: "",
      firstNameMessage: "",
      scoreMessage: "",

      successMessage: ""
    };
  }

  // shows the message when the input gains focus
  handleFocus = (field) => {
    if (field === "lastName")
      this.setState({ lastNameMessage: "You must fill in a last name." });
    if (field === "firstName")
      this.setState({ firstNameMessage: "You must fill in a first name." });
    if (field === "psychometricScore")
      this.setState({ scoreMessage: "You must fill in a psychometric score." , invalidScore: "", validScore: "" });
  };

  // hides the message when the input loses focus
  handleBlur = (field) => {
    if (field === "lastName") this.setState({ lastNameMessage: "" });
    if (field === "firstName") this.setState({ firstNameMessage: "" });
    if (field === "psychometricScore") {
      if(this.state.psychometricScore === "" ) {
        this.setState({ scoreMessage: "" });
        return;
      }
      if(this.state.psychometricScore > 800 || this.state.psychometricScore < 200) {
        this.setState({ scoreMessage: "Invalid test score, must be between 200 and 800." });
        return;
      }
      if(this.state.psychometricScore < 555) {
        this.setState({ scoreMessage: "", invalidScore: "Score not high enough, try again next year.", validScore: "" });
        return;
      }
      // Score is 555 to 800
      this.setState({ scoreMessage: "" , validScore: "You can enroll into our college.", invalidScore: "" });
    }
  };

  formSubmit = (e) => {
    e.preventDefault();
    if(this.state.lastName === "" || this.state.firstName === "" || this.state.psychometricScore === "") {
      alert("Please fill in all fields.");
      return;
    }
    if(this.state.psychometricScore > 800 || this.state.psychometricScore < 200) {
      alert("Invalid psychometric score, must be between 200 and 800.");
    return;
    }
    if(this.state.psychometricScore < 555) {
      alert("Score not high enough, try again next year.");
      return;
    }
    //console.log("Form submitted");
    //console.log(`Last Name: ${this.state.lastName}`);
    //console.log(`First Name: ${this.state.firstName}`);
    //console.log(`Psychometric Score: ${this.state.psychometricScore}`);

    this.setState({ successMessage: "Form submitted successfully!", invalidScore: "", validScore: "" }); 

    setTimeout(() => {
      this.setState({ successMessage: "" });
    }, 3000);
  };

  render() {
    return (
      <div>
        <h2>Question 2</h2>
        <p>Please enter your last name, first name and psychometric score</p>
        <form onSubmit={this.formSubmit}>

          <label>Last Name: </label> <br />
          {/* {this.state.lastNameMessage && (<p className="warning"> {this.state.lastNameMessage} </p>) } */} 
          <Message message={this.state.lastNameMessage} className="warning" /> {/* if the message is not empty, display the message */}
          
          {/* using the onFocus and onBlur attributes of the textbox, we change the current state to display or hide the appropriate message. */}
          <input
            type="text"
            id="lastName"
            onFocus={() => this.handleFocus("lastName")}
            onBlur={() => this.handleBlur("lastName")}
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
          <br /> <br />


          <label>First Name: </label> <br />
          {/* {this.state.firstNameMessage && (<p className="warning"> {this.state.firstNameMessage} </p>) } */}
          <Message message={this.state.firstNameMessage} className="warning" />
          <input
            type="text"
            id="firstName"
            onFocus={() => this.handleFocus("firstName")}
            onBlur={() => this.handleBlur("firstName")}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
          <br /> <br />


          <label>Psychometric Score: </label> <br />
          {/* {this.state.scoreMessage && (<p className="warning"> {this.state.scoreMessage} </p>) } */}
          <Message message={this.state.scoreMessage} className="warning" />
          <input
            type="number"
            id="psychometricScore"
            onFocus={() => this.handleFocus("psychometricScore")}
            onBlur={() => this.handleBlur("psychometricScore")}
            onChange={(e) => this.setState({ psychometricScore: e.target.value })}
          />
          {/* {this.state.invalidScore && (<p className="invalidScore"> {this.state.invalidScore} </p>) } */}
          <Message message={this.state.invalidScore} className="invalidScore" />
          {/* {this.state.validScore && (<p className="validScore"> {this.state.validScore} </p>) } */}
          <Message message={this.state.validScore} className="validScore" />
          <br /> <br />

          <button type="submit">Submit</button>
        </form>
        {/* Success message displayed after form submission */}
        {/* {this.state.successMessage && (<p className="success"> {this.state.successMessage} </p>) } */}
        <Message message={this.state.successMessage} className="success" />
      </div>
    );
  }
}
