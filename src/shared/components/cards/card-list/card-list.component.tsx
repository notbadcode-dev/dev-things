import React from "react";
import Card from "../card/card.component";

import { ICard } from "../../../models/card.model";

import styles from "./card-list.module.scss";

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
