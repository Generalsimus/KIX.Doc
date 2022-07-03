import { CodeHighlighterBox, CodeViewType } from "../code-highlighter-box"
import "./style.scss"
import { CodeResultView } from "./view"

export type CodeViewBoxType = CodeViewType & {
    emitCode?: () => any
}
type Props = CodeViewBoxType
export const CodeResultViewBox = (props: Props) => {
    return <div class="code-result-view">
        <CodeResultView
            fileName={props.fileName}
            code={props.code}
            emitCode={props.emitCode}
        />
    </div>
} 