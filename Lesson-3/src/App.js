import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { useEffect } from 'react/cjs/react.development';
import { AUTHORS } from './utils/constants';
import { ChatList } from './components/ChatList';
import { MessageList } from './components/MessageList';

const myText = "React Messenger";

function App() {
  const [messageList, setMessageList] = useState([]);
  const messageEnd = useRef();

  const handleAddMessage = (messageText) => {
    sendMessage(messageText, AUTHORS.USER)
  };

  const sendMessage = (messageText, author) => {
    const newMessage = {
      messageText,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  }

  useEffect(() => {
    messageEnd.current?.scrollIntoView();
    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.USER) {

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
        <div>
          <div className="chatlist">
            <ChatList />
          </div>
          <div className="message-content">
            <MessageList
              messages={messageList} />
            <div ref={messageEnd} />
          </div>
          <Form onSubmit={handleAddMessage} ></Form>
        </div>

      </header>
    </div>
  );
}

export default App;
