import React, { Component } from 'react';
import ChatLog from './components/ChatLog';
import './App.css';
import chatMessages from './data/messages.json';

class App extends Component {
  render() {
    console.log(chatMessages);
    const local = chatMessages[0]["sender"]
    const remote = chatMessages[1]["sender"]

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat between {local} and {remote}</h1>
        </header>
        <main className="App-main">
          <ChatLog messages={chatMessages} local={local} />
        </main>
      </div>
    );
  }
}

export default App;
