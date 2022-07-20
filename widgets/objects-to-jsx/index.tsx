import { command, CommandObject } from "./command-text"
import { description, DescriptionObject } from "./description"
import { title, TitleObject } from "./title"
import "./style.scss"
import { codeView, CodeViewObject } from "./code-view"
import { codeViewTabs, CodeViewTabsObject } from "./code-view-tabs"

export enum ObjectTypes {
    title,
    description,
    command,
    codeView,
    codeViewTabs,
}


export interface DefaultConfigurations {
    size?: number
}
export type ObjectItemsTypes = TitleObject | DescriptionObject | CommandObject | CodeViewObject | CodeViewTabsObject
export type ObjectMultiItemsTypes = Array<ObjectItemsTypes | ObjectMultiItemsTypes>


export const objectToJsx = (source: ObjectItemsTypes) => {
    switch (source.type) {
        case ObjectTypes.title:
            return title(source);
        case ObjectTypes.command:
            return command(source);
        case ObjectTypes.description:
            return description(source);
        case ObjectTypes.codeView:
            return codeView(source);
        case ObjectTypes.codeViewTabs:
            return codeViewTabs(source);

    }
}
export const objectsToJsx = (sources: ObjectMultiItemsTypes): JSX.Element => {
    return <>{sources.map((item => {
        if (item instanceof Array) {
            return <><br />{objectsToJsx(item)}</>;
        }
        return objectToJsx(item);
    }))}</>
}