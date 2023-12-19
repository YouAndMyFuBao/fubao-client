import { useRouter } from 'next/router';
import { useLetterContext } from '../hooks/useLetterContext';
import { createLetterStyles } from '../create-letter/index.css';

export default function PreviewLetter() {
  const { letterImage, letterText } = useLetterContext();

  const router = useRouter();

  const handleEditClick = () => {
    router.push('/letter');
  };

  return (
    <>
      <div className="wrapper">
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
        </div>
        <button className={createLetterStyles.submitButton} onClick={handleEditClick}>
          수정하기
        </button>
      </div>
    </>
  );
}
