import PropTypes from 'prop-types';
import React from 'react';

function Message({ phrase }) {
  const { text1, text2 } = phrase;

  return (
    <main className="main-content">
      <h3 className="fade-in-2seconds">{text1 }</h3>
      <h4 className="fade-in-6seconds">{text2 }</h4>
    </main>
  );
}

Message.propTypes = {
  phrase: PropTypes.shape({
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
  }).isRequired,
};
export default Message;
