import { useLetterContext } from '../hooks/useLetterContext';
import { createLetterStyles } from '../CreateLetter/CreateLetter.css';
import CreateLetter from '../CreateLetter/CreateLetter';

export default function PreviewLetter() {
  const { letterImage, letterText, step, setStep } = useLetterContext();

  const handleEditClick = () => {
    setStep(1);
  };
  return (
    <>
      {step === 1 && <CreateLetter />}
      {step === 2 && (
        <div className={createLetterStyles.postWrapper}>
          {letterImage && (
            <img
              className={createLetterStyles.image.selectedPostImage}
              src={URL.createObjectURL(letterImage)}
              alt="postImageSelected"
            />
          )}
          <div
            className={createLetterStyles.text.postText}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div
              style={{
                backgroundColor: 'white',
                width: '90%',
                height: '70%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {letterText}
            </div>
          </div>
          <button className={createLetterStyles.submitButton} onClick={handleEditClick}>
            수정하기
          </button>
        </div>
      )}
    </>
  );
}
