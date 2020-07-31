import React from 'react';
import Wheel from './Wheel';
import Screen from './Screen';

class App extends React.Component {
  constructor(){
  }
  render() {
    return (
      <div>
         <Screen />
         <Wheel 
            handleZesture={this.handleZesture}
         />
      </div>
    );
  }
}


export default App;
