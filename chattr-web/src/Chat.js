import React from 'react';

class Chat extends React.Component {

    constructor() {
        super();
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
