import MovieItem from "@/components/movie-item";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import movies from "@/mock/dummy.json";
import style from "./index.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <section className={style.section_recommend}>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.movie_wrapper}>
          {movies.slice(0,3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section className={style.section_all}>
        <h3>등록된 모든 영화</h3>
        <div className={style.movie_wrapper}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
