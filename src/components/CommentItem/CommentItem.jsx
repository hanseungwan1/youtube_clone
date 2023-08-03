import React from "react";
import styles from "./CommentItem.module.css";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";

export default function CommentItem() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="product1-1.jpg" alt="" />
      <div className={styles.users_box}>
        <h5>
          유저이름<span>2일전</span>
        </h5>
        <p>댓글내용입니다케케케</p>
        <div className={styles.good_bad_btn}>
          <button>
            <BsHandThumbsUp />
          </button>
          <button>
            <BsHandThumbsDown />
          </button>
        </div>
      </div>
    </div>
  );
}
