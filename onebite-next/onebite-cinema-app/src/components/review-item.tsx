import ReviewItemDeleteButton from "./review-item-delete-button";
import style from "./review-item.module.css";
import { ReviewData } from "@/types";

export default function ReviewItem({
  id,
  createdAt,
  content,
  author,
  movieId,
}: ReviewData) {
  return (
    <div className={style.container}>
      <div className={style.top_container}>
        <div className={style.author}>{author}</div>
        <div className={style.date}>
          {new Date(createdAt).toLocaleDateString()} 일 작성됨
        </div>
      </div>
      <div className={style.content}>{content}</div>
      <ReviewItemDeleteButton reviewId={id} movieId={movieId} />
    </div>
  );
}
