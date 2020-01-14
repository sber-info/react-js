import React from 'react';
import Message from './Message';
import '../styles/styles.css';

export default class MessageField extends React.Component {
    state = {
        messages: [
            { textMsg: "Привет!", autorName: "Bot" }, { textMsg: "Как дела?", autorName: "Bot" }],
        input: '',
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].autorName === 'User') {
            setTimeout(() =>
                this.setState(
                    {
                        messages: [...this.state.messages, { textMsg: 'Не приставай ко мне, я робот!', autorName: 'Bot' }],
                    }
                ), 1000);
        };
    };

    handleClick = () => {
        this.sendMessage(message)
    };

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message)
        }
    };

    sendMessage = (message) => {
        this.setState({ messages: [...this.state.messages, { textMsg: message, autorName: 'User' }] });
    };

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={index} msg={text.textMsg} name={text.autorName} />));

        return <div className="layout">
                    <div className="message-field">
                        {messageElements}
                    </div>
                    <input
                        onChange={this.handleChange}
                        onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
                    />
                    <button
                        onClick={() => this.handleClick(this.state.input)}
                    >Отправить сообщение</button>
                </div>

    };
};  