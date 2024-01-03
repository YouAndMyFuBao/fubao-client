import Header from '@/components/header/header';
import LetterCard from '@/components/letter-card/letter-card';

export default function CreateLetter() {
  return (
    <>
      <div className="wrapper">
        <Header leftBackPage>푸바오에게 편지쓰기</Header>
        <LetterCard variant="textCount" />
      </div>
    </>
  );
}
