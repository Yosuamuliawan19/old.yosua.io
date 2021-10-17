import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button
                className={this.props.primary ? "btn-primary" : " btn-secondary"}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;
