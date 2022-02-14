import React from "react";
import { Grid, Card } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import styles from "./config.module.css";

import ChangeLanguage from "../config/change-language/change-language.component";
import ChangeTheming from "../config/change-theme/change-theme.component";

const Config = () => {
  let toggleConfig: boolean = false;

  const webConfigCardId: string = "webConfigCard";
  const webConfigCardIconGearId: string = "iconGear";
  const webConfigCardIconTimesId: string = "iconTimes";
  const webConfigCardContentId: string = "cardContent";

  const openConfig = () => {
    toggleConfig = !toggleConfig;
    document
      ?.getElementById(webConfigCardId)
      ?.setAttribute("data-open", toggleConfig + "");
    document
      ?.getElementById(webConfigCardIconGearId)
      ?.setAttribute("data-visible", !toggleConfig + "");
    document
      ?.getElementById(webConfigCardIconTimesId)
      ?.setAttribute("data-visible", toggleConfig + "");
    document
      ?.getElementById(webConfigCardContentId)
      ?.setAttribute("data-visible", toggleConfig + "");
  };

  return (
    <>
      <Card
        id={webConfigCardId}
        className={styles.webConfigContainer}
        onClick={openConfig}
        data-open={toggleConfig}
      >
        <Icon
          id={webConfigCardIconGearId}
          data-visible={true}
          icon="ph:gear-six-duotone"
        />

        <Icon
          id={webConfigCardIconTimesId}
          className={"iconTimes"}
          data-visible={false}
          icon="uim:times-circle"
        />

        <Grid.Container
          gap={2}
          id={webConfigCardContentId}
          data-visible={toggleConfig}
        >
          <Grid>
            <ChangeLanguage></ChangeLanguage>
          </Grid>

          <Grid>
            <ChangeTheming></ChangeTheming>
          </Grid>
        </Grid.Container>
      </Card>
    </>
  );
};

export default Config;
