import React from "react";
import styles from "./VideoDetail.module.css";
import { BiBellOff, BiShare } from "react-icons/bi";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { MdMoreHoriz } from "react-icons/md";

export default function VideoDetail() {
  return (
    <div className={styles.container}>
      <img className={styles.main_video} src="/product1-1.jpg" alt="" />
      <div className={styles.text_container}>
        <h2 className={styles.title_name}>동영상 제목입니다 케케케</h2>
        <div className={styles.title_container}>
          <div className={styles.channel_container}>
            <img className={styles.channel_icon} src="/product1-1.jpg" alt="" />
            <div className={styles.channel_name}>
              <h3>채널명</h3>
              <p>구독자수</p>
            </div>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "14px",
              }}
              className={styles.sub_btnn}
            >
              <BiBellOff />
              구독중
            </button>
          </div>
          <div className={styles.right_box}>
            <div className={styles.sum_btn}>
              <button className={styles.up_down}>
                <BsHandThumbsUp />
              </button>
              <div className={styles.bar}></div>
              <button className={styles.up_down}>
                <BsHandThumbsDown />
              </button>
            </div>
            <button className={styles.btn}>
              <BiShare />
              <p style={{ marginLeft: "8px" }}>공유</p>
            </button>
            <button className={styles.btn}>
              <MdMoreHoriz />
            </button>
          </div>
        </div>
        <div className={styles.dec_box}>
          <p className={styles.dec_top}>
            조회수 <span>3시간전</span>
          </p>
          <p>블라블라블라</p>
        </div>
      </div>
    </div>
  );
}
