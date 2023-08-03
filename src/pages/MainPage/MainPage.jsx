import React from "react";
import Item from "../../components/Item/Item";
import styles from "./MainPage.module.css";

export default function MainPage() {
  const aa = ["유", "튜", "뷰"];
  return (
    <main className={styles.main_list}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </main>
  );
}
