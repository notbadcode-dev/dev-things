import React from "react";
import { useTranslation } from "react-i18next";

import { ButtonBase, ButtonHelper } from "../../models/button.model";

import styles from "./button.module.scss";
import ReactTooltip from "react-tooltip";
import { APP } from "../../constants/app.constant";

type Props = {
  button: ButtonBase;
};

const CustomButton: React.FC<Props> = ({ button }) => {
  const { t } = useTranslation();
  button = ButtonHelper.mapObject(button);

  const translateTitle: string = button.title ?? "";
  const translateLabel: string = button.label;

  // const renderAccessKey = () => {
  //   return process.env.OS !== APP.SO.OTHER ? (
  //     <span>
  //       {button?.accesKeys?.map((key: string) => key !== undefined).join(" + ")}
  //     </span>
  //   ) : (
  //     <></>
  //   );
  // };

  const renderButton: any = (
    <>
      <button
        type={button.type}
        className={"ripple button " + button.className + " " + styles.button}
        data-disabled={button.disabled}
        data-color={button.color}
        data-tip={t(translateTitle)}
        title={t(translateTitle)}
        tabIndex={button.tabIndex}
        disabled={button.disabled}
        onClick={button.onPress}
      >
        <span>{t(translateLabel)}</span>
      </button>
    </>
  );

  const renderButtonWithIcon: any = (
    <>
      <button
        type={button.type}
        className={"ripple button " + button.className + " " + styles.button}
        data-disabled={button.disabled}
        data-color={button.color}
        data-tip={t(translateTitle)}
        title={t(translateTitle)}
        tabIndex={button.tabIndex}
        disabled={button.disabled}
        onClick={button.onPress}
      >
        <span> {button.icon}</span>
        <span>{t(translateLabel)}</span>
      </button>
    </>
  );

  return button.icon ? renderButtonWithIcon : renderButton;
};

export default CustomButton;
