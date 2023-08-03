import React from "react";
import styles from "./DetailPage.module.css";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import SubList from "../../components/SubList/SubList";
import Comment from "../../components/Comment/Comment";

export default function DetailPage() {
  return (
    <div className={styles.detail_container}>
      <div className={styles.left_container}>
        <VideoDetail />
        <Comment />
      </div>
      <div className={styles.rigth_container}>
        <SubList />
      </div>
    </div>
  );
}
