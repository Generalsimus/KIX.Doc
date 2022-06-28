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
    const state = {
        showTypeNameIndex: 0,
        showFileNameIndex: 0
    };

    return <div class="code-review flex direction-column">
        <div class="file-type-tabs flex">
            {codeTypes.map(({ typeName }, index) => {
                return <div class={(state.showTypeNameIndex === index) && "active"} onClick={() => {
                    state.showTypeNameIndex = index;
                    state.showFileNameIndex = 0;
                }}>{typeName}</div>
            })}
        </div>
        <div class='code-file-names flex items-center'>
            {(codeTypes[state.showTypeNameIndex].files.map(({ fileName }, index) => {

                return <div class={(state.showFileNameIndex === index) && "active"} onClick={() => {
                    state.showFileNameIndex = index
                }}>
                    {fileName}
                </div>
            }))}
        </div>
        <CodeResultView
            emitCode={codeTypes[state.showTypeNameIndex].files[state.showFileNameIndex].emitCode}
            fileName={codeTypes[state.showTypeNameIndex].files[state.showFileNameIndex].fileName}
            code={codeTypes[state.showTypeNameIndex].files[state.showFileNameIndex].code}
        />
    </div >
}
const emitCode = (runCode: (node: HTMLElement) => void) => {

    return (node: HTMLElement) => {
        return runCode(node)
    }
}