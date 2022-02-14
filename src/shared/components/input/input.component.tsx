import React from "react";
import { Input } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import { BaseInput, BaseInputHelper } from "../../models/input.model";

import styles from "./input.module.css";

type Props = {
  input: BaseInput;
};

const CustomInput: React.FC<Props> = ({ input: data }) => {
  const { t } = useTranslation();
  data = BaseInputHelper.mapObject(data);

  const translateLabel: string = data.label;
  const translatePlaceholder: string = data.placeholder ?? "";

  return (
    <>
      <Input
        clearable={data.clearable}
        bordered
        rounded={false}
        className={styles.input}
        label={t(translateLabel)}
        placeholder={t(translatePlaceholder)}
        value={data.value}
        color="primary"
        fullWidth={true}
        labelLeft={data.labelLeft}
        id={data.id}
        type={data.type}
        size={data.size}
        readOnly={data.readOnly}
        disabled={data.disabled}
        tabIndex={data.tabIndex}
        onBlur={data.onBlur}
        onFocus={data.onFocus}
        onChange={data.onChange}
      />
    </>
  );
};

export default CustomInput;
