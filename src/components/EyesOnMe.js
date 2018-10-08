import React from 'react'

class EyesOnMe extends React.Component {
 
    good = () => {
      console.log('Good!');
    }

    hey = () => {
        console.log('Hey! Eyes on me!')
    }
   
    render() {
      return (
        <div><button onFocus={this.good} onBlur={this.hey}>Click me!</button></div>
      );
    }
  }

  export default EyesOnMe;