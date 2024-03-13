import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { getFubaoLove } from '../../../apis/getFubaoLove';

export default function HomeMessageBottom() {
  const { data: loveData } = useQuery({
    queryKey: ['fubaoLove'],
    queryFn: getFubaoLove,
  });
  return <p css={base}>지금까지 바오에게 전달된 사랑은 총 {loveData?.data.love}개</p>;
}

const base = css({
  fontSize: '14px',
  color: 'white',
  marginTop: '150px',
});
