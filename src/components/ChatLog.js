import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {

  const chatComponents = props.messages.map((message, i) => {
    return <ChatEntry
    name={message.sender}
    message={message.body}
    timeStamp={message.timeStamp}
    />
  });

  return (
    <div className="chat-log">{chatComponents}</div>
  );
};

ChatLog.propTypes = {
  messages: PropTypes.array
};

export default ChatLog;
