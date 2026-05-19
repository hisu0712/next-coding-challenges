import { createReviewAction } from "@/actions/create-review-action.action";
import style from "./review-editor.module.css";

export default function ReviewEditor({ movieId }: { movieId: string }) {
  return (
    <section>
      <form action={createReviewAction} className={style.form_container}>
        <input name="movieId" value={movieId} hidden readOnly />
        <textarea name="content" required placeholder="리뷰 내용"></textarea>
        <div className={style.submit_container}>
          <input name="author" required placeholder="작성자" />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}
