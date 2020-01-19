import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../styles/styles.css';

export default class MessageField extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.textInput = React.createRef();
    // };

    state = {
        messages: [
            { textMsg: "Привет!", autorName: "Bot" }, { textMsg: "Как дела?", autorName: "Bot" }],
        input: '',
    };

    textInput = React.createRef();

    componentDidMount() {
        this.textInput.current.focus();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.messages.length < this.state.messages.length && this.state.messages[this.state.messages.length - 1].autorName === 'User') {
            setTimeout(() =>
                this.setState(
                    {
                        messages: [...this.state.messages, { textMsg: 'Не приставай ко мне, я робот!', autorName: 'Bot' }],
                    }
                ), 1000);
        };
    };

    handleSendMessage = () => {
        this.setState({ messages: [...this.state.messages, { textMsg: this.state.input, autorName: 'User' }], 
        input: '' });
    };

    // handleClick = (message) => {
    //     this.sendMessage(message)
    // };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.handleSendMessage(message)
        }
    };



    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={index} msg={text.textMsg} name={text.autorName} />));

        return <div className="message-field_wrap">
            <div className="message-field">
                {messageElements}
            </div>
            <div style={{ width: '100%', display: 'flex' }}>
                <TextField
                    name="input"
                    fullWidth={true}
                    hintText="Введите сообщение"
                    style={{ fontSize: '22px' }}
                    onChange={this.handleChange}
                    value={this.state.input}
                    onKeyUp={this.handleKeyUp}
                    ref={this.textInput}
                />
                <FloatingActionButton onClick={this.handleSendMessage}>
                    <SendIcon />
                </FloatingActionButton>
            </div>
        </div>

    };
};  