import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    // ilk açılışta localstorage okuyoruz
    const localVal = localStorage.getItem(key);
    try {
      // localStorage'dan gelen değeri JSON.parse() ediyoruz
      if (localVal === null) {
        return defaultValue;
      } else {
        //console.log("defaultValue TYPE:", typeof defaultValue);
        //console.log("LOCALVAL TYPE:",typeof localVal);
        //console.log("LOCALVAL:", localVal);
        return JSON.parse(localVal);
      }
    } catch (error) {
      // JSON.parse() başarısız olursa veya değer yanlışsa, default değeri dönüyoruz
      console.log("STORAGE ERROR:", error);
      return defaultValue;
    }
  });
  // value değiştiğinde localstorage'a yazıyoruz
  // ve yeni değeri dönüyoruz
  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorage];
}
