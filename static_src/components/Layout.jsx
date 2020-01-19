import React from 'react';
import Header from './Header';
import ChatList from './ChatList';
import MessageField from './MessageField';
import '../styles/styles.css';

export default class Layout extends React.Component {
    render() {
        return <div className="layout">
                    <Header />
                    <div className="chat-wrap">
                        <ChatList />
                        <MessageField />
                    </div>
                </div>
    };
};