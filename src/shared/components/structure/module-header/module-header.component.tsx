import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

import { IHeaderModule } from "../../../models/header-module.model";

import styles from "./module-header.module.scss";

type Props = {
  header: IHeaderModule;
};

const HeaderModule: React.FC<Props> = ({ header: data }) => {
  const { t } = useTranslation();

  const translateTitle: string = data.title;

  return (
    <div className={styles.title}>
      <Icon
        icon={data.icon}
        inline={data.iconInline}
        data-filter={data.iconFilterStyle}
      />
      <span>{t(translateTitle)}</span>
    </div>
  );
};

export default HeaderModule;
