

import { DefaultConfigurations, ObjectItemsTypes, ObjectTypes, } from ".";
import { StringToJsx, StringType } from "./string-to-jsx";

export interface DescriptionObject extends DefaultConfigurations {
    type: ObjectTypes.description
    text: StringType
}
export const description = (source: DescriptionObject) => {
    return <>
        <p class={`description-text size-${source.size ?? 4}`}>{StringToJsx(source.text)}</p>
    </>
}