import { motion } from 'framer-motion';
import * as Style from '../../../styles/home/_components/home-message.css';
import { useQuery } from '@tanstack/react-query';
import { getFubaoLove } from '../../../apis/getFubaoLove';
interface HomeMessageProps {
  scratchableEnd: boolean;
}

export default function HomeMessage({ scratchableEnd }: HomeMessageProps) {
  const { data: loveData } = useQuery({
    queryKey: ['fubaoLove'],
    queryFn: getFubaoLove,
  });
  const beforeMessage = `하트를 문질러서 \n 푸바오를 만나보세요 !`;
  const afterMessage = `지금까지 바오에게 \n 전달된 사랑은 총 ${loveData?.data.love} 개`;
  return (
    <motion.div
      animate={{
        scale: [1, 1.02, 1],
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        },
      }}
    >
      <p css={Style.base}>{scratchableEnd ? afterMessage : beforeMessage}</p>
    </motion.div>
  );
}
