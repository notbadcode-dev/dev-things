import { Icon } from "@iconify/react";
import React, { ReactElement } from "react";

import { Button, ButtonHelper } from "../../../core/models/button.model";

import styles from "./button.module.css";

type Props = {
  button: Button;
};

const CustomButton: React.FC<Props> = ({ button }) => {
  button = ButtonHelper.mapObject(button);

  const renderButton: any = (
    <>
      <button
        type={button.type}
        className={"ripple button " + button.className + " " + styles.button}
        data-disabled={button.disabled}
        data-color={button.color}
        title={button.title}
        tabIndex={button.tabIndex}
        accessKey={button.accesKey}
        disabled={button.disabled}
        onClick={button.onPress}
      >
        <span>{button.label}</span>
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
        title={button.title}
        tabIndex={button.tabIndex}
        accessKey={button.accesKey}
        disabled={button.disabled}
        onClick={button.onPress}
      >
        {button.icon}
        <span>{button.label}</span>
      </button>
    </>
  );

  return button.icon ? renderButtonWithIcon : renderButton;
};

export default CustomButton;
