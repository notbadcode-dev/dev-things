import React from "react";
import { Icon } from "@iconify/react";
import styles from "./module-header.module.css";

import { IHeaderModule } from "../../../models/header-module.model";

type Props = {
  header: IHeaderModule;
};

const HeaderModule: React.FC<Props> = ({ header: data }) => {
  return (
    <div className={styles.title}>
      <Icon
        icon={data.icon}
        inline={data.iconInline}
        data-filter={data.iconFilterStyle}
      />
      <span>{data.title}</span>
    </div>
  );
};

export default HeaderModule;
