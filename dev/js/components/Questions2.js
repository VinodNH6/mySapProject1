import React from 'react';
import Answer from './Answer';

class Questions extends React.Component {

  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.backed = this.backed.bind(this);
    this.getAnswers = this.getAnswers.bind(this);

    this.state = {val : 0};
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //
  //   var res = e.target.innerHTML;
  //   this.setState( {val : res} );
  // }

  backed(e) {
    this.setState( {val: false} );
  }

  getAnswers(qno) {
     console.log("qno: ", qno);
     this.setState( {val: qno} );
  }

  render() {

       var table = (
         <div>
         <button onClick={this.props.backed}> BACK </button>
         <table>
            <TableRow data={this.props.res} fetchAnswers={this.getAnswers} />
         </table>
         </div>
       );

       var answer = ( <Answer backed={this.backed} qno={this.state.val} qqno={this.props.res}/> );

       return (
         <div>
           { this.state.val ? answer : table }
         </div>
       );
  }


}

export default Questions;




class TableRow extends React.Component {

  constructor(props) {
    super(props);
  }

  sendQno(qno) {
    //console.log(e.target);
    console.log(qno);
    this.props.fetchAnswers(qno);
  }

  render() {
    /* the ES6 version of const data = this.props.data */
    const {data} = this.props;

    /*BUG1: const row = data.map((data0) => */
    const row = data.questions.map((data0) =>
      <tr>
        <td key={data0.qno} onClick={this.sendQno.bind(this, data0.qno)} > {data0.qno} </td>
      </tr>
    );

    return (
      <span>{row}</span>
    );
  }

}



/* <tr>
  <td key={data0.qno} href="#"> {data0.qno} </td>
  <td key={data.name}>{data.name}</td>
  <td key={data.id}>{data.id}</td>
  <td key={data.price}>{data.price}</td>
</tr> */
