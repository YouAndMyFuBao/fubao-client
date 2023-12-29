import { useEffect, useState } from 'react';
import { IconLink } from '../../../public/assets/svgs';
import * as Style from './copy-link.css';

export default function CopyLink() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  useEffect(() => setUrl(window.location.href));

  const handleCopyLinkClick = async (): Promise<void> => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    <div css={Style.wrapper}>
      <div css={Style.buttonWrapper} onClick={handleCopyLinkClick}>
        <IconLink />
        링크 공유하기
      </div>
      {isCopied && <div css={Style.copiedSnackbar}>링크가 복사되었어요!</div>}
    </div>
  );
}
