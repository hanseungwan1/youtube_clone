import React, { useEffect, useState } from "react";
import Item from "../../components/Item/Item";
import styles from "./MainPage.module.css";

export default function MainPage() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/videos/popular.json")
      .then((res) => res.json())
      .then((data) => {
        setList(data.items);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (loading)
    return (
      <div className={styles.loading_container}>
        <img src="/img/loadin.png" alt="" />
      </div>
    );

  return (
    <main className={styles.main_list}>
      {list.map((el) => {
        const { snippet } = el;
        const {
          publishedAt,
          channelId,
          title,
          description,
          channelTitle,
          thumbnails,
        } = snippet;
        return (
          <Item
            key={channelId}
            date={publishedAt}
            id={channelId}
            title={title}
            des={description}
            channelTitle={channelTitle}
            img={thumbnails}
          />
        );
      })}
    </main>
  );
}
