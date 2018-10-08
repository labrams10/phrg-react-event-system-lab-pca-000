import React from 'react';

class Keypad extends React.Component {
 
    foo = () => {
      console.log('Entering password...');
    }
   
    render() {
      return (
        <div><input type="password" onKeyUp={this.foo}></input></div>
      );
    }
  }

  export default Keypad;