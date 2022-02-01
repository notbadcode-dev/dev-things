import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import CardList from "../common/components/cards/card-list/card-list.component";

import { ICard } from "../core/models/card.model";

const CARD_LIST: ICard[] = require("../json/card-list.json");

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {<CardList {...{ cardList: CARD_LIST }} />}
      </main>
    </div>
  );
};

export default Home;
