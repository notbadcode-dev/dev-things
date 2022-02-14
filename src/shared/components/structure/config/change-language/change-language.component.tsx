import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Button } from "@nextui-org/react";

import styles from "./change-language.module.css";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeTranslation = (translationCode: string) => {
    i18n.changeLanguage(translationCode);
  };

  return (
    <>
      <Grid.Container gap={0}>
        <Grid>
          <Button.Group
            size="sm"
            color="primary"
            bordered
            className={styles.groupButton}
          >
            <Button
              onClick={() => changeTranslation("es")}
              data-active={i18n.language.trim().toLowerCase() === "es"}
            >
              ES
            </Button>
            <Button
              onClick={() => changeTranslation("en")}
              data-active={i18n.language.trim().toLowerCase() === "en"}
            >
              EN
            </Button>
          </Button.Group>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default ChangeLanguage;
