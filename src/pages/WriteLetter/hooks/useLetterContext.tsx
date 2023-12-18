import React, { createContext, useState, useContext, ReactNode, SetStateAction } from 'react';

interface LetterContextProps {
  letterImage: File | null;
  setLetterImage: React.Dispatch<SetStateAction<File | null>>;
  letterText: string;
  setLetterText: React.Dispatch<React.SetStateAction<string>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const initialLetterContext: LetterContextProps = {
  letterImage: null,
  setLetterImage: () => {},
  letterText: '',
  setLetterText: () => {},
  step: 1,
  setStep: () => {},
};

export const LetterContext = createContext<LetterContextProps>(initialLetterContext);

interface LetterContextProviderProps {
  children: ReactNode;
}

export const LetterContextProvider: React.FC<LetterContextProviderProps> = ({ children }) => {
  const [letterImage, setLetterImage] = useState<File | null>(null);
  const [letterText, setLetterText] = useState<string>('');
  const [step, setStep] = useState<number>(1);

  const value: LetterContextProps = {
    letterImage,
    setLetterImage,
    letterText,
    setLetterText,
    step,
    setStep,
  };

  return <LetterContext.Provider value={value}>{children}</LetterContext.Provider>;
};

export const useLetterContext = () => {
  return useContext(LetterContext);
};
