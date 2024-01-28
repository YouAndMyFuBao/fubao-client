import Header from '@/components/header/header';
import {
  BackgroundPreviewFinger,
  BackgroundPreviewHand,
  BackgroundPreviewHead,
} from '../../../../public/assets/svgs';
import * as Style from './[id].css';
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
import { getCookie } from 'cookies-next';
import { getImage } from '@/apis/getImage';

export default function PreviewLetterWithId() {
  const router = useRouter();
  const letterIdFromRouterLoggined = router.query.postId;
  const letterIdFromRouterNotLoggined = router.query.id;

  const letterId = Number(letterIdFromRouterLoggined) || Number(letterIdFromRouterNotLoggined);

  console.log('letterId', letterId);

  const accessToken = getCookie('accessToken');

  const { data } = useQuery<APIResponse<PostData>>({
    queryKey: ['getPost'],
    queryFn: () => getPost({ postId: letterId }),
    enabled: !!letterId,
  });

  const { data: imageUrl } = useQuery({
    queryKey: ['getImage'],
    queryFn: () => (letterId ? getImage({ postId: letterId }) : Promise.resolve({})),
    enabled: !!letterId,
  });

  const [isBackgroundHandVersion, setIsBackgroundHandVersion] = useState(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const element1Ref = useRef<HTMLDivElement | null>(null);
  const element2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const randomNumber = Math.random();
    setIsBackgroundHandVersion(randomNumber < 0.5 ? true : false);
  }, [isBackgroundHandVersion]);

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
      link.download = 'LetterToFubao.png';
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
    const base = 'data:image/png;base64,';
    const imageUrlAsBase64 = base + imageUrl;

    if (isBackgroundHandVersion) {
      return (
        <div css={Style.mainLetterCard.hand}>
          <LetterCard
            variant="date"
            apiImage={imageUrlAsBase64}
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
            apiImage={imageUrlAsBase64}
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
        <div css={Style.pageWrapper}>
          <div ref={element1Ref}>
            {isMounted && accessToken ? <Header rightDoneButton /> : <Header rightCloseButton />}
          </div>
          {data && <div>{LetterCardWithCss({ data })}</div>}
          <div css={Style.footer.btnGroup} ref={element2Ref}>
            <CopyLink />
            <div css={Style.footer.bottombtn}>
              <Button variants="secondary" onClick={handleDownload}>
                이미지 저장
              </Button>
              {isMounted && (
                <Button
                  variants="primary"
                  onClick={() => {
                    if (accessToken) {
                      router.push(
                        {
                          pathname: '/letter/edit',
                          query: {
                            postId: letterId,
                          },
                        },
                        '/letter/edit',
                      );
                    } else {
                      router.push('/home');
                    }
                  }}
                >
                  {accessToken ? '수정하기' : '처음으로'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
