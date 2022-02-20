import { Icon } from "@iconify/react";
import { Grid } from "@nextui-org/react";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import QRCode from "react-qr-code";

import { APP_EG } from "../../shared/constants/eg.constant";

import HeaderModule from "../../shared/components/structure/module-header/module-header.component";
import CustomButton from "../../shared/components/button/button.component";
import CustomInput from "../../shared/components/input/input.component";

import { InputSize, InputType } from "../../shared/enums/input.enum";
import { ButtonColor } from "../../shared/enums/button.enum";

import styles from "./generate-qr.module.css";

const GenerateQr = () => {
  const [value, setValue] = useState("");

  const qrCodeDowload = () => {
    const svg = document.getElementById("QRCode") as HTMLElement;
    const svgData = new XMLSerializer()?.serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
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
      <Grid.Container gap={4} justify="center">
        <Grid xs={12} justify="center">
          <HeaderModule
            header={{
              icon: "ph:qr-code-duotone",
              iconInline: true,
              iconFilterStyle: true,
              title: "generatorQr.title",
            }}
          ></HeaderModule>
        </Grid>

        <Grid xs={12} justify="center">
          <div className={styles.qrCode}>
            <QRCode id="QRCode" value={value} size={isMobile ? 96 : 192} />
          </div>
        </Grid>

        <Grid xs={12} justify="center">
          <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={6} md={4} justify="center">
              <CustomInput
                input={{
                  label: "generatorQr.fields.qrCodeContent.label",
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
          <div className={"actions"}>
            <CustomButton
              button={{
                label: "generatorQr.actions.download.label",
                title:
                  value.toString().trim().length === 0
                    ? "generatorQr.actions.download.disabledTitle"
                    : "generatorQr.actions.download.title",
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
