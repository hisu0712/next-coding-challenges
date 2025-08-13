import { API_URL } from "../../../(home)/page";
import { getMovie } from "../../../../components/movie-info";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const movie = await getMovie(id)

  return {
    title: movie.title
  }
}

async function getProviders(id) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function providerDetailPage({ params }) {
  const { id } = await params;
  const providers = await getProviders(id);

  return (
    <ul>
      {Object.entries(providers).map(([code, info]) => (
        <li key={code}>
          <h1>{code}</h1>
          <a href={info.link}>{info.link}</a>
        </li>
      ))}
    </ul>
  );
}
