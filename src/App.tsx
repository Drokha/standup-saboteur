import React, { useState, useEffect } from 'react';
import words from './data/frenchWords.json';
import WordCard from './components/WordCard';
import ResultDisplay from './components/ResultDisplay';
import { getRandomWord, getStoredWord, storeWordForToday } from './utils/words';
import { Header } from './components/Header';
import { SubmitResult } from './components/SubmitResult';
import { Footer } from './components/Footer';

const App = () => {
  const [word, setWord] = useState<string>('');
  const [sentence, setSentence] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const stored = getStoredWord();
    if (stored) {
      setWord(stored);
    } else {
      const freshWord = getRandomWord(words.mots_du_jour);
      setWord(freshWord);
      storeWordForToday(freshWord);
    }
  }, []);

  const handleNewWord = () => {
    alert('Nope. You already have your mission for today.');
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => {
    setSubmitted(false);
    setSentence('');
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6">
      <Header />
      {!submitted ? (
        <>
          <WordCard word={word} onNewWord={handleNewWord} />
          <SubmitResult
            sentence={sentence}
            setSentence={setSentence}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
          />
        </>
      ) : (
        <ResultDisplay word={word} sentence={sentence} />
      )}
      <Footer />
    </main>
  );
};

export default App;
