import { Icon } from "@iconify/react";
import { Grid } from "@nextui-org/react";
import { useState } from "react";
import QRCode from "react-qr-code";

import CustomButton from "../../../common/components/button/button.component";
import CustomInput from "../../../common/components/input/input.component";

import { InputSize, InputType } from "../../core/enums/input.enum";
import { ButtonColor } from "../../core/enums/button.enum";

import styles from "./generate-qr.module.css";
import { APP_EG } from "../../core/constants/eg.constant";

const GenerateQr = () => {
  const [value, setValue] = useState("");

  const qrCodeDowload = () => {
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

  const onChangeQrCodeContent = (e: any) => {
    setValue(e.target.value);
  };

  const inputEg: string = [APP_EG.URL, APP_EG.TEXT, APP_EG.WIFI][
    Math.floor(Math.random() * 2)
  ];

  return (
    <>
      <Grid.Container gap={4}>
        <Grid xs={12} justify="center">
          <div className={styles.title}>
            <Icon icon="ph:qr-code-duotone" inline={true} />
            <span>Generate QR Code</span>
          </div>
        </Grid>

        <Grid xs={12} justify="center">
          <div className={styles.qrCode}>
            <QRCode id="QRCode" value={value} />
          </div>
        </Grid>

        <Grid xs={12} justify="center">
          <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={6} md={4} justify="center">
              <CustomInput
                input={{
                  label: "QR Code content",
                  placeholder: inputEg,
                  type: InputType.text,
                  size: InputSize.xlarge,
                  value: value,
                  tabIndex: 1,
                  onChange: onChangeQrCodeContent,
                }}
              ></CustomInput>
            </Grid>
          </Grid.Container>
        </Grid>

        <Grid xs={12} justify="center">
          <div className={styles.actions}>
            <CustomButton
              button={{
                label: "Download",
                color: ButtonColor.primary,
                accesKey: "G",
                tabIndex: 2,
                disabled: value.toString().trim().length === 0,
                icon: <Icon icon="ph:qr-code-duotone" inline={true} />,
                onPress: qrCodeDowload,
              }}
            ></CustomButton>
          </div>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default GenerateQr;
