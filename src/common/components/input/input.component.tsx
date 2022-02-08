import React from "react";
import { Input } from "@nextui-org/react";

import { BaseInput, BaseInputHelper } from "../../../core/models/input.model";

import styles from "./input.module.css";

type Props = {
  input: BaseInput;
};

const CustomInput: React.FC<Props> = ({ input: data }) => {
  data = BaseInputHelper.mapObject(data);

  return (
    <>
      <Input
        clearable={data.clearable}
        bordered
        rounded={false}
        className={styles.input}
        label={data.label}
        placeholder={data.placeholder}
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
