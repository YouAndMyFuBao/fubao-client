import { useRouter } from 'next/router';
import { createLetterStyles } from './index.css';
import { useLetterContext } from '../../../hooks/useLetterContext';

export default function CreateLetter() {
  const { letterImage, setLetterImage, letterText, setLetterText } = useLetterContext();
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImage = e.target.files[0];
      setLetterImage(newImage);
    }
  };

  const handleDeleteButtonClick = () => {
    const responseConfirm = window.confirm('정말로 삭제하시겠습니까?');
    if (responseConfirm) {
      setLetterImage(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLetterText(e.target.value);
  };

  const handleSubmitPost = () => {
    if (letterImage && letterText.length > 0) {
      console.log('Image', letterImage);
      console.log('Text', letterText);
      router.push('/letter/preview-letter');
    } else {
      window.alert('이미지 혹은 텍스트가 누락되었는지 확인하세요.');
    }
  };

  return (
    <>
      <div className="wrapper">
        {letterImage ? (
          <div css={createLetterStyles.postWrapper}>
            <img
              css={createLetterStyles.image.selectedPostImage}
              src={URL.createObjectURL(letterImage)}
              alt="postImageSelected"
            />
            <button
              css={createLetterStyles.image.deleteButton}
              type="button"
              onClick={handleDeleteButtonClick}
            >
              삭제X
            </button>
          </div>
        ) : (
          <div css={createLetterStyles.postWrapper}>
            <label htmlFor="file" css={createLetterStyles.image.nonePostImage}>
              <div className="btn-upload">사진을 업로드해주세요.</div>
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              required
              css={createLetterStyles.image.nonPostImageInput}
              onChange={handleImageChange}
            />
          </div>
        )}
        <div css={createLetterStyles.text.postText}>
          <input
            type="text"
            css={createLetterStyles.text.postTextInput}
            value={letterText}
            onChange={handleInputChange}
          />
        </div>
        <button css={createLetterStyles.submitButton} onClick={handleSubmitPost}>
          제출하기
        </button>
      </div>
    </>
  );
}
