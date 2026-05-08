import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchOneMovie from "@/lib/fetch-one-movie";
import fetchMovies from "@/lib/fetch-movies";
import { useRouter } from "next/router";

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id;
  const movie = await fetchOneMovie(Number(id));

  return {
    props: {
      movie,
    },
  };
};

export const getStaticPaths = async () => {
  const movies = await fetchMovies();

  return {
    paths: movies.map((movie) => ({
      params: { id: String(movie.id) },
    })),
    fallback: true,
  };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) return "로딩중입니다";
  if (!movie) return "문제가 발생했습니다 다시 시도하세요";

  const {
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${posterImgUrl})` }}
      >
        <img src={posterImgUrl} alt={title} />
      </div>
      <div className={style.title}>{title}</div>
      <div>
        {releaseDate} | {genres} | {runtime}
      </div>
      <div>{company}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
