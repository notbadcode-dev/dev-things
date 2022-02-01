import React from "react";
import styles from "./card-list.module.css";
import Card from "../card/card.component";

import { ICard } from "../../../../core/models/card.model";

type Props = {
  cardList: ICard[];
};

const CardList: React.FC<Props> = ({ cardList }) => {
  return (
    <>
      <div className={styles.cardList}>
        {cardList.map((card: ICard) => {
          return <Card {...{ card }} key={card.id} />;
        })}
      </div>
    </>
  );
};

export default CardList;
