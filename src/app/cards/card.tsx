import React from "react";
import styles from "./card.module.css";
import { texts } from "../text";

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
    <div
      className={styles.card}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <button className={styles.deleteButton} onClick={handleDelete}>
        X
      </button>
      {text}
    </div>
  );
};

export default Card;
