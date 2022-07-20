

import { DefaultConfigurations, ObjectItemsTypes, ObjectTypes, } from ".";
import { CommandView } from "../../ui/command-view";
import { StringToJsx, StringType } from "./string-to-jsx";

export interface CommandObject extends DefaultConfigurations {
    type: ObjectTypes.command
    command: string
}
export const command = (source: CommandObject) => {

    return <CommandView command={source.command} />
}