import { useEffect, useState } from "react";

function isObject(value: any): value is object {
  return value !== null && typeof value === 'object';
}

export function useLocaleStorageState<T extends string>(defaultValue: T, key: string): [T, React.Dispatch<React.SetStateAction<string>>] {
  const [value, setValue] = useState<T>(() => {
    const stickyValue = window.localStorage.getItem(key);
    if (!stickyValue) return defaultValue;

    // if (isObject(defaultValue)) {
    //   return JSON.parse(stickyValue);
    // }
    return defaultValue;
  });

  useEffect(() => {
    // if(isObject(value)) {
    //   window.localStorage.setItem(key, JSON.stringify(value));
    // }

    window.localStorage.setItem(key, value as string);

  }, [key, value]);
  return [value, setValue];
}