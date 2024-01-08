import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { postLogin } from '@/apis/postLogin';
import { setCookie } from 'cookies-next';

const Redirect = () => {
  const router = useRouter();

  const getAuth = async (code: string) => {
    const data = await postLogin(code);
    const accessToken = data.accessToken;
    const refreshToken = data.refreshToken;
    if ({ data }) {
      setCookie('accessToken', accessToken, {
        maxAge: 60 * 30,
      });
      setCookie('refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30,
      });
    }
    router.push('/home');
  };

  useEffect(() => {
    const { query } = router;
    const code = query.code as string;
    if (!code) {
      return;
    }
    getAuth(code);
  }, [router]);

  return null;
};

export default Redirect;
