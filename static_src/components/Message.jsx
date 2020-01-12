import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        autorName: PropTypes.string.isRequired,
    };

    render() {
        return <div><b>{ this.props.autorName }:</b> { this.props.text }</div>
    };
};