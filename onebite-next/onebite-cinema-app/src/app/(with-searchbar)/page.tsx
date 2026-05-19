import MovieItem from "@/components/movie-item";
import style from "./page.module.css";
import { MovieData } from "@/types";
import delay from "@/util/delay";
import MovieItemSkeleton from "@/components/skeleton/movie-item-skeleton";
import { Suspense } from "react";
import MovieListSkeleton from "@/components/skeleton/movie-list-skeleton";

async function AllMovies() {
  await delay(1500);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { cache: "force-cache" }
  );
  if (!response) return <div>오류가 발생했습니다...</div>;

  const allMovies: MovieData[] = await response.json();

  return (
    <div className={style.all_container}>
      {allMovies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

async function RecoMovies() {
  await delay(3000);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    {
      next: { revalidate: 3 },
    }
  );
  if (!response) return <div>오류가 발생했습니다...</div>;

  const recoMovies: MovieData[] = await response.json();

  return (
    <div className={style.reco_container}>
      {recoMovies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <Suspense
          fallback={
            <div className={style.reco_container}>
              <MovieListSkeleton count={3} />
            </div>
          }
        >
          <RecoMovies />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <Suspense
          fallback={
            <div className={style.all_container}>
              <MovieListSkeleton count={15} />
            </div>
          }
        >
          <AllMovies />
        </Suspense>
      </section>
    </div>
  );
}
