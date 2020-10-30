import React, { useState } from "react";
import Toy from "./Toy";
import styles from "../styles/Robots.module.css";

const Toys = (props) => {
  const [toys] = useState([
    {
      id: 1,
      name: "ABC",
      price: 22,
      img:
        "https://i5.walmartimages.com/asr/90e62e70-3e81-45bb-8878-110689847d25_1.6f1918b9c96200a8bff790f76996670c.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    },
    {
      id: 2,
      name: "DBC",
      price: 33,
      img:
        "https://i5.walmartimages.com/asr/90e62e70-3e81-45bb-8878-110689847d25_1.6f1918b9c96200a8bff790f76996670c.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    },
    {
      id: 3,
      name: "XXERFG",
      price: 42,
      img:
        "https://i5.walmartimages.com/asr/90e62e70-3e81-45bb-8878-110689847d25_1.6f1918b9c96200a8bff790f76996670c.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    },
    {
      id: 4,
      name: "ABC",
      price: 22,
      img:
        "https://i5.walmartimages.com/asr/90e62e70-3e81-45bb-8878-110689847d25_1.6f1918b9c96200a8bff790f76996670c.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    },
    {
      id: 5,
      name: "DBC",
      price: 33,
      img:
        "https://i5.walmartimages.com/asr/90e62e70-3e81-45bb-8878-110689847d25_1.6f1918b9c96200a8bff790f76996670c.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    },
    {
      id: 6,
      name: "XXERFG",
      price: 42,
      img:
        "https://i5.walmartimages.com/asr/90e62e70-3e81-45bb-8878-110689847d25_1.6f1918b9c96200a8bff790f76996670c.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    },
    {
      id: 7,
      name: "ABC",
      price: 22,
      img:
        "https://i5.walmartimages.com/asr/90e62e70-3e81-45bb-8878-110689847d25_1.6f1918b9c96200a8bff790f76996670c.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    },
    {
      id: 8,
      name: "DBC",
      price: 33,
      img:
        "https://i5.walmartimages.com/asr/90e62e70-3e81-45bb-8878-110689847d25_1.6f1918b9c96200a8bff790f76996670c.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    },
    {
      id: 9,
      name: "XXERFG",
      price: 42,
      img:
        "https://i5.walmartimages.com/asr/90e62e70-3e81-45bb-8878-110689847d25_1.6f1918b9c96200a8bff790f76996670c.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    },
  ]);

  let toysPage = [];
  for (let i = 1; i <= props.size; i++) {
    const toysIndex = toys.findIndex((toy) => (toy.id = i));
    toysPage.push(toys[toysIndex]);
  }

  return (
    <div className={styles.toys__card}>
      {toysPage.map((toy) => (
        <Toy key={toy.id} toy={toy} />
      ))}
    </div>
  );
};

export default Toys;
