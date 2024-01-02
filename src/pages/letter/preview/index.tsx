import Header from '@/components/header/header';
import {
  BackgroundPreviewFinger,
  BackgroundPreviewHand,
  BackgroundPreviewHead,
} from '../../../../public/assets/svgs';
import * as Style from './index.css';
import { useEffect, useState } from 'react';
import CopyLink from '@/components/copy-link/copy-link';

export default function PreviewLetter() {
  const [isBackgroundHandVersion, setIsBackgroundHandVersion] = useState(true);
  useEffect(() => {
    const randomNumber = Math.random();
    setIsBackgroundHandVersion(randomNumber < 0.5 ? true : false);
    console.log('isBackgroundHandVersion', isBackgroundHandVersion);
  }, [isBackgroundHandVersion]);

  const backgroundHandVersion = () => {
    return (
      <div className="background">
        <BackgroundPreviewHand css={Style.background.hand} />
        <BackgroundPreviewFinger css={Style.background.finger} />
      </div>
    );
  };

  const backgroundHeadVersion = () => {
    return (
      <div className="background">
        <BackgroundPreviewHead css={Style.background.head} />
      </div>
    );
  };

  return (
    <div>
      <div css={Style.backgroundWrapper}>
        {isBackgroundHandVersion ? backgroundHandVersion() : backgroundHeadVersion()}
      </div>
      <div css={Style.pageWrapper}>
        <Header rightDoneButton />
        <div css={Style.footer.btnGroup}>
          <CopyLink />
          <div>
            <button>이미지 저장</button>
            <button>수정하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
