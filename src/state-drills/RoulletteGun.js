import React from 'react';

class RoulletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    }
    
    
    handleClick = () => {
        this.setState({spinningTheChamber: true})
        
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            
     
            
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
        })
    },2000)
    }

    componentWillUnmount = () => {
        clearTimeout(this.timeout)
    }

    handleDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!!'
    } else {
      return 'you\'re safe!'
    }
  }


    
    render() {
        return (
        <div>
            <button onClick={this.handleClick}>
                Pull the trigger
            </button>
            <div>{this.handleDisplay()}</div>
        </div>
        
        )
        
    }
}

export default RoulletteGun;