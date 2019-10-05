import React from 'react';
import logo from './logo.svg';
import './App.css';

import Canvas from './Canvas.js'
import Chat from './Chat.js'


function App() {
  return (
    <div className="App-container">
      <div className="App-draw">
        <Canvas />
      </div>
      <div className="App-chat">
        <Chat />
      </div>
    </div>
  );
}

export default App;
