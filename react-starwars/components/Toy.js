import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const Toy = (props) => {
  return (
    <div className={styles.toy}>
      <img src={props.toy.img} alt="" />
      <h1>{props.toy.name}</h1>
      <p>
        Price: <span>{props.toy.price}$</span>
      </p>
      <div className={styles.click__more}>
        <Link href="">Click More...</Link>
      </div>
    </div>
  );
};

export default Toy;
