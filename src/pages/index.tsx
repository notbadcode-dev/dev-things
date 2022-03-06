import { NextPage } from "next";
import Head from "next/head";
import CardList from "../shared/components/cards/card-list/card-list.component";

import { ICard } from "../shared/models/card.model";

import styles from "../styles/Home.module.scss";

const CARD_LIST: ICard[] = require("../shared/json/card-list.json");

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev-things</title>
        <meta name="description" content="Utils for developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {<CardList {...{ cardList: CARD_LIST }} />}
      </main>
    </div>
  );
};

export default Home;
