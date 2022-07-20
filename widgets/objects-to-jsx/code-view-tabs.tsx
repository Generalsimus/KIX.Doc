import { ComponentProps } from "kix"
import { DefaultConfigurations, ObjectTypes } from "."
import { CodeTabViewResult } from "../../ui/code/code-result-view/tab-view"

export interface CodeViewTabsObject extends DefaultConfigurations, ComponentProps<typeof CodeTabViewResult> {
    type: ObjectTypes.codeViewTabs
}
export const codeViewTabs = (source: CodeViewTabsObject) => {

    return <CodeTabViewResult
        codes={source.codes}
    />
}
