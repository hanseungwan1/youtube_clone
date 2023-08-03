import React from "react";
import styles from "./DetailItem.module.css";

export default function DetailItem() {
  return (
    <div className={styles.container}>
      <img className={styles.video_img} src="/product1-1.jpg" alt="" />
      <div className={styles.text_box}>
        <h4>동영상제목</h4>
        <p>채널명</p>
        <p>
          조회수 <span>14시간전</span>
        </p>
      </div>
    </div>
  );
}
