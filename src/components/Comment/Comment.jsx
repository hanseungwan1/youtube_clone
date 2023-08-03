import React from "react";
import { MdSort } from "react-icons/md";
import CommentItem from "../CommentItem/CommentItem";
import styles from "./Comment.module.css";

export default function Comment() {
  return (
    <div className={styles.comment_container}>
      <div className={styles.comment_top}>
        <p className={styles.comment_btn}>댓글 508개</p>
        <button className={styles.sort_btn}>
          <MdSort />
          정렬 기준
        </button>
      </div>
      <div className={styles.user_input_container}>
        <img className={styles.user_img} src="/product1-1.jpg" alt="" />
        <input className={styles.input} type="text" />
      </div>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  );
}
