import { CodeHighlighterBox, CodeViewType } from "../code-highlighter-box"
import "./style.scss"
export type CodeBoxViewType = CodeViewType & {
    emitCode: () => void
}
type Props = CodeBoxViewType
export const CodeResultView = (props: Props) => {
    return <div class="tab-code flex h100 content-end">
        <div class="result flex content-center">
            {props.emitCode}
        </div>
        <div class="code flex content-center">
            <CodeHighlighterBox
                fileName={props.fileName}
                code={props.code}
            />
        </div>
    </div>
} 