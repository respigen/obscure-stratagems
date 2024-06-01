import React from "react";
import styles from "./page.module.css";
import { texts } from "./text";

interface CardProps {
  rotation: number;
  text: number;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = (props) => {
  const text = texts[props.text];
  const rotation = props.rotation;

  const handleDelete = () => {
    props.onDelete();
  };

  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.card}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <button className={styles.closeButton} onClick={handleDelete}>
          X
        </button>
        {text}
      </div>
    </div>
  );
};

export default Card;
