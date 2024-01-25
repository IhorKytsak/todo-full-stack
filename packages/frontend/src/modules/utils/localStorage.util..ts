import { APP_KEYS } from '../common/consts';

export const checkToken = () => {
  const token = localStorage.getItem(APP_KEYS.STORAGE_KEYS.TOKEN);

  if (token) {
    return true;
  }

  return false;
};

export const setItem = (key: string, value: string | object) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  const storedValue = localStorage.getItem(key);

  if (storedValue === null || storedValue === undefined) {
    return null;
  }

  return JSON.parse(localStorage.getItem(key) as string);
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
