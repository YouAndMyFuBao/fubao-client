import Header from '@/components/header/header';
import LetterCard from '@/components/letter-card/letter-card';
import * as Style from './index.css';
import { useGetPost } from '@/apis/getPost';
import { APIResponse, PostData } from '@/data/type';
import DateTimeFormat from '@/utils/dateTimeFormat';

function CheckDataValidity({ data }: { data?: APIResponse<PostData> }) {
  if (!data) return;

  return data;
}

export default function Edit() {
  const postId = 1;
  const { data } = useGetPost({ postId });
  CheckDataValidity({ data });
  console.log('data', data);

  return (
    <div>
      <Header leftBackPage>푸바오에게 편지쓰기</Header>
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
      <button>편지 완성하기</button>
    </div>
  );
}
