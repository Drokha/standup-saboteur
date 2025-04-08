export interface WordCardProps {
  word: string;
  onNewWord: () => void;
}

export interface ResultDisplayProps {
  word: string;
  sentence: string;
}

export interface StoredWord {
  word: string;
  date: string; // in YYYY-MM-DD format
}
