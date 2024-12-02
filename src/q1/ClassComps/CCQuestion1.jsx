import { Component } from 'react'
import '../Q1style.css'

export default class CCQuestion1 extends Component {
  constructor(props) {
    super(props);
    // initializing state with an empty string for bgColor, bgColor will be used to change the background color of the container
    this.state = {
      bgColor: ''
    };
  }

  chgToRed = () => this.setState({ bgColor: 'red' });
  chgToBlue = () => this.setState({ bgColor: 'blue' });
  chgToGreen = () => this.setState({ bgColor: 'green' });
  chgToYellow = () => this.setState({ bgColor: 'yellow' });
  chgToPurple = () => this.setState({ bgColor: 'purple' });
  chgToOrange = () => this.setState({ bgColor: 'orange' });
  chgToPink = () => this.setState({ bgColor: 'pink' });
  chgToBlack = () => this.setState({ bgColor: 'black' });

  render() {
    return (
      <div className="question1Container">
        <h2>Question 1</h2>
        <p>Choose a button to update the background color of the container.</p> {/* container visible by using box shadow */}
        <div className="colorContainer" style={{ backgroundColor: this.state.bgColor }}> 
          <button onClick={this.chgToRed}>Red</button>
          <button onClick={this.chgToBlue}>Blue</button>
          <button onClick={this.chgToGreen}>Green</button>
          <button onClick={this.chgToYellow}>Yellow</button>
          <button onClick={this.chgToPurple}>Purple</button>
          <button onClick={this.chgToOrange}>Orange</button>
          <button onClick={this.chgToPink}>Pink</button>
          <button onClick={this.chgToBlack}>Black</button>          
        </div>
      </div>
    )
  }
}
