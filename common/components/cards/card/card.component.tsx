import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./card.module.css";

import { ICard } from "../../../../core/models/card.model";
import { IIcon } from "../../../../core/models/icon.model";

type Props = {
  card: ICard;
};

const Card: React.FC<Props> = ({ card }) => {
  const ICON: IIcon = card.icon;

  return (
    <Link href={card.route}>
      <a className={styles.card}>
        <div className={styles.content}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>

        <div className={styles.iconCard}>
          <>
            <Icon
              icon={card.icon.value}
              inline={card.icon.inline}
              className={styles.iconCard}
            />
          </>
        </div>
      </a>
    </Link>
  );
};

export default Card;
