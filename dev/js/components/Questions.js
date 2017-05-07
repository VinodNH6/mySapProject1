import React from 'react';
import Answer from './Answer';

class Questions extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateHeaders = this.generateHeaders.bind(this);
    this.generateRows = this.generateRows.bind(this);
    this.backed = this.backed.bind(this);

    this.state = {val : 0};
  }

  handleSubmit(e) {
    e.preventDefault();

    var res = e.target.innerHTML;
    this.setState( {val : res} );
  }

  backed(e) {
    this.setState( {val: false} );
  }

  render() {
    var headerComponents = this.generateHeaders(),
           rowComponents = this.generateRows();

       var table = (
         <div>
         <button onClick={this.props.backed}> BACK </button>
         <table>
             <thead> {headerComponents} </thead>
             <tbody> {rowComponents} </tbody>
         </table>
         </div>
       );

       var answer = ( <Answer backed={this.backed} qno={this.state.val}/> );

       return (
         <div>
           { this.state.val ? answer : table }
         </div>
       );
  }

  generateHeaders() {
        var cols = this.props.cols;  // [{key, label}]

        // generate our header (th) cell components
        return cols.map(function(colData) {
            return <th key={colData.key}> {colData.label} </th>;
        });
  }

  generateRows() {
        var cols = this.props.cols,  // [{key, label}]
            data = this.props.data;

        return data.map((item) => {
            // handle the column data within each row
            var cells = cols.map( (colData) => {

                // colData.key might be "firstName"
                return <td onClick={this.handleSubmit}> {item[colData.key]} </td>;
            });
            return <tr key={item.id}> {cells} </tr>;
        });
  }

}

export default Questions;
