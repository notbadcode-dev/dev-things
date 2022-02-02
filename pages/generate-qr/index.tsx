import { Icon } from "@iconify/react";
import styles from "./generate-qr.module.css";

import CustomButton from "../../common/components/button/button.component";
import CustomInput from "../../common/components/input/input.component";
import { Button } from "../../core/models/button.model";
import { ButtonColor } from "../../core/enums/button.enum";
import { BaseInput } from "../../core/models/input.model";
import { InputTextType, InputType } from "../../core/enums/input.model";

const generateQrCode = () => {
  console.log("Generate");
};

const clearForm = () => {
  console.log("Clear");
};

const BUTTON_LIST: Button[] = [
  {
    label: "Clear",
    color: ButtonColor.secondary,
    accesKey: "C",
    tabIndex: 1,
    onPress: clearForm,
  },
  {
    label: "Generate",
    color: ButtonColor.primary,
    accesKey: "G",
    tabIndex: 2,
    onPress: generateQrCode,
  },
];

const INPUT: BaseInput = {
  label: "Name",
  type: InputType.text,
  textType: InputTextType.textarea,
};

function GenerateQr() {
  return (
    <>
      <div className={styles.title}>
        <span className={styles.iconQr}>
          <Icon icon="ph:qr-code-duotone" inline={true} />
        </span>
        <span>Generate QR Code</span>
      </div>

      <div>
        <CustomInput {...{ input: INPUT }}></CustomInput>
      </div>

      <div className={styles.actions}>
        {BUTTON_LIST.map((button) => {
          return (
            <CustomButton
              {...{ button: button }}
              key={button.accesKey}
            ></CustomButton>
          );
        })}
      </div>
    </>
  );
}

export default GenerateQr;
