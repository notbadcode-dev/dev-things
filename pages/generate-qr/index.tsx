import { Icon } from "@iconify/react";
import styles from "./generate-qr.module.css";

import CustomButton from "../../common/components/button/button.component";
import { Button } from "../../core/models/button.model";
import { ButtonColor } from "../../core/enums/button.enum";

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

function GenerateQr() {
  return (
    <>
      <div className={styles.title}>
        <span className={styles.iconQr}>
          <Icon icon="ph:qr-code-duotone" inline={true} />
        </span>
        <span>Generate QR Code</span>
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
