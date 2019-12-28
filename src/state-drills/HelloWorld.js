import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    };

    updateButton = () => {
        this.setState({ who: 'world'});
    };

    updateButtonTwo = () => {
        this.setState({ who: 'Friend'});
    };

    updateButtonThree = () => {
        this.setState({ who: 'React'});
    };
    
    render() {
        return (
            <div>
                <p>Hello {this.state.who}</p>
                <button onClick={this.updateButton}>world</button>
                <button onClick={this.updateButtonTwo}>Friend</button>
                <button onClick={this.updateButtonThree}>React</button>
            </div>)
    }
}

export default HelloWorld;