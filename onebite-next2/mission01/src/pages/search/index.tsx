import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import style from "./index.module.css";
import MovieItem from "@/components/movie-item";
import movies from "@/mock/dummy.json";

export default function Page() {
  return (
    <div className={style.grid3}>
      {movies.slice(0, 1).map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
