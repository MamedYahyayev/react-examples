import React from "react";
import styles from "../styles/Services.module.css";

const Service = ({ services }) => {
  return (
    <div className={styles.services__card}>
      <div className={styles.services__header}>
        <img
          src="https://www.slideteam.net/media/catalog/product/cache/960x720/p/r/project_kickoff_meeting_agenda_powerpoint_presentation_slides_Slide01.jpg"
          alt=""
        />
      </div>
      <div className={styles.services__content}>
        <h1>{services.name}</h1>
        <p>{services.description}</p>
      </div>
    </div>
  );
};

export default Service;
