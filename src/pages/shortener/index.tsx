import { Icon } from "@iconify/react";
import { Grid } from "@nextui-org/react";
import { useState } from "react";

import { SHORTENER } from "../../core/constants/shortener.constant";
import { REGEX } from "../../core/constants/regex.constant";
import { APP_EG } from "../../core/constants/eg.constant";

import HeaderModule from "../../common/components/structure/module-header/module-header.component";
import CustomButton from "../../common/components/button/button.component";
import CustomInput from "../../common/components/input/input.component";

import { ShortenerRequestResponse } from "../../core/models/shortener.model";
import { InputSize, InputType } from "../../core/enums/input.enum";
import { ButtonColor } from "../../core/enums/button.enum";

import styles from "./shortener.module.css";

const Shortener = () => {
  const shortedUrlId: string = "shortedUrlId";
  const [url, setUrl] = useState("");
  const [shortedUrl, setShortedUrl] = useState("");

  const shortenerUrl = () => {
    const transformUrl: string = SHORTENER.ALLOWED_PROTOCOL + url;
    if (new RegExp(REGEX.SHORTENER_URL).test(transformUrl)) {
      setUrl(url.toLocaleLowerCase());

      const REQUEST: any = {
        method: "POST",
        headers: SHORTENER.HEADERS,
        body: JSON.stringify({
          long_url: transformUrl,
        }),
      };

      fetch(SHORTENER.ENDPOINT, REQUEST)
        .then((response: any) => {
          return response.json();
        })
        .then((data: ShortenerRequestResponse) => {
          setShortedUrl(data.link);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("FORMAT ERROR");
    }
  };

  const copyShortURL = () => {
    const shortedInput: any = document?.getElementById(shortedUrlId);
    if (shortedInput) {
      shortedInput.select();
      document.execCommand("copy");
      alert("yeah!"); // success
    } else {
      alert("err"); // error
    }
  };

  const onChangeShortenerUrl = (e: any) => {
    setUrl(e.target.value);
  };

  const onChangeShortedUrl = (e: any) => {
    setShortedUrl(e.target.value);
  };

  return (
    <>
      <Grid.Container gap={6}>
        <Grid xs={12} justify="center">
          <HeaderModule
            header={{
              icon: "ic:twotone-add-link",
              iconInline: true,
              iconFilterStyle: false,
              title: "Shortener",
            }}
          ></HeaderModule>
        </Grid>

        <Grid xs={12} justify="center">
          <Grid.Container gap={2} justify="center">
            <Grid xs={10} sm={6} md={4} justify="center">
              <CustomInput
                input={{
                  label: "URL to short",
                  placeholder: APP_EG.URL,
                  labelLeft: SHORTENER.ALLOWED_PROTOCOL,
                  type: InputType.text,
                  size: InputSize.xlarge,
                  value: url,
                  onChange: onChangeShortenerUrl,
                }}
              ></CustomInput>
            </Grid>
            <Grid xs={10} sm={6} md={4} justify="center">
              <CustomInput
                input={{
                  id: shortedUrlId,
                  label: "Shorted URL",
                  placeholder: "...",
                  type: InputType.text,
                  size: InputSize.xlarge,
                  clearable: false,
                  disabled: true,
                  value: shortedUrl,
                  onChange: onChangeShortedUrl,
                }}
              ></CustomInput>
            </Grid>
          </Grid.Container>
        </Grid>

        <Grid xs={12} justify="center">
          <div className={"actions"}>
            <CustomButton
              button={{
                label: "Short",
                color: ButtonColor.primary,
                accesKey: "S",
                tabIndex: 2,
                disabled: !new RegExp(REGEX.SHORTENER_URL).test(
                  SHORTENER.ALLOWED_PROTOCOL + url
                ),
                icon: <Icon icon="ic:twotone-add-link" inline={true} />,
                onPress: shortenerUrl,
              }}
            ></CustomButton>

            <CustomButton
              button={{
                label: "Copy",
                color: ButtonColor.primary,
                accesKey: "C",
                tabIndex: 2,
                disabled: shortedUrl.toString().trim().length === 0,
                icon: <Icon icon="ic:twotone-copy-all" />,
                onPress: copyShortURL,
              }}
            ></CustomButton>
          </div>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Shortener;
