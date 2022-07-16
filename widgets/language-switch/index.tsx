import { DropDownSmallInput } from "../../ui/dropdown-input";
import ka from "../../lang/ka.json"
import en from "../../lang/en.json"
import { ObjectKeys } from "../../utils/ObjectKeys";
import { ValueOf } from "../../generics"
export const languageState: typeof ka & typeof en = {
    ...ka,
    ...en
}

export const LanguageSwitch = () => {
    const optionsWithKeys = {
        "EN": en,
        "KA": ka
    }
    type LangKeys = keyof typeof optionsWithKeys

    let constCurrentLanguage: LangKeys = "EN"
    const localStorageValue = localStorage.getItem("lang");
    if (localStorageValue && localStorageValue in optionsWithKeys) {
        constCurrentLanguage = localStorageValue as LangKeys
    }
    console.log("🚀 --> file: index.tsx --> line 19 --> LanguageSwitch --> constCurrentLanguage", constCurrentLanguage);
    Object.assign(languageState, optionsWithKeys[constCurrentLanguage]);
    return <DropDownSmallInput
        value={constCurrentLanguage}
        options={ObjectKeys(optionsWithKeys).map(lang => {
            return {
                label: lang,
                value: lang
            }
        })}
        onChange={({ value }) => {
            Object.assign(languageState, optionsWithKeys[value]);
            constCurrentLanguage = value;
            localStorage.setItem("lang", value);
        }} />
}