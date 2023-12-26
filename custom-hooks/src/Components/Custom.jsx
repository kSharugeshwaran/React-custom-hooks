import React, { useEffect } from 'react';

const useStorage = (word) => {
  useEffect(() => {
    localStorage.setItem('word', word);
    sessionStorage.setItem('word', word);
  }, [word]);
};


const Custom = ({ word }) => {
  useStorage(word);

  return <div></div>;
};

export default Custom;
