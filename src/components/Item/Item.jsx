import React from "react";
import styles from "./Item.module.css";
import { useNavigate } from "react-router-dom";

export default function Item({ date, id, title, des, channelTitle, img }) {
  const navigate = useNavigate();
  console.log(img);
  return (
    <div
      className={styles.item_container}
      onClick={() => {
        navigate("/detail");
      }}
    >
      <img className={styles.video_img} src={img.default.url} alt="" />

      <div className={styles.content}>
        <img
          className={styles.channer_icon}
          src="/product1-1.jpg"
          alt="channer_icon"
        />
        <div className={styles.text_container}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channer_name}>{channelTitle}</p>
          <p className={styles.channer_name}>
            조회수 <span>{date}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
