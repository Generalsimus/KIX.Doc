import "./prisma.scss";
import Prism from "./prism.js";
// console.log("🚀 --> file: index.tsx --> line 3 --> Prism", Prism);


export interface CodeViewType {
    fileName: string,
    code: string
}
type Props = CodeViewType
export const CodeHighlighterBox = (prop: Props) => {
    return <div class="code-highlighter w100"> {getHighlightedCode(prop.fileName, prop.code)}</div>
}
const getHighlightedCode = (fileName: string, code: string) => {
    const fileType = fileName.split(".").pop() || "tsx";
    // console.log(code.split("\n"))
    return <pre class={"w100 flex language-" + fileType}>
        <div class="line-highlight flex direction-column">{code.split("\n").map((line, index) => {
            return <div >{index + 1}</div>
        })}</div>
        <code class={"w100 language-" + fileType}>{(node: HTMLElement) => {
            node.innerHTML = Prism.highlight(code.trim(), (Prism as any).languages[fileType], fileType);
        }}</code>
    </pre >
}










// pre: [{
//     div: code.slicedCode.map((_, index) => {
//         return {
//             div: code.line + index - 2
//         }
//     }),
//     style: "border-right: 1px solid #642b34;margin-right: 20px;display: flex;flex-direction: column;padding-right: 1em;"
// }, {
//     div: code.slicedCode.map((_, index) => {
//         return {
//             div: " ",
//             style: "width: 100%;background: #48242e;background: rgb(227 48 48 / " + (((index + 1) - codeCutCount) === 0 ? 0.2 : 0) + ");"
//         }
//     }),
//     style: "position: absolute;width: 100%;display: flex;flex-direction: column;left: 0;pointer-events: none;"
// }, {
//     code: (node: any) => {
//         node.innerHTML = (Prism.highlight(code.content, (Prism as any).languages["tsx"], "tsx"))

//     },
//     class: "language-jsx",
// }],
// class: "line-numbers language-jsx",
// style: "border: 1px solid #353535; border-radius: 5px;display: flex;position:relative",
// }