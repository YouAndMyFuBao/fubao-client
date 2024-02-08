import Header from '@/components/header/header';
import LetterCard from '@/components/letter-card/letter-card';
import * as Style from './[id].css';
import { useGetPost } from '@/apis/getPost';
import DateTimeFormat from '@/utils/dateTimeFormat';
import { useLetterContext } from '@/hooks/useLetterContext';
import { patchPost } from '@/apis/patchPost';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import Button from '@/components/button';

export default function Edit() {
  const router = useRouter();
  const activePostId = Number(router.query.activePostId);
  const { letterImage, letterText } = useLetterContext();

  const { data } = useGetPost({ postId: activePostId });

  const { mutate, data: patchData } = useMutation({
    mutationKey: ['patchPost', activePostId],
    mutationFn: () => patchPost({ postId: activePostId, image: letterImage, content: letterText }),
    onSuccess: (data) => {
      console.log('patchSuccess', data);
      router.push(`/my-letter`);
    },
  });

  const handleSubmitClick = async () => {
    mutate();
    console.log('patchData', patchData);
  };

  return (
    <div css={Style.wrapper}>
      <Header leftBackPage hasLeftBackModal={false}>
        편지 수정하기
      </Header>
      <div css={Style.main.card}>
        {data && (
          <LetterCard
            variant="textCount"
            apiImage={data?.data.imageUrl}
            apiText={data?.data.content}
            apiDate={DateTimeFormat(data?.data.date)}
          />
        )}
      </div>
      <div css={Style.main.button}>
        <Button variants="primary" onClick={handleSubmitClick}>
          수정 완료하기
        </Button>
      </div>
    </div>
  );
}
