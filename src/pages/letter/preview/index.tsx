import Header from '@/components/header/header';
import {
  BackgroundPreviewFinger,
  BackgroundPreviewHand,
  BackgroundPreviewHead,
} from '../../../../public/assets/svgs';
import * as Style from './index.css';
import { useEffect, useRef, useState } from 'react';
import CopyLink from '@/components/copy-link/copy-link';
import LetterCard from '@/components/letter-card/letter-card';
import { getPost } from '@/apis/getPost';
import { APIResponse, PostData } from '@/data/type';
import DateTimeFormat from '@/utils/dateTimeFormat';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import html2canvas from 'html2canvas';
import Button from '@/components/button';

export default function PreviewLetter() {
  const router = useRouter();
  const letterId = router.query.postId;

  const { data } = useQuery({
    queryKey: ['getPost', letterId],
    queryFn: () => getPost({ postId: Number(letterId) }),
  });

  const [isBackgroundHandVersion, setIsBackgroundHandVersion] = useState(true);

  const element1Ref = useRef<HTMLDivElement | null>(null);
  const element2Ref = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    const element1 = element1Ref.current;
    const element2 = element2Ref.current;

    if (element1 && element2) {
      hideElements(element1, element2);
    }

    const page = document.querySelector('#letter');

    try {
      const canvas = await html2canvas(page as HTMLElement, {
        backgroundColor: '#009436',
      });

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'capturedImage.png';
      link.click();

      showElements(element2, element1);
    } catch (error) {
      console.error('html2canvas error');
    }
  };

  const hideElements = (...elements: (HTMLDivElement | null)[]) => {
    elements.forEach((element) => {
      if (element) {
        element.style.display = 'none';
      }
    });
  };

  const showElements = (...elements: (HTMLDivElement | null)[]) => {
    elements.forEach((element) => {
      if (element) {
        element.style.display = 'block';
      }
    });
  };

  useEffect(() => {
    const randomNumber = Math.random();
    setIsBackgroundHandVersion(randomNumber < 0.1 ? true : false);
  }, [isBackgroundHandVersion]);

  const backgroundHandVersion = () => {
    return (
      <div className="background">
        <div css={Style.background.hand}>
          <BackgroundPreviewHand />
        </div>
        <div css={Style.background.finger}>
          <BackgroundPreviewFinger />
        </div>
      </div>
    );
  };

  const backgroundHeadVersion = () => {
    return (
      <div className="background" css={Style.background.head}>
        <BackgroundPreviewHead />
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
    <div id="letter">
      <div css={Style.backgroundWrapper}>
        {isBackgroundHandVersion ? backgroundHandVersion() : backgroundHeadVersion()}
      </div>
      <div css={Style.pageWrapper}>
        <div ref={element1Ref}>
          <Header rightDoneButton />
        </div>
        {data && <div>{LetterCardWithCss({ data })}</div>}
        <div css={Style.footer.btnGroup} ref={element2Ref}>
          <CopyLink />
          <div css={Style.footer.bottombtn}>
            <Button variants="secondary" onClick={handleDownload}>
              이미지 저장
            </Button>
            <Button
              variants="primary"
              onClick={() =>
                router.push(
                  {
                    pathname: '/letter/edit',
                    query: {
                      postId: letterId,
                    },
                  },
                  '/letter/edit',
                )
              }
            >
              수정하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
