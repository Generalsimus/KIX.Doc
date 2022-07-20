import { DefaultConfigurations, ObjectItemsTypes, ObjectTypes, } from ".";
import { StringToJsx, StringType } from "./string-to-jsx";

export interface TitleObject extends DefaultConfigurations {
    type: ObjectTypes.title
    text: StringType
}
export const title = (source: TitleObject) => {
    return <h1 class={`title-text size-${source.size ?? 1}`}>{StringToJsx(source.text)}</h1>
}