import React from "react";
import styles from "./buttons.module.css";

type ButtonContainerProps = {
  handleDivClick: () => void;
  deleteCard: (index: number) => void;
  cardsLength: number;
  cardsMaximum: number;
};

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  handleDivClick,
  deleteCard,
  cardsLength,
  cardsMaximum,
}) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.addCardButton}
        onClick={handleDivClick}
        disabled={cardsLength === cardsMaximum}
      >
        +
      </button>
      {cardsLength > 0 && (
        <button
          className={styles.subtractCardButton}
          onClick={() => deleteCard(cardsLength - 1)}
        >
          -
        </button>
      )}
    </div>
  );
};

export default ButtonContainer;
