import { ObjectMultiItemsTypes, ObjectTypes } from "../../../objects-to-jsx"

// import { CodeTabViewResult } from "../../../../../ui/code/code-result-view/tab-view";
const emitCode2 = () => {

    let increment = 0

    setInterval(() => {
        increment++
    }, 1000)

    return <h1>INDEX: {increment}</h1>
}
export const propsDocs: ObjectMultiItemsTypes = [
    {
        type: ObjectTypes.title,
        text: ["კომპონენტის Props-ები KIX ში"]
    }, {
        type: ObjectTypes.description,
        text: [` KIX ში კომპონენტის Props-ები ისეთივე დინამიურია როგორც ნებისმიერი ობიექტის property`]
    }, [], {
        type: ObjectTypes.description,
        text: [`ფუნქციიის prop ში ჩაწოდებული ნებისმიერი ფროფერთი დინამიურად იცვლება`]
    }, {
        type: ObjectTypes.codeViewTabs,
        codes: [
            {
                typeName: "JavaScript",
                files: [
                    {
                        fileName: "1.jsx",
                        code: "import kix from \"kix\"\r\n\r\nfunction ShowIndex(props) {\r\n  return <h1>INDEX: {props.index}<\/h1>\r\n}\r\n\r\nlet increment = 0\r\n\r\nsetInterval(() => {\r\n  increment++\r\n}, 1000)\r\n\r\nkix(document.body, <ShowIndex index={increment} \/>)",
                        emitCode: emitCode2
                    }
                ]
            },
            {
                typeName: "Typescript",
                files: [
                    {
                        fileName: "2.tsx",
                        code: "import kix from \"kix\"\r\n\r\ninterface Props {\r\n  index: number\r\n}\r\nfunction ShowIndex(props: Props) {\r\n  return <h1>INDEX: {props.index}<\/h1>\r\n}\r\n\r\nlet increment = 0\r\n\r\nsetInterval(() => {\r\n  increment++\r\n}, 1000)\r\n\r\nkix(document.body, <ShowIndex index={increment} \/>)",
                        emitCode: emitCode2
                    }
                ]
            }
        ]
    }, [], [], {
        type: ObjectTypes.description,
        text: [` კლასობრივი კომპონენტის შემთხვევაში დარენდერებისას class ში წინასწარ იქმნება props იდან შემოსული
         property რომელიც დინამიურად იცვლება property ის ცვლილებისას `]
    }, {
        type: ObjectTypes.codeViewTabs,
        codes: [
            {
                typeName: "JavaScript",
                files: [
                    {
                        fileName: '1.tsx',
                        code: "import kix from \"kix\"\r\n\r\nclass ShowIndex {\r\n  render() {\r\n    return <h1>INDEX: {this.index}<\/h1>\r\n  }\r\n}\r\n\r\nlet increment = 0\r\n\r\nsetInterval(() => {\r\n  increment++\r\n}, 1000)\r\n\r\nkix(document.body, <ShowIndex index={increment} \/>)",
                        emitCode: emitCode2

                    }
                ]
            },
            {
                typeName: "Typescript",
                files: [
                    {
                        fileName: '2.tsx',
                        code: "import kix, { Component } from \"kix\"\r\n\r\nclass ShowIndex extends Component<{ index: number }>{\r\n  render() {\r\n    return <h1>INDEX: {this.index}<\/h1>\r\n  }\r\n}\r\n\r\nlet increment = 0\r\n\r\nsetInterval(() => {\r\n  increment++\r\n}, 1000)\r\n\r\nkix(document.body, <ShowIndex index={increment} \/>)",
                        emitCode: emitCode2
                    }
                ]
            }
        ]
    },
] 