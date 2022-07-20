

import { ComponentProps } from "kix";
import { DefaultConfigurations, ObjectItemsTypes, ObjectTypes, } from ".";
import { CodeResultViewBox } from "../../ui/code/code-result-view/view-box";
import { CommandView } from "../../ui/command-view";
import { StringToJsx, StringType } from "./string-to-jsx";

export interface CodeViewObject extends DefaultConfigurations, ComponentProps<typeof CodeResultViewBox> {
    type: ObjectTypes.codeView
}
export const codeView = (source: CodeViewObject) => {

    return <CodeResultViewBox
        fileName={source.fileName}
        code={source.code}
        emitCode={source.emitCode}
    />
}
