import React, { useState, useEffect } from 'react';
import Message from './components/Message';
import { getRandomPhrases } from './utils';

function App() {
  const [phrase, setPhrase] = useState({ text1: '', text2: '' });

  useEffect(() => {
    const phraseOfTheDay = getRandomPhrases();
    setPhrase(phraseOfTheDay);
  }, []);

  return (
    <div className="App">
      <Message phrase={phrase} />
    </div>
  );
}

export default App;
