import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { useEffect } from 'react/cjs/react.development';
import { AUTHORS } from './utils/constants';
import { MessageList } from './components/MessageList';

const myText = "React Messenger";

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (messageText) => {
    sendMessage(messageText, AUTHORS.ME)
  };

  const sendMessage = (messageText, author) => {
    const newMessage = {
      messageText,
      author,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  }

  useEffect(() => {
    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {

      timeout = setTimeout(() => {
        sendMessage('Сообщение отправлено', AUTHORS.BOT);

      }, 1000);
    }

    return () => {
      clearTimeout(timeout)
    }

  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title" >{myText}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="message-content">
          <MessageList
            messages={messageList} />
          <Form onSubmit={handleAddMessage} ></Form>
        </div>

      </header>
    </div>
  );
}

export default App;
