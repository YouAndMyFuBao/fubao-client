import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { postLogin } from '@/apis/postLogin';
import { setCookie } from 'cookies-next';

const Redirect = () => {
  const router = useRouter();

  const getAuth = async (code: string) => {
    const data = await postLogin(code);
    const accessToken = data.data.accessToken;
    if ({ data }) {
      setCookie('accessToken', accessToken);
    }
    router.push('/home');
  };

  useEffect(() => {
    const { query } = router;
    const code = query.code as string;
    if (!code) {
      console.log('카카오 인가코드 없음');
      return;
    }
    getAuth(code);
  }, [router]);

  return null;
};

export default Redirect;
