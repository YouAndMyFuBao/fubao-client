import React, { createContext, useState, useContext, ReactNode, SetStateAction } from 'react';

interface LetterContextProps {
  letterImage: File | undefined;
  setLetterImage: React.Dispatch<SetStateAction<File | undefined>>;
  letterText: string;
  setLetterText: React.Dispatch<React.SetStateAction<string>>;
}

const initialLetterContext: LetterContextProps = {
  letterImage: undefined,
  setLetterImage: () => {},
  letterText: '',
  setLetterText: () => {},
};

export const LetterContext = createContext<LetterContextProps>(initialLetterContext);

interface LetterContextProviderProps {
  children: ReactNode;
}

export const LetterContextProvider: React.FC<LetterContextProviderProps> = ({ children }) => {
  const [letterImage, setLetterImage] = useState<File | undefined>(undefined);
  const [letterText, setLetterText] = useState<string>('');

  const value: LetterContextProps = {
    letterImage,
    setLetterImage,
    letterText,
    setLetterText,
  };

  return <LetterContext.Provider value={value}>{children}</LetterContext.Provider>;
};

export const useLetterContext = () => {
  return useContext(LetterContext);
};
