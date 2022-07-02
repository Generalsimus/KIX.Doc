import { CodeHighlighterBox, CodeViewType } from "../code-highlighter-box"
import { CodeTypes } from "../code-view"
import "./style.scss"
import { CodeResultView } from "./view"

type Props = {
    codes: CodeTypes
    showFileNames?: boolean
}
export const CodeTabViewResult = ({ codes, showFileNames = false }: Props) => {
    let showTypeNameIndex = 0
    let showFileNameIndex = 0

    return <div class="code-result-view">
        <div class="tabs-list flex">
            {codes.map(({ typeName }, index) => {
                return <div class={(showTypeNameIndex == index) && "active"} onClick={() => {
                    showTypeNameIndex = index
                }}>{typeName}</div>
            })}
        </div>
        {showFileNames && <div class='code-file-names flex items-center'>
            {(codes[showTypeNameIndex].files.map(({ fileName }, index) => {

                return <div class={(showFileNameIndex === index) && "active"} onClick={() => {
                    showFileNameIndex = index
                }}>
                    {fileName}
                </div>
            }))}
        </div>}
        <CodeResultView
            emitCode={codes[showTypeNameIndex].files[showFileNameIndex].emitCode}
            fileName={codes[showTypeNameIndex].files[showFileNameIndex].fileName}
            code={codes[showTypeNameIndex].files[showFileNameIndex].code}
        />
    </div>
} 