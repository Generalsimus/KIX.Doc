import kix from "kix"
import { currentCodeVersionExamples } from "../.."
import { CodeView } from "../../../../ui/code/code-view"

function render() {
    return <div>Hello World!</div>
}
export const homePageContent = {
    homePageFirsExampleJS_function: {
        code: `import kix from \"kix\"\n\nfunction Hello(props) {\n\n    return <div>Hello {props.name}!</div>\n}\n\nkix(document.body, <Hello name=\"World\" />)`,
        emitCode: render
    },
    homePageFirsExampleJS_class: {
        code: `import kix from \"kix\"\n\nclass Hello {\n    render() {\n        return <div>Hello {this.name}!</div>\n    }\n}\n\nkix(document.body, <Hello name=\"World\" />)`,
        emitCode: render
    },
    homePageFirsExampleTS_function: {
        code: `import kix from \"kix\"\n\ninterface Props {\n    name: string\n}\nfunction Hello(props: Props) {\n\n    return <div>Hello {props.name}!</div>\n}\n\nkix(document.body, <Hello name=\"World\" />)`,
        emitCode: render
    },
    homePageFirsExampleTS_class: {
        code: `import kix, { Component } from \"kix\"\n\ninterface Props {\n    name: string\n}\nclass Hello extends Component<Props> {\n    render() {\n        return <div>Hello {this.name}!</div>\n    }\n}\n\nkix(document.body, <Hello name=\"World\" />)`,
        emitCode: render
    }
}
export const homePageCodeViews = {
    HomePageCodeView1: () => <CodeView codeTypes={[
        {
            typeName: "JavaScript",
            files: [
                {
                    fileName: "function.jsx",
                    ...currentCodeVersionExamples["homePageFirsExampleJS_function"]
                },
                {
                    fileName: "class.jsx",
                    ...currentCodeVersionExamples["homePageFirsExampleJS_class"]
                }
            ]
        },
        {
            typeName: "Typescript",
            files: [
                {
                    fileName: "function.tsx",
                    ...currentCodeVersionExamples["homePageFirsExampleTS_function"]
                },
                {
                    fileName: "class.tsx",
                    ...currentCodeVersionExamples["homePageFirsExampleTS_class"]
                }
            ]
        }
    ]} />
}
