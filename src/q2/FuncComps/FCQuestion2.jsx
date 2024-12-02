import React from 'react'

  const Message = ({ message, className }) => {
    if (!message) return null;  // if message is null, returns null
    return <p className={className}> {message} </p>;  // if message is not null, returns the paragraph element with the message (className is used to style the message)
  };

export default Message;