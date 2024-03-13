const usePinkify = (str, indices) => {
    // Stringi arraye çevir
    const strArr = str.split(' ');
  
    // Belirtilen indekslerdeki elemanları pink2 yap
    const pinkifiedArr = strArr.map((word, index) => {
      if (indices.includes(index)) {
        return <span key={index} className="text-pink2">{word}</span>;
      } else {
        return word;
      }
    });
  
    // Elemanlar arasına boşluk ekleyerek stringe dönüştür
    const pinkifiedText = pinkifiedArr.reduce((acc, curr) => acc === null ? [curr] : [acc, ' ', curr], null);
    
    return pinkifiedText;
  };
  
  export default usePinkify;
  