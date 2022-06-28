import { CodeTabViewResult } from "../../../../../ui/code/code-result-view/tab-view";
const emitCode2 = () => {

    const state = { increment: 0 }

    setInterval(() => {
        state.increment++
    }, 1000)

    return <h1>INDEX: {state.increment}</h1>
}
export const propsDoc = <div>
    <h1 class="title-text">კომპონენტის Props-ები KIX ში</h1>
    <br />
    <p class="description-text georgian-text ">
        KIX ში კომპონენტის Props-ები ისეთივე დინამიურია როგორც ნებისმიერი ობიექტის property
    </p>
    <br />
    <p class="description-text georgian-text ">
        ფუნქციიის prop ში ჩაწოდებული ნებისმიერი ფროფერთი დინამიურად იცვლება
    </p>
    <CodeTabViewResult
        codes={[
            {
                tabName: "Javascript",
                fileName: '1.tsx',
                code: "import kix from \"kix\"\n\nfunction ShowIndex(props) {\n    return <h1>INDEX: {props.index}</h1>\n}\n\nconst state = { increment: 0 }\n\nsetInterval(() => {\n    state.increment++\n}, 1000)\n\nkix(document.body, <ShowIndex index={state.increment} />)",
                emitCode: emitCode2
            },
            {
                tabName: "Typescript",
                fileName: '2.tsx',
                code: "import kix from \"kix\"\n\ninterface Props {\n    index: number\n}\nfunction ShowIndex(props: Props) {\n    return <h1>INDEX: {props.index}</h1>\n}\n\nconst state = { increment: 0 }\n\nsetInterval(() => {\n    state.increment++\n}, 1000)\n\nkix(document.body, <ShowIndex index={state.increment} />)",
                emitCode: emitCode2
            }
        ]}
    />
    <br />
    <br />
    <p class="description-text georgian-text ">
        კლასობრივი კომპონენტის შემთხვევაში დარენდერებისას class ში წინასწარ იქმნება props იდან შემოსული property რომელიც დინამიურად იცვლება property ის ცვლილებისას
    </p>
    <CodeTabViewResult
        codes={[
            {
                tabName: "Javascript",
                fileName: '1.tsx',
                code: "import kix from \"kix\"\n\nclass ShowIndex {\n    render() {\n        return <h1>INDEX: {this.index}</h1>\n    }\n}\n\nconst state = { increment: 0 }\n\nsetInterval(() => {\n    state.increment++\n}, 1000)\n\nkix(document.body, <ShowIndex index={state.increment} />)",
                emitCode: emitCode2
            },
            {
                tabName: "Typescript",
                fileName: '2.tsx',
                code: "import kix, { Component } from \"kix\"\n\nclass ShowIndex extends Component<{ index: number }>{\n    render() {\n        return <h1>INDEX: {this.index}</h1>\n    }\n}\n\nconst state = { increment: 0 }\n\nsetInterval(() => {\n    state.increment++\n}, 1000)\n\nkix(document.body, <ShowIndex index={state.increment} />)",
                emitCode: emitCode2
            }
        ]}
    />

</div>