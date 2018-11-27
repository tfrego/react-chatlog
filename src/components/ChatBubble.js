import React from 'react';
import Timestamp from './Timestamp';
import './ChatBubble.css';
import PropTypes from 'prop-types';

const ChatBubble = (props) => {
  return (
    <div className="entry-bubble">
      <p className="entry-body">{props.body}</p>
      <p className="entry-time"><Timestamp time={props.timeStamp} /></p>
    </div>
  );
};

ChatBubble.propTypes = {
  body: PropTypes.string,
  timeStamp: PropTypes.string
};

export default ChatBubble;
