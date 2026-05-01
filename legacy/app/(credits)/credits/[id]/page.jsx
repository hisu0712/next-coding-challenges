import { Suspense } from "react";
import MovieCredits from "../../../../components/movie-credits";
import { getMovie } from "../../../../components/movie-info";
import MovieSimilar from "../../../../components/movie-similar";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default async function CreaditDetailPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>로딩중</h1>}>
        <MovieCredits id={id} />
      </Suspense>
      <Suspense>
        <MovieSimilar id={id} />
      </Suspense>
    </div>
  );
}
