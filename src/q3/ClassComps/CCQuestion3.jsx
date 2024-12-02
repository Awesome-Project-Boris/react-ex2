import React, { Component } from 'react'
import '../Q3style.css'

export default class CCQuestion3 extends Component {
  constructor(props){
    super(props);

    this.state = {
      width: 100
    }
  }
  chgWidth = () => {
    this.setState({width: 50})
  }
  resetWidth = () => {
    this.setState({ width: 100});
  }
  render() {
    return (
      <div>
        <h2>Question 3</h2>

        <div className='table-container'>
          <table onClick={this.chgWidth} onDoubleClick={this.resetWidth} style={{ width: `${this.state.width}%` }}>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
