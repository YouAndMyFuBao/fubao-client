import Header from '@/components/header/header';
import {
  BackgroundPreviewFinger,
  BackgroundPreviewHand,
  BackgroundPreviewHead,
} from '../../../../public/assets/svgs';
import * as Style from './index.css';
import { useEffect, useState } from 'react';
import CopyLink from '@/components/copy-link/copy-link';
import LetterCard from '@/components/letter-card/letter-card';
import { useGetPost } from '@/apis/getPost';
import { APIResponse, PostData } from '@/data/type';
import DateTimeFormat from '@/utils/dateTimeFormat';
import { useRouter } from 'next/router';

function CheckDataValidity({ data }: { data?: APIResponse<PostData> }) {
  if (!data) return;

  return data;
}

export default function PreviewLetter() {
  const router = useRouter();
  const [isBackgroundHandVersion, setIsBackgroundHandVersion] = useState(true);
  const postId = 1;
  const { data } = useGetPost({ postId });
  CheckDataValidity({ data });
  // console.log('data', data);

  useEffect(() => {
    const randomNumber = Math.random();
    setIsBackgroundHandVersion(randomNumber < 0.9 ? true : false);
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

  const LetterCardWithCss = ({ data }: { data: APIResponse<PostData> }) => {
    if (isBackgroundHandVersion) {
      return (
        <div css={Style.mainLetterCard.hand}>
          <LetterCard
            variant="date"
            apiImage={data?.data.imageUrl}
            apiText={data?.data.content}
            apiDate={DateTimeFormat(data.data.date)}
          />
        </div>
      );
    } else {
      return (
        <div css={Style.mainLetterCard.head}>
          <LetterCard
            variant="date"
            apiImage={data?.data.imageUrl}
            apiText={data?.data.content}
            apiDate={DateTimeFormat(data.data.date)}
          />
        </div>
      );
    }
  };

  return (
    <div>
      <div css={Style.backgroundWrapper}>
        {isBackgroundHandVersion ? backgroundHandVersion() : backgroundHeadVersion()}
      </div>
      <div css={Style.pageWrapper}>
        <Header rightDoneButton />
        {data && <div>{LetterCardWithCss({ data })}</div>}
        <div css={Style.footer.btnGroup}>
          <CopyLink />
          <div>
            <button>이미지 저장</button>
            <button onClick={() => router.push('/letter/edit')}>수정하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}