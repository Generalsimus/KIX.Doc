import { DefaultConfigurations, ObjectTypes } from "."
import { languageState } from "../language-switch"
import { StringToJsx, StringType } from "./string-to-jsx"



export interface JsxObject extends DefaultConfigurations {
    type: ObjectTypes.jsx
    jsx: JSX.Element
}

export const JsxToJsx = (jsxObject: JsxObject): JSX.Element => {
    return <>{jsxObject.jsx}</>
}