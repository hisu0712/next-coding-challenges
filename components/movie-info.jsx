import potato from "../styles/movie-info.module.css";
import { API_URL } from "../app/(home)/page";

export async function getMovie(id) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);

  return (
    <div className={potato.container}>
      <img
        src={movie.poster_path}
        className={potato.poster}
        alt={movie.title}
      />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>

      {movie.production_companies.map((company) => (
        <li key={company.id}>
          <img src={company.logo_path} alt />
          {company.name}
        </li>
      ))}
    </div>
  );
}
