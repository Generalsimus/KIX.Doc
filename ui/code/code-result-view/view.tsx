import kix from "kix"
import { CodeHighlighterBox, CodeViewType } from "../code-highlighter-box"
import "./style.scss"
export type CodeBoxViewType = CodeViewType & {
    emitCode?: () => void
}
type Props = CodeBoxViewType
export const CodeResultView = (props: Props) => {
    return <div class="tab-code flex h100 content-end">
        {props.emitCode && <div class="result ">
            <iframe src="" frameborder="0" onLoad={function () {
                this.contentWindow && kix(this.contentWindow.document.body, props.emitCode?.())
            }}>
            </iframe>
        </div>}
        <div class={"code w100 flex content-center " + (!props.emitCode && "w100")}>
            <CodeHighlighterBox
                fileName={props.fileName}
                code={props.code}
            />
        </div>
    </div>
} 