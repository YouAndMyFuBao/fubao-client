import * as Style from './home-message-bottom.css';
import { useQuery } from '@tanstack/react-query';
import { getFubaoLove } from '../../../apis/getFubaoLove';

export default function HomeMessageBottom() {
  const { data: loveData } = useQuery({
    queryKey: ['fubaoLove'],
    queryFn: getFubaoLove,
  });
  return <p css={Style.base}>지금까지 바오에게 전달된 사랑은 총 {loveData?.data.love}개</p>;
}
