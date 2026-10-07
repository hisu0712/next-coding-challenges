import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";
import style from "./index.module.css";
import MovieItem from "@/components/movie-item";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchMovies from "@/lib/fetch-movies";
import { useRouter } from "next/router";
import { MovieData } from "@/types";

export const getStaticProps = () => {
  return { props: {} };
};

export default function Page() {
  const router = useRouter();
  const [movies, setMovies] = useState<MovieData[]>([]);

  const q = router.query.q;

  useEffect(() => {
    if (!q) return;

    const loadMovies = async () => {
      const movies = await fetchMovies(q as string);
      setMovies(movies);
    };

    loadMovies();
  }, [q]);

  return (
    <div className={style.grid3}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
