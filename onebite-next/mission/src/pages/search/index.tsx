import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import style from "./index.module.css"
import movies from "@/mock/dummy.json";
import MovieItem from "@/components/movie-item";

export default function Page() {
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
