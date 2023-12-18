import { LetterContextProvider } from './hooks/useLetterContext';
import CreateLetter from './CreateLetter/CreateLetter';

export default function WriteLetter() {
  return (
    <>
      <LetterContextProvider>
        <CreateLetter />
      </LetterContextProvider>
    </>
  );
}
