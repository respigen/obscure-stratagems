import React, { useState } from "react";
import styles from "./card-container.module.css";
import Card from "./card";
import { texts } from "../text";
import ButtonContainer from "../buttons/button-container";

type CardContainerProps = {
  prefersReducedMotion: boolean;
};

type Card = {
  rotation: number;
  textIndex: number;
};

const CardContainer: React.FC<CardContainerProps> = ({
  prefersReducedMotion = false,
}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const deleteCard = (index: number) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  const handleDivClick = () => {
    let newCard: Card;
    let uniqueTextFound = false;
    if (cards.length >= texts.length) {
      return;
    }
    do {
      newCard = {
        rotation: prefersReducedMotion ? 0 : Math.random() * 15 - 7,
        textIndex: Math.floor(Math.random() * texts.length),
      };

      // Check if the new card's textIndex is unique
      if (!cards.some((card) => card.textIndex === newCard.textIndex)) {
        uniqueTextFound = true;
      }
    } while (!uniqueTextFound);

    setCards([...cards, newCard]);
  };

  return (
    <>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <Card
            key={index}
            rotation={card.rotation}
            text={card.textIndex}
            onDelete={() => {
              deleteCard(index);
            }}
          />
        ))}
      </div>
      <ButtonContainer
        handleDivClick={handleDivClick}
        deleteCard={() => {
          deleteCard(cards.length - 1);
        }}
        cardsLength={cards.length}
        cardsMaximum={texts.length}
      ></ButtonContainer>
    </>
  );
};

export default CardContainer;
