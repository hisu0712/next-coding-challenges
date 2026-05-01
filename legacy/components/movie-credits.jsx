import Link from "next/link";
import { API_URL } from "../app/(home)/page";

async function getCredits(id) {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }) {
  const credits = await getCredits(id);

  return (
    <div>
      <ul>
        {credits.map((credit) => (
          <li key={credit.id}>{credit.character}</li>
        ))}
      </ul>
      <Link href={`/providers/${id}`}>회사</Link>
    </div>
  );
}
