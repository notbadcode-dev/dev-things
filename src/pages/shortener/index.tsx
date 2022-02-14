import { useState } from "react";
import { Icon } from "@iconify/react";
import { Grid } from "@nextui-org/react";
import { useToasts } from "react-toast-notifications";
import { useTranslation } from "react-i18next";

import { SHORTENER } from "../../shared/constants/shortener.constant";
import { REGEX } from "../../shared/constants/regex.constant";
import { APP_EG } from "../../shared/constants/eg.constant";

import HeaderModule from "../../shared/components/structure/module-header/module-header.component";
import CustomButton from "../../shared/components/button/button.component";
import CustomInput from "../../shared/components/input/input.component";

import { ShortenerRequestResponse } from "../../shared/models/shortener.model";
import { InputSize, InputType } from "../../shared/enums/input.enum";
import { ButtonColor } from "../../shared/enums/button.enum";

const Shortener = () => {
  const { t } = useTranslation();
  const { addToast } = useToasts();

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
          setShortedUrl(data.short_url);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("FORMAT ERROR");
    }
  };

  const copyShortURL = () => {
    navigator.clipboard.writeText(shortedUrl).then(
      () => {
        addToast(t("shortener.messages.addClipboardSucces"), {
          appearance: "success",
        });
      },
      () => {
        addToast(t("shortener.messages.addClipboardError"), {
          appearance: "error",
        });
      }
    );
  };

  const onChangeShortenerUrl = (e: any) => {
    setUrl(e.target.value);
  };

  const onChangeShortedUrl = (e: any) => {
    setShortedUrl(e.target.value);
  };

  let disabledShortenUrl: boolean = !new RegExp(REGEX.SHORTENER_URL).test(
    SHORTENER.ALLOWED_PROTOCOL + url
  );

  return (
    <>
      <Grid.Container gap={6}>
        <Grid xs={12} justify="center">
          <HeaderModule
            header={{
              icon: "ic:twotone-add-link",
              iconInline: true,
              iconFilterStyle: false,
              title: "shortener.title",
            }}
          ></HeaderModule>
        </Grid>

        <Grid xs={12} justify="center">
          <Grid.Container gap={2} justify="center">
            <Grid xs={10} sm={6} md={4} justify="center">
              <CustomInput
                input={{
                  label: "shortener.fileds.urlToShort.label",
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
                  label: "shortener.fileds.shortedUrl.label",
                  placeholder: "shortener.fileds.shortedUrl.placeholder",
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
                label: "shortener.actions.short.label",
                title: disabledShortenUrl
                  ? "shortener.actions.short.disabledTitle"
                  : "shortener.actions.short.title",
                color: ButtonColor.primary,
                accesKey: "S",
                tabIndex: 2,
                disabled: disabledShortenUrl,
                icon: <Icon icon="ic:twotone-add-link" inline={true} />,
                onPress: shortenerUrl,
              }}
            ></CustomButton>

            <CustomButton
              button={{
                label: "shortener.actions.copy.label",
                title:
                  shortedUrl.toString().trim().length === 0
                    ? "shortener.actions.copy.disabledTitle"
                    : "shortener.actions.copy.title",
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
