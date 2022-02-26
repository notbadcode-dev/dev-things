import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

import { ICard } from "../../../models/card.model";

import styles from "./card.module.scss";

type Props = {
  card: ICard;
};

const Card: React.FC<Props> = ({ card }) => {
  const { t } = useTranslation();

  const translateTitle: string = card.title;
  const translateDescription: string = card.description;

  return (
    <Link href={card.route}>
      <a className={styles.card}>
        <div>
          <h2>{t(translateTitle)}</h2>
          <p>{t(translateDescription)}</p>
        </div>

        <div>
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
