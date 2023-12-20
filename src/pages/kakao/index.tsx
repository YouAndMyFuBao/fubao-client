import Link from 'next/link';

const Kakao = () => {
  return (
    <Link
      href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env
        .NEXT_PUBLIC_KAKAO_REST_API_KEY!}&redirect_uri=${
        process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
      }&response_type=code`}
    >
      <button>카카오 간편 로그인</button>
    </Link>
  );
};

export default Kakao;
