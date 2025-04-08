import { StoredWord } from '../types';

const STORAGE_KEY = 'saboteur-word';

export const getTodayDateString = (): string => {
  return new Date().toISOString().split('T')[0];
};

export const getStoredWord = (): string | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return null;

  try {
    const parsed: StoredWord = JSON.parse(data);
    const today = getTodayDateString();

    if (parsed.date === today) {
      return parsed.word;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const storeWordForToday = (word: string) => {
  const payload: StoredWord = {
    word,
    date: getTodayDateString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
};
