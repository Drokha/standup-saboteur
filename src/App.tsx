import React, { useState, useEffect } from 'react';
import words from './data/frenchWords.json';
import WordCard from './components/WordCard';
import ResultDisplay from './components/ResultDisplay';
import { getStoredWord, storeWordForToday } from './utils/words';

const getRandomWord = (wordList: string[]): string => {
  const index = Math.floor(Math.random() * wordList.length);
  const word = wordList[index];
  return word;
};

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
    // Optional: disable reroll button or alert user
    alert('Nope. You already have your mission for today.');
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => {
    setSubmitted(false);
    setSentence('');
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold">Saboteur du Stand-up</h1>
        <p className="text-gray-600">
          Votre mission quotidienne : glissez ce mot dans votre réunion.
        </p>
      </header>

      {!submitted ? (
        <>
          <WordCard word={word} onNewWord={handleNewWord} />
          <textarea
            className="w-full max-w-md h-24 mt-6 border border-gray-300 rounded p-2"
            placeholder="Comment avez-vous utilisé ce mot ?"
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
          />
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Mission accomplie
            </button>
            <button
              onClick={handleReset}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              J’ai échoué
            </button>
          </div>
        </>
      ) : (
        <ResultDisplay word={word} sentence={sentence} />
      )}

      <footer className="mt-10 text-sm text-gray-500 text-center max-w-md">
        L’éditeur de ce site décline toute responsabilité professionnelle.
        Utilisez à vos risques et périls.
      </footer>
    </main>
  );
};

export default App;
