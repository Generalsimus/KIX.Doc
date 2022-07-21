import { languageState } from "../language-switch"



export enum StringTypeEnum {
    url
}
export type StringType = Array<(string | { type: StringTypeEnum.url, url: string, text: StringType } | StringType)>

export const StringToJsx = (stringObject: StringType): JSX.Element => {
    return <>{stringObject.map((element) => {
        if (element instanceof Array) {
            return <><br />{StringToJsx(element)}</>
        }
        if (typeof element === 'string') {

            return <>{languageState[element] || element}</>
        }
        switch (element.type) {
            case StringTypeEnum.url:
                return <a href={element.url} class="url" target="_blank">{StringToJsx(element.text)}</a>
        }
    })}</>
}