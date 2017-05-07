
import React from 'react';
import Profile from './Profile';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      submit : false
    };
    //this.submit = false;
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }

    this.setState({submit : true});
    console.log('-->', formData);
  }

  render() {

    var form = (
      <form onSubmit={this.handleSubmit}>
        <input ref="username" className="phone" type='text' name="username"/>
        <input ref="password" className="email" type='password' name="password"/>
        <input type="submit" value="Submit"/>
      </form>
    );

    var profile = ( <Profile /> );

    return (
        <div>
          <h1> MENU - TESCO - STORE </h1>

          { this.state.submit ? profile : form }

        </div>
    );
  }
}

export default Login;
