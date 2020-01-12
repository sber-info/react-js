import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
    state = {
        messages: ["Привет!", "Как дела?"],
        autorName: 'Bot'
    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() =>
                this.setState(
                    {
                        messages: [...this.state.messages, 'Не приставай ко мне, я робот!'],
                        autorName: 'Bot'
                    }
                ), 1000);
        };
    };

    handleClick = () => {
        this.setState({
            messages: [...this.state.messages, "Нормально!"],
            autorName: 'User'
        });
    };

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={index} text={text} autorName={this.state.autorName} />));

        return <div>
            {messageElements}
            <button onClick={this.handleClick}>Отправить сообщение</button>
        </div>
    };
};