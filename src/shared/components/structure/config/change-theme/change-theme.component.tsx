import React from "react";
import { Grid, Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Icon } from "@iconify/react";

import styles from "./change-theme.module.css";

const ChangeTheming = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <>
      <Grid.Container gap={0}>
        <Grid>
          <Switch
            className={styles.switchTheme}
            checked={isDark}
            size="lg"
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            iconOn={<Icon icon="ph:sun-dim-duotone" />}
            iconOff={<Icon icon="ph:moon-duotone" />}
          />
        </Grid>
      </Grid.Container>
    </>
  );
};

export default ChangeTheming;
