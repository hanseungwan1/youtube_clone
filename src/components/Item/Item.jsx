import React from "react";
import styles from "./Item.module.css";
import { useNavigate } from "react-router-dom";

export default function Item() {
  const navigate = useNavigate();
  return (
    <div
      className={styles.item_container}
      onClick={() => {
        navigate("/detail");
      }}
    >
      <img className={styles.video_img} src="/product1-1.jpg" alt="" />
      <div className={styles.content}>
        <img
          className={styles.channer_icon}
          src="/product1-1.jpg"
          alt="channer_icon"
        />
        <div className={styles.text_container}>
          <p className={styles.title}>
            동영상제목동영상제목동영상제목동영상제목동영상제목
          </p>
          <p className={styles.channer_name}>
            채널이름채널이름채널이름채널이름 채널이름채널이름채널이름채널이름
          </p>
          <p className={styles.channer_name}>
            조회수 <span>6시간전</span>
          </p>
        </div>
      </div>
    </div>
  );
}
