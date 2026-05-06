import { MovieData } from "@/types";
import style from "./movie-item.module.css";
import Link from "next/link";

export default function MovieItem({
  id,
  title,
  releaseDate,
  company,
  genres,
  subTitle,
  description,
  runtime,
  posterImgUrl,
}: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl} alt={title} />
    </Link>
  );
}
