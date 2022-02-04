import { Icon } from "@iconify/react";
import styles from "./generate-qr.module.css";

import CustomButton from "../../common/components/button/button.component";
import CustomInput from "../../common/components/input/input.component";
import { Button } from "../../core/models/button.model";
import { ButtonColor } from "../../core/enums/button.enum";
import { BaseInput } from "../../core/models/input.model";
import { InputTextType, InputType } from "../../core/enums/input.model";
import QRCode from "react-qr-code";
import { useState } from "react";

const GenerateQr = () => {
  const [value, setValue] = useState("http://locahost:3000");

  const onImageCownload = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer()?.serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  const clearQrCodeContent = () => {
    setValue("http://locahost:3000");
  };

  const onChangeQrCodeContent = (e: any) => {
    setValue(e.target.value);
  };

  const BUTTON_LIST: Button[] = [
    {
      label: "Clear",
      color: ButtonColor.secondary,
      accesKey: "C",
      tabIndex: 1,
      onPress: clearQrCodeContent,
    },
    {
      label: "Download",
      color: ButtonColor.primary,
      accesKey: "G",
      tabIndex: 2,
      onPress: onImageCownload,
    },
  ];

  const INPUT: BaseInput = {
    label: "QR Code content",
    type: InputType.text,
    textType: InputTextType.input,
    onChange: onChangeQrCodeContent,
  };

  return (
    <>
      <div className={styles.title}>
        <span className={styles.iconQr}>
          <Icon icon="ph:qr-code-duotone" inline={true} />
        </span>
        <span>Generate QR Code</span>
      </div>

      <div className={styles.content}>
        <div className="qr-code-container">
          <div className="qr-code">
            <QRCode id="QRCode" value={value} />
          </div>
        </div>

        <div>
          <CustomInput {...{ input: INPUT }}></CustomInput>
        </div>
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
};

export default GenerateQr;
