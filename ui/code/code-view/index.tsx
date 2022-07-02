import { CodeHighlighterBox } from "../code-highlighter-box";
import { CodeResultView } from "../code-result-view/view";
import "./style.scss";

export type CodeTypes = {
    typeName: string,
    files: {
        fileName: string,
        emitCode: () => any
        code: string,
    }[],
}[]
interface prop {
    codeTypes: CodeTypes
}
export function CodeView({ codeTypes }: prop) {
    let showTypeNameIndex = 0;
    let showFileNameIndex = 0;

    return <div class="code-review flex direction-column">
        <div class="file-type-tabs flex">
            {codeTypes.map(({ typeName }, index) => {
                return <div class={(showTypeNameIndex === index) && "active"} onClick={() => {
                    showTypeNameIndex = index;
                    showFileNameIndex = 0;
                }}>{typeName}</div>
            })}
        </div>
        <div class='code-file-names flex items-center'>
            {(codeTypes[showTypeNameIndex].files.map(({ fileName }, index) => {

                return <div class={(showFileNameIndex === index) && "active"} onClick={() => {
                    showFileNameIndex = index
                }}>
                    {fileName}
                </div>
            }))}
        </div>
        <CodeResultView
            emitCode={codeTypes[showTypeNameIndex].files[showFileNameIndex].emitCode}
            fileName={codeTypes[showTypeNameIndex].files[showFileNameIndex].fileName}
            code={codeTypes[showTypeNameIndex].files[showFileNameIndex].code}
        />
    </div >
}
// const emitCode = (runCode: (node: HTMLElement) => void) => {

//     return (node: HTMLElement) => {
//         return runCode(node)
//     }
// }