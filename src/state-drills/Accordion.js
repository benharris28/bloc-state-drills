import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }
    
    state = {
        currentSection: null
    };


    handleClick(index) {
        this.setState({ currentSection: index })
    }

    renderSections() {
        const currentSection = this.state.currentSection
        return this.props.sections.map((section, index) => 
            <li key={index}>
                <button onClick={() => this.handleClick(index)}>
                    {section.title}
                </button>
                {(index === currentSection) && <p>{this.props.sections[this.state.currentSection].content}</p>}
                
            </li>
        )
    }
    
  
    render() {
        return(
            <div>
             
                <ul>
                    {this.renderSections()}
                </ul>

            </div>
            
        )
        
    }
}

export default Accordion;