import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

import { BaseInput, BaseInputHelper } from "../../models/input.model";

import styles from "./input.module.scss";
import { InputEventType } from "../../enums/input.enum";

type Props = {
  input: BaseInput;
};

const CustomInput: React.FC<Props> = ({ input: data }) => {
  const [showError, setShowError] = useState(false);

  const { t } = useTranslation();
  data = BaseInputHelper.mapObject(data);

  const translateLabel: string = data.label;
  const translatePlaceholder: string = data.placeholder ?? "";

  const onTouched = (e: any) => {
    const eventType: string = e.type;
    switch (eventType) {
      case InputEventType.blur:
        data?.onBlur;
        if (data.value === "") {
          setShowError(true);
        }
        break;
      case InputEventType.focus:
        data?.onFocus;
        setShowError(false);
        break;
      case InputEventType.change:
        data.onChange(e);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <span data-show={showError}>{data.error}</span>

        <input
          id={data.id}
          type="text"
          autoComplete="off"
          placeholder={t(translatePlaceholder)}
          value={data.value}
          readOnly={data.readOnly}
          disabled={data.disabled}
          tabIndex={data.tabIndex}
          onBlur={onTouched}
          onFocus={onTouched}
          onChange={onTouched}
        />
        <label htmlFor={data.id}>{t(translateLabel)}</label>

        <span role="button" aria-label="Clear input" onClick={data.onDelete}>
          <Icon icon="uim:times-circle" />
        </span>
      </div>
    </>
  );
};

export default CustomInput;
