import style from "./page.module.css";
import MovieItem from "@/components/movie-item";
import movies from "@/dummy.json";

export default async function Page() {
  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
