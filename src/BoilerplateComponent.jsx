import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string,
    callbackFunction: PropTypes.func
}

const defaultProps = {
    text: "Some Default Text"
}

class BoilerplateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (this.props.callbackFunction) {
            this.props.callbackFunction();
        } else {
            alert('no callback function was passed in the component props');
        }
    }
    
    render() {
        return (
            <div>
                <a onClick={this.handleClick}>{this.props.text}</a>
            </div>
        );
    }
}

BoilerplateComponent.propTypes = propTypes;
BoilerplateComponent.defaultProps = defaultProps;
export default BoilerplateComponent;
