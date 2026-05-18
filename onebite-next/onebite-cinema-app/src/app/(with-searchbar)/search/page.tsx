import { MovieData } from "@/types";
import style from "./page.module.css";
import MovieItem from "@/components/movie-item";
import delay from "@/util/delay";
import { Suspense } from "react";

async function SearchResult({ q }: { q: string }) {
  await delay(1500);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_API}/movie/search?q=${q}`
  );
  if (!response.ok) return <div>오류가 발생했습니다...</div>;

  const movies: MovieData[] = await response.json();

  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <Suspense key={q || ""} fallback={<div>로딩중...</div>}>
      <SearchResult q={q || ""} />
    </Suspense>
  );
}
