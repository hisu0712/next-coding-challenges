import { API_URL } from "../app/(home)/page";

async function getSimilar(id) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function MovieSimilar({ id }) {
  const similars = await getSimilar(id);

  return (
    <div>
      {similars.map((similar) => (
        <img src={similar.backdrop_path} alt />
      ))}
    </div>
  );
}