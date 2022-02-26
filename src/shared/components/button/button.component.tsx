import React from "react";
import { Tooltip, useTheme } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import { ButtonBase, ButtonHelper } from "../../models/button.model";

import styles from "./button.module.scss";

type Props = {
  button: ButtonBase;
};

const CustomButton: React.FC<Props> = ({ button }) => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  button = ButtonHelper.mapObject(button);

  const translateTitle: string = button.title ?? "";
  const translateLabel: string = button.label;

  const renderButton: any = (
    <>
      <Tooltip
        content={t(translateTitle)}
        visible={!button.disabled}
        placement="top"
        color={isDark ? "invert" : "default"}
        rounded
      >
        <button
          type={button.type}
          className={"ripple button " + button.className + " " + styles.button}
          data-disabled={button.disabled}
          data-color={button.color}
          title={t(translateTitle)}
          tabIndex={button.tabIndex}
          accessKey={button.accesKey}
          disabled={button.disabled}
          onClick={button.onPress}
        >
          <span>{t(translateLabel)}</span>
        </button>
      </Tooltip>
    </>
  );

  const renderButtonWithIcon: any = (
    <>
      <Tooltip
        content={t(translateTitle)}
        visible={!button.disabled}
        placement="top"
        color={isDark ? "default" : "default"}
        contentColor={isDark ? "primary" : "default"}
        rounded
      >
        <button
          type={button.type}
          className={"ripple button " + button.className + " " + styles.button}
          data-disabled={button.disabled}
          data-color={button.color}
          title={t(translateTitle)}
          tabIndex={button.tabIndex}
          accessKey={button.accesKey}
          disabled={button.disabled}
          onClick={button.onPress}
        >
          {button.icon}
          <span>{t(translateLabel)}</span>
        </button>
      </Tooltip>
    </>
  );

  return button.icon ? renderButtonWithIcon : renderButton;
};

export default CustomButton;
