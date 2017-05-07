import React from 'react';
import Questions from './Questions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getQuestions} from '../actions/index';

class Book extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backed1 = this.backed1.bind(this);
    this.result = "";

    this.state = {
      submit : false,

      cols : [
        { key: 'firstName', label: 'First Name' },
        { key: 'lastName', label: 'Last Name' }
      ],

      data : [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Clark', lastName: 'Kent' }
      ]

    };
  }

  componentDidMount() {
  //  axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
  //    .then(res => {
  //      const posts = res.data.data.children.map(obj => obj.data);
  //      this.setState({ posts });
  //    });

    // this.result = this.props.getQuestions(1);
    // console.log(this.result);

    //this.setState
  }


  handleSubmit(e) {
    e.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }

    this.setState( {submit : true} );
    console.log('-->', formData);

    
    this.result = this.props.getQuestions(1);
    console.log(this.result);
  }

  backed1(e) {
    this.setState( {submit : false} );
  }

  render() {

    var form = (

      <div>
      <form onSubmit={this.handleSubmit}>

      <select ref="bookid">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>

      <select ref="two">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>

      <select ref="three">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>

      <input type="submit" value="Submit"/>

      </form>
      </div>
    );

    var questions = ( <Questions backed={this.backed1} cols={this.state.cols} data={this.state.data} /> );

    return (
        <div>
          <button onClick={this.props.backed} id="home"> HOME </button>

          { this.state.submit ? questions : form }
        </div>
    );
  }
}


function matchDispatchToProps(dispatch){
    console.log("props dispatch");
    return bindActionCreators({getQuestions: getQuestions}, dispatch);
}


/* export default Book; */
export default connect(null, matchDispatchToProps)(Book);
