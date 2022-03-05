import React from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeTranslation = (translationCode: string) => {
    i18n.changeLanguage(translationCode);
  };

  return (
    <>
      <div>
        <button
          title={i18n.language.trim()}
          onClick={() => changeTranslation("es")}
          data-active={i18n.language.trim().toLowerCase() === "es"}
        ></button>
      </div>

      <div>
        <button
          title={i18n.language.trim()}
          onClick={() => changeTranslation("en")}
          data-active={i18n.language.trim().toLowerCase() === "en"}
        ></button>
      </div>
    </>
  );
};

export default ChangeLanguage;
