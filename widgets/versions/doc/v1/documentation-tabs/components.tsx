import { CodeTabViewResult } from "../../../../../ui/code/code-result-view/tab-view";
import { CodeResultViewBox } from "../../../../../ui/code/code-result-view/view-box";
const emitCode1 = () => {
    let date = new Date()
    setInterval(() => {
        date = new Date()
    }, 1000)
    return <div>Date: {date}!</div>
}
export const componentsDoc = <div>
    <h1 class="title-text">კომპონენტები  KIX ში</h1>
    <br />
    <p class="description-text georgian-text ">
        კოპონენტები KIX ში განხსვავდება ჩვეულებრივ JSX ში მიღებული კომპონენტესბისგან,
        კომპონენტები ქიქსში რენდერდება ერთჯერადად და არ ხდება მათი გადარენდერება
        რაც გვაძლევს უფრო მაღალ წარმადობას
    </p>
    <CodeTabViewResult
        codes={[
            {
                tabName: "Javascript",
                fileName: '1.tsx',
                code: "import kix from \"kix\"\n\nclass Hello {\n    constructor() {\n        setInterval(() => {\n            this.date = new Date()\n        }, 1000)\n    }\n    render() {\n        return <div>Date: {this.date}!</div>\n    }\n}\n\nkix(document.body, <Hello date={new Date()} />)",
                emitCode: emitCode1
            },
            {
                tabName: "Typescript",
                fileName: '2.tsx',
                code: "import kix, { Component } from \"kix\"\n\nclass Hello extends Component<{ date: Date }> {\n    constructor() {\n        super()\n        setInterval(() => {\n            this.date = new Date()\n        }, 1000)\n    }\n    render() {\n        return <div>Date: {this.date}!</div>\n    }\n}\n\nkix(document.body, <Hello date={new Date()} />)",
                emitCode: emitCode1
            }
        ]}
    />
    <br />
    <p class="description-text georgian-text ">
        ფუნქციური კომპონენტები KIX ში რენდერდება ერთჯერადად KIX ში ნებისმიერი ობიექტის property არის დინამიურად ცვლადი ქვენ არ გიწევთ იზრუნოთ მისი
        მეორადი რენდერის საფრთხის თავიდნა აცილებაზე
    </p>
    <CodeResultViewBox
        fileName="3.tsx"
        code={"import kix from \"kix\"\n\nfunction Hello() {\n    const state = { date: new Date() }\n    setInterval(() => {\n        state.date = new Date()\n    }, 1000)\n    return <div>Date: {state.date}!</div>\n}\n\nkix(document.body, <Hello />)"}
        emitCode={emitCode1}
    />
</div>