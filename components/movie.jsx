"use client";

import styles from "../styles/movie.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Movie({ title, id, poster_path }) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/credits/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
