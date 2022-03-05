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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-Y0********`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-CESBSK5K2T', {
                                page_path: window.location.pathname,
                                });
                            `,
          }}
        />

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
