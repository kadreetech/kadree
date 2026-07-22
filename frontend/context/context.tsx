import { createContext, ReactElement, ReactNode, useContext, useState } from "react";

export enum Lang {
  EN = 'en_EN',
  ES = 'es_ES',
}

export interface IMainContext {
  lang?: Lang;
  setLang?: () => void;
}

const MainContext = createContext<IMainContext>({
  lang: undefined,
  setLang: undefined
});

export const MainContextWrapper = ({ children }: { children: ReactNode }): ReactElement => {
  const [lang, setLang] = useState<Lang>(Lang.EN);

  const handleLanguage = () => {
    switch (lang) {
      case Lang.EN:
        setLang(Lang.ES)
        break;
      case Lang.ES:
        setLang(Lang.EN)
        break;
      default:
        setLang(Lang.EN)
        break;
    }
  }

  return (
    <MainContext.Provider value={{ lang, setLang: handleLanguage }}>
      {children}
    </MainContext.Provider>
  );
}

export const useMainContext = () => (useContext<IMainContext>(MainContext));