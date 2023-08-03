import React from "react";
import DetailItem from "../DetailItem/DetailItem";
import styles from "./SubList.module.css";

export default function SubList() {
  return (
    <div className={styles.list_container}>
      <DetailItem />
      <DetailItem />
      <DetailItem />
      <DetailItem />
      <DetailItem />
      <DetailItem />
      <DetailItem />
      <DetailItem />
      <DetailItem />
      <DetailItem />
      <DetailItem />
    </div>
  );
}
