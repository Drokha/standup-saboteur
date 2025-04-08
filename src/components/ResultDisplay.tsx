import React from "react";
import { ResultDisplayProps } from "../types";

const ResultDisplay = ({ word, sentence }: ResultDisplayProps) => {
  return (
    <div className="mt-6 bg-green-100 rounded p-6 text-center max-w-md w-full">
      <h2 className="text-lg font-semibold mb-2">Vous avez saboté avec style.</h2>
      <p>
        <strong>Mot utilisé :</strong> {word}
      </p>
      <p className="mt-2">
        <strong>Votre phrase :</strong>
      </p>
      <p className="italic mt-1">“{sentence}”</p>
    </div>
  );
};

export default ResultDisplay;
