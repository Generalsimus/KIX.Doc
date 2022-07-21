import { DropDownSmallInput } from "../../ui/dropdown-input";
import ka from "../../lang/ka.json"
import en from "../../lang/en.json"
import { ObjectKeys } from "../../utils/ObjectKeys";
import { ValueOf } from "../../generics"

export const languageState: Record<string, string | undefined> = {}

export const LanguageSwitch = () => {
    const optionsWithKeys = {
        "EN": en,
        "KA": ka
    }
    type LangKeys = keyof typeof optionsWithKeys

    let constCurrentLanguage: LangKeys = "EN"



    const setAndGetLang = () => {
        const localStorageValue = localStorage.getItem("lang")
        if (localStorageValue && localStorageValue in optionsWithKeys) {
            constCurrentLanguage = localStorageValue as LangKeys
        } else {
            constCurrentLanguage = constCurrentLanguage
        }

        for (const key in languageState) {
            languageState[key] = undefined
        }
        Object.assign(languageState, optionsWithKeys[constCurrentLanguage]);

        return constCurrentLanguage
    }

    setAndGetLang();

    return <DropDownSmallInput
        value={constCurrentLanguage}
        options={ObjectKeys(optionsWithKeys).map(lang => {
            return {
                label: lang,
                value: lang
            }
        })}
        onChange={({ value }) => {
            localStorage.setItem("lang", value);
            setAndGetLang();
        }} />
}