import { CodeHighlighterBox, CodeViewType } from "../code-highlighter-box"
import "./style.scss"
import { CodeResultView } from "./view"
import { CodeViewBoxType } from "./view-box"

type Props = {
    codes: (CodeViewBoxType & {
        tabName: string
    })[]
}
export const CodeTabViewResult = (props: Props) => {
    const state = {
        activeIndex: 0
    }

    return <div class="code-result-view">
        <div class="tabs-list flex">
            {props.codes.map(({ tabName }, index) => {
                return <div class={(state.activeIndex == index) && "active"} onClick={() => {
                    state.activeIndex = index
                }}>{tabName}</div>
            })}
        </div>
        <CodeResultView
            fileName={props.codes[state.activeIndex].fileName}
            code={props.codes[state.activeIndex].code}
            emitCode={props.codes[state.activeIndex].emitCode}
        />
    </div>
} 