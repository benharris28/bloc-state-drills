import React from 'react';

class RoulletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    }
    
    
    handleClick = () => {
        this.setState({spinningTheChamber: true});
        this.timeout = setTimeout(() => {
            const randomChamber = (Math.ceil(Math.random() * 8)
            
     
            
            this.setState({
                chamber: timeout, 
                spinningTheChamber: false
        })
    },2000)
    }

    componentWillUnmount = () => {
        clearTimeout(this.timeout)
    }

    
    render() {
        return (
        <div>
            <button onClick={this.handleClick}>
                Pull the trigger
            </button>
            <div>{this.state.chamber}</div>
        </div>
        
        )
        
    }
}

export default RoulletteGun;