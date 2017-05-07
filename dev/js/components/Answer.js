import React from 'react';
import $ from 'jquery';

class Answer extends React.Component {

  constructor(props) {
    super(props);
    this.gotoHome = this.gotoHome.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  gotoHome(e) {
    //console.log(this.refs);
    $('#home').click();
  }

  render() {
    return (
        <div>
          <button onClick={this.props.backed}> BACK </button>

          <h3> Question No: {this.props.qno} </h3>
          <button value="Home" onClick={this.gotoHome}>Press if Green  </button>
          <button type="Accept">Add Next Step</button>
          <button value="Home" onClick={this.gotoHome}>Not Applicable</button>
          <button> View Next Steps </button>
        </div>
    );
  }
}

export default Answer;
