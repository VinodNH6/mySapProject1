import React from 'react';
import Book from './Book';
import Book2 from './Book2';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backed = this.backed.bind(this);

    this.state = {click : false};
  }

  handleSubmit(e) {
    e.preventDefault();

    // const formData = {};
    // for (const field in this.refs) {
    //   formData[field] = this.refs[field].value;
    // }
    // console.log('-->', formData);

    console.log(e.target.value);

    this.setState( {click : true} );

  }

  backed(e) {
    this.setState( {click : false} );
  }

  render() {

    var form = (
      <div>
        <button type="button1" value="gotobooks" onClick={this.handleSubmit}>Go To Books</button>
        <button type="button2" value="checkprogress" onClick={this.handleSubmit}>Check Progress</button>
        <button type="button3" value="graphs" onClick={this.handleSubmit}>Graphs</button>
        <button type="button4" value="home" onClick={this.handleSubmit}>Home</button>
      </div>
    );

    var book = ( <Book2 backed={this.backed} /> );

    return (
        <div>
          { this.state.click ? book : form }
        </div>
    );
  }
}

export default Profile;
