import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLetterContext } from '../../../hooks/useLetterContext';
import { createLetterStyles } from '../create-letter/index.css';

export default function PreviewLetter() {
  const { letterImage, letterText } = useLetterContext();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [copyUrl, setCopyUrl] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    setCopyUrl(window.location.href);
  });

  const handleEditClick = () => {
    router.push('/letter');
  };

  const handleCopyClick = async (): Promise<void> => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(copyUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = copyUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div css={createLetterStyles.postWrapper}>
          {letterImage && (
            <img
              css={createLetterStyles.image.selectedPostImage}
              src={URL.createObjectURL(letterImage)}
              alt="postImageSelected"
            />
          )}
          <div
            css={createLetterStyles.text.postText}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
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
        <button css={createLetterStyles.submitButton} onClick={handleEditClick}>
          수정하기
        </button>
        <button>이미지 저장</button>
        <button onClick={handleCopyClick}>링크 공유하기</button>
        {isCopied && (
          <p
            style={{
              width: '30%',
              padding: '15px 15px',
              borderRadius: '10px',
              backgroundColor: '#000',
              color: '#fff',
              position: 'fixed',
              textAlign: 'center',
              fontSize: 'var(--lg)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            링크가 복사되었습니다!
          </p>
        )}
      </div>
    </>
  );
}
