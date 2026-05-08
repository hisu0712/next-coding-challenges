import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";
import style from "./index.module.css";
import MovieItem from "@/components/movie-item";
import fetchMovies from "@/lib/fetch-movies";
import { useRouter } from "next/router";
import { MovieData } from "@/types";

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const q = context.query.q;
//   const movies = await fetchMovies(q as string);

//   return {
//     props: { movies },
//   };
// };

export default function Page() {
  const [movies, setMovies] = useState<MovieData[]>([]);

  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchMovies(q as string);
    setMovies(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div className={style.movie_wrapper}>
      {movies.slice(0, 1).map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (children: ReactNode) => {
  return <SearchableLayout>{children}</SearchableLayout>;
};
