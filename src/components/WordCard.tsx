import { WordCardProps } from "../types";
import React from "react";

const WordCard = ({ word, onNewWord }: WordCardProps) => {
  return (
    <div className="bg-yellow-100 rounded shadow p-6 text-center w-full max-w-sm">
      <h2 className="text-xl font-semibold">Mot du jour</h2>
      <p className="text-3xl mt-2 font-bold">{word}</p>
      <button
        onClick={onNewWord}
        className="mt-4 text-sm text-blue-500 hover:underline"
      >
        Nouveau mot
      </button>
    </div>
  );
};

export default WordCard;
