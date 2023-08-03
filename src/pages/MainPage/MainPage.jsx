import React, { useEffect } from "react";
import Item from "../../components/Item/Item";
import styles from "./MainPage.module.css";

export default function MainPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
      <Item />
    </main>
  );
}
