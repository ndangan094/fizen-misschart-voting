import { useTranslation } from "react-i18next";

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Vietnamese",
    value: "vi",
  },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem("i18nextLng");
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}