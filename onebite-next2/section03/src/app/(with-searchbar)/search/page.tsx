// 경로 상의 값들(query, params 등)은 모두 페이지에 props로 전달됨
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  return <div>서치 페이지 {q}</div>;
}
