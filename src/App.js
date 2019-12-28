import React from 'react';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';

class App extends React.Component {
  
  
  render() {
    return (
      <div>
        <div>Hello</div>
        <TheDate />
        <Counter count={123}/>
        <HelloWorld />
      </div>
    );
  }
  
}

export default App;
