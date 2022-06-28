import { DropDownSmallInput } from "../../ui/dropdown-input";

export const LanguageSwitch = () => {
    const state = {
        value: "EN"
    }
    const options = ["EN", "KA"]
    return <DropDownSmallInput
        value={state.value}
        options={options.map(lang => {
            return {
                label: lang,
                value: lang
            }
        })}
        onChange={({ value }) => {
            localStorage.setItem("version", value);
        }} />
}