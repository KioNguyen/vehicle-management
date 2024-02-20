export const setItemLocalStore = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const getItemLocalStore = (key: string): string | null => {
  const ISSERVER = typeof window === "undefined";

  if (!ISSERVER) {
    const data = localStorage.getItem(key);
    if (typeof data === "string") {
      return data;
    }
    return data ? JSON.parse(data) : null;
  }
  return null;
};

export const removeItemLocalStore = (key: string) =>
  localStorage.removeItem(key);
