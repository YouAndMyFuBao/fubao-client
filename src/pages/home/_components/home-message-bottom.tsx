import * as Style from './home-message-bottom.css';

export default function HomeMessageBottom() {
  const visitors = 100;
  return <p css={Style.base}>지금까지 바오에게 전달된 사랑은 총 {visitors}개</p>;
}
