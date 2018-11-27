import React from 'react';
import ChatBubble from './ChatBubble';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return (
    <section className={props.name === props.local ? "chat-entry local" : "chat-entry remote"}>
      <div className="entry-name">{props.name}</div>
      <div><ChatBubble body={props.message} timeStamp={props.timeStamp} /></div>
    </section>
  );
};

ChatEntry.propTypes = {
  local: PropTypes.string,
  name: PropTypes.string,
  message:  PropTypes.string,
  timeStamp:  PropTypes.string
};

export default ChatEntry;
