import React from 'react';

interface SubmitResultProps {
  sentence: string;
  setSentence: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  handleReset: () => void;
}

export const SubmitResult = ({
  sentence,
  setSentence,
  handleSubmit,
  handleReset,
}: SubmitResultProps) => {
  return (
    <>
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
  );
};
