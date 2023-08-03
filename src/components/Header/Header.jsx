import React from "react";
import { BiVideoPlus, BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineBell, AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header_container}>
      <button className={styles.logo_btn}>
        <AiFillYoutube className={styles.youtube_icon} />
        <p>YouTube</p>
      </button>
      <div className={styles.input_bar_container}>
        <input className={styles.search_input} type="text" placeholder="검색" />
        <button className={styles.search_bar_btn}>
          <AiOutlineSearch />
        </button>
      </div>
      <div className={styles.user_info_container}>
        <button className={styles.video_btn}>
          <BiVideoPlus />
        </button>
        <button className={styles.alarm_btn}>
          <AiOutlineBell />
        </button>
        <button className={styles.user_btn}>
          <BiSolidUserCircle />
        </button>
      </div>
    </div>
  );
}
