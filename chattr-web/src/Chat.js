import React, { Component } from 'react';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", id: "", content: "" };
    }

    render() {
        const state = this.state;
        return (
            <div>
                <div className="App-chat-name">{state.name}</div>
                <div className="App-chat-id">{state.id}</div>
                <div className="App-chat-content">{state.content}</div>
            </div>
        )
    }
}

export default Chat;
