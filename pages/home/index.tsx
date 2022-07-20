
import { CodeView } from "../../ui/code/code-view";
import { CommandView } from "../../ui/command-view";
import { Banner } from "../../widgets/banner";
import { Header } from "../../widgets/header";
import { languageState } from "../../widgets/language-switch";
import { RoutePageComponent } from "../../widgets/versions";

import "./style.scss";
function render() {
    return <div>Hello World!</div>
}

export const HomePage: RoutePageComponent = () => {

    return <>
        <Banner />
        <div class="home-page flex content-center direction-column items-center">
            <div class="code-revision flex items-start content-center">
                <CodeView codeTypes={[
                    {
                        typeName: "JavaScript",
                        files: [
                            {
                                fileName: "function.jsx",
                                code: `import kix from \"kix\"\n\nfunction Hello(props) {\n\n    return <div>Hello {props.name}!</div>\n}\n\nkix(document.body, <Hello name=\"World\" />)`,
                                emitCode: render
                            },
                            {
                                fileName: "class.jsx",
                                code: `import kix from \"kix\"\n\nclass Hello {\n    render() {\n        return <div>Hello {this.name}!</div>\n    }\n}\n\nkix(document.body, <Hello name=\"World\" />)`,
                                emitCode: render
                            }
                        ]
                    },
                    {
                        typeName: "Typescript",
                        files: [
                            {
                                fileName: "function.tsx",
                                code: `import kix from \"kix\"\n\ninterface Props {\n    name: string\n}\nfunction Hello(props: Props) {\n\n    return <div>Hello {props.name}!</div>\n}\n\nkix(document.body, <Hello name=\"World\" />)`,
                                emitCode: render
                            },
                            {
                                fileName: "class.tsx",
                                code: `import kix, { Component } from \"kix\"\n\ninterface Props {\n    name: string\n}\nclass Hello extends Component<Props> {\n    render() {\n        return <div>Hello {this.name}!</div>\n    }\n}\n\nkix(document.body, <Hello name=\"World\" />)`,
                                emitCode: render
                            }
                        ]
                    }
                ]} />
                <div>
                    <h1 class="home-page-title">A Simpliest Component</h1>
                    <p class="read-simple-text">


                        {languageState.home_page_description1}
                    </p>
                </div>
            </div>
            <div class="install-instruction flex">
                <p class="read-simple-text">{languageState.home_page_description2}</p>
                <div class="run-commands-list flex direction-column items-start">
                    <CommandView command="npm i -g kix" />
                    <CommandView command="kix new app-name" />
                    <CommandView command="cd app-name" />
                    <CommandView command="kix start" />
                    <route-link href="/docs/" class="learn-button flex items-center">
                        LEARN KIX
                        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8H14" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.6667 4.66669L14.0001 8.00002L10.6667 11.3334" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </route-link>
                </div>
            </div>
        </div>
    </>
}


