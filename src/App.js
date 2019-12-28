import React from 'react';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RoulletteGun from './state-drills/RoulletteGun';

class App extends React.Component {
  
  
  render() {
    return (
      <div>
        <div>Hello</div>
        <TheDate />
        <Counter count={123}/>
        <HelloWorld />
        <Bomb />
        <RoulletteGun bulletInChamber={8}/>
      </div>
    );
  }
  
}

export default App;
