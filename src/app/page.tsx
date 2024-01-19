'use client';
import VigenereForm from '@/frontend / VigenereForm/ VigenereForm';
import {Vigenere} from "@/types";
import {useState} from "react";
import axios from "axios";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (vigenere: Vigenere, action: 'encode' | 'decode') => {
        setIsLoading(true);
        try {
            const response = await axios.post('/', vigenere);

            if (action === 'encode') {
                console.log('Encoded:', response.data.encoded);
            } else {
                console.log('Decoded:', response.data.decoded);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <VigenereForm onSubmit={onSubmit} isLoading={isLoading}/>
    );
}
