import React from "react";

class Tabs extends React.Component {

    renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index}>
                {tab.name}
            </button>
        ))
    }


  
    render() {
        return (
            <div>Hello</div>
        )
    }
}
 
    

export default Tabs;