import { FC, useState } from "react";
import update from "immutability-helper";
import Card from "./Card";

const style = {
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};

export interface Item {
  id: number;
  text: string;
}
export interface ContainerState {
  cards: Item[];
}

const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: "Write a cool JS library",
      },
      {
        id: 2,
        text: "Make it generic enough",
      },
      {
        id: 3,
        text: "Write README",
      },
      {
        id: 4,
        text: "Create some examples",
      },
      {
        id: 5,
        text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
      },
      {
        id: 6,
        text: "???",
      },
      {
        id: 7,
        text: "PROFIT",
      },
    ]);

    const moveCard = (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    };

    return (
      <div style={style}>
        {cards.map((card, i) => (
          <Card
            key={card.id}
            index={i}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        ))}
      </div>
    );
  }
};

export default Container;
