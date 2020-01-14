import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        name: PropTypes.text,
        msg: PropTypes.text
    };

    render() {
        return <div className="message" style={{ alignSelf: this.props.name === 'Bot' ? 'flex-start' : 'flex-end',  backgroundColor: this.props.name === 'Bot' ? '#f9f9f9' : '' }}>
                    <div className="message-sender">{this.props.name}</div>
                    <div>{this.props.msg}</div>
                </div>
    };
};