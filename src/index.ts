import { useState, useEffect } from "react";

type StorageType = "local" | "session";

function useLocalStorageState<T>(
  key: string,
  defaultValue: T,
  storage: StorageType = "local"
): [T, (value: T) => void] {
  const storageObj = storage === "local" ? localStorage : sessionStorage;

  const [state, setState] = useState<T>(() => {
    try {
      const stored = storageObj.getItem(key);
      return stored ? (JSON.parse(stored) as T) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      storageObj.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state, storageObj]);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === key) {
        setState(e.newValue ? JSON.parse(e.newValue) : defaultValue);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [key, defaultValue]);

  return [state, setState];
}

export default useLocalStorageState;
