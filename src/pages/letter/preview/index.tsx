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
import { getPost } from '@/apis/getPost';
import { APIResponse, PostData } from '@/data/type';
import DateTimeFormat from '@/utils/dateTimeFormat';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

export default function PreviewLetter() {
  const router = useRouter();
  const letterId = router.query.postId;

  const { data } = useQuery({
    queryKey: ['getPost', letterId],
    queryFn: () => getPost({ postId: Number(letterId) }),
  });

  const [isBackgroundHandVersion, setIsBackgroundHandVersion] = useState(true);

  // const divRef = useRef<HTMLDivElement>(null);

  // const handleDownload = async () => {
  //   if (!divRef.current) return;
  //   try {
  //     const div = divRef.current;
  //     const canvas = await html2canvas(div, { scale: 2 });
  //     canvas.toBlob((blob) => {
  //       if (blob !== null) {
  //         saveAs(blob, 'result.png');
  //       }
  //     });
  //   } catch (error) {
  //     console.error('Error converting div to image:', error);
  //   }
  // };

  useEffect(() => {
    const randomNumber = Math.random();
    setIsBackgroundHandVersion(randomNumber < 0.5 ? true : false);
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
    <div id="letter-wrapper">
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
            <button
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
