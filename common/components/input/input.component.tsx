import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { BaseInput, BaseInputHelper } from "../../../core/models/input.model";
import styles from "./input.module.css";
import { InputTextType } from "../../../core/enums/input.model";

type Props = {
  input: BaseInput;
};

const CustomInput: React.FC<Props> = ({ input: data }) => {
  data = BaseInputHelper.mapObject(data);

  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    data.onChange(e);
    setValue(e.target.value);
  };
  const clearInput = (e: any) => setValue("");

  let input = (
    <>
      <label htmlFor={data.id} className={styles.label}>
        <input
          id={data.id}
          type={data.type}
          placeholder=" "
          value={value}
          readOnly={data.readOnly}
          disabled={data.disabled}
          onBlur={data.onBlur}
          onFocus={data.onFocus}
          onChange={handleChange}
        />
        <span>{data.label}</span>
      </label>
      <Icon
        icon="uim:times-circle"
        className={styles.iconDelete}
        data-disabled={value.length === 0}
        onClick={clearInput}
      />
    </>
  );

  if (data.textType === InputTextType.textarea) {
    input = (
      <>
        <label htmlFor={data.id} className={styles.label}>
          <textarea
            id={data.id}
            cols={80}
            placeholder=" "
            value={value}
            readOnly={data.readOnly}
            disabled={data.disabled}
            onBlur={data.onBlur}
            onFocus={data.onFocus}
            onChange={handleChange}
          ></textarea>
          <span>{data.label}</span>
          <Icon
            icon="uim:times-circle"
            className={styles.iconDelete}
            data-disabled={value.length === 0}
            onClick={clearInput}
          />
        </label>
      </>
    );
  }

  return input;
};

export default CustomInput;
