import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {textMsg: "Привет!", autorName: "Bot"}, {textMsg: "Как дела?", autorName: "Bot"}],
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length-1].autorName==='User') {
            setTimeout(() =>
                this.setState(
                    {
                        messages: [...this.state.messages, {textMsg: 'Не приставай ко мне, я робот!', autorName: 'Bot'}],
                    }
                ), 1000);
        };
    };

    handleClick = () => {
        this.setState({
            messages: [...this.state.messages, {textMsg: 'Нормально!', autorName: 'User'}],
        });
    };

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={index} msg={text.textMsg} name={text.autorName} />));

        return <div>
            {messageElements}
            <button onClick={this.handleClick}>Отправить сообщение</button>
        </div>
    };
};