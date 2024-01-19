import axios from 'axios';
import VigenereForm from '@/frontend / VigenereForm/ VigenereForm';
import { useState } from 'react';
import { Vigenere } from '@/types';

const Page = () => {
  const [isLoading, setIsLoading] = useState({
    encode: false,
    decode: false,
  });
  const [result, setResult] = useState(''); // Добавляем новое состояние для результата

  const onSubmit = async (vigenere: Vigenere, action: 'encode' | 'decode') => {
    setIsLoading((prevLoading) => ({ ...prevLoading, [action]: true }));
    try {
      const response = await axios.post(`/${action}`, {
        password: vigenere.password,
        message: vigenere[action === 'encode' ? 'decoded' : 'encoded'],
      });

      setResult(action === 'encode' ? response.data.encoded : response.data.decoded);
    } finally {
      setIsLoading((prevLoading) => ({ ...prevLoading, [action]: false }));

    }
  };

  return <VigenereForm onSubmit={onSubmit} isLoading={isLoading} result={result}/>;
};

export default Page;
