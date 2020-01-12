import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        name: PropTypes.text,
        msg: PropTypes.text
    };

    render() {
        return <div><b>{ this.props.name }:</b> { this.props.msg }</div>
    };
};