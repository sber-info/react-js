import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        sender: PropTypes.text,
        text: PropTypes.text,
    };

    render() {
        return <div className="message" style={{ alignSelf: this.props.sender === 'bot' ? 'flex-start' : 'flex-end',  backgroundColor: this.props.sender === 'bot' ? '#f9f9f9' : '' }}>
                    <div className="message-sender">{this.props.sender}</div>
                    <div>{this.props.text}</div>
                </div>
    };
};