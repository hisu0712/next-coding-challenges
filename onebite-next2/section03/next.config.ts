import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Next.js 개발 환경에서 서버가 실행하는 fetch() 요청의 전체 URL을 터미널에 출력하도록 설정하는 옵션
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
