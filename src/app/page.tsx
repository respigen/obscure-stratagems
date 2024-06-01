"use client";
import Card from "./card";
import styles from "./page.module.css";
import React, { useState } from "react";
import { texts } from "./text";

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);
  const deleteCard = (index: number) => {
    setCards(cards.filter((_, i) => i !== index));
  };
  const handleDivClick = () => {
    let newCard: any;
    let uniqueTextFound = false;
    if (cards.length >= texts.length) {
      return;
    }
    do {
      newCard = {
        rotation: Math.random() * 15 - 7,
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
    <main className={styles.main}>
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
      <div className={styles.buttonContainer}>
        <button className={styles.addButton} onClick={handleDivClick}>
          +
        </button>
        {cards.length > 0 && (
          <button
            className={styles.removeButton}
            onClick={() => deleteCard(cards.length - 1)}
          >
            -
          </button>
        )}
      </div>
    </main>
  );
}
