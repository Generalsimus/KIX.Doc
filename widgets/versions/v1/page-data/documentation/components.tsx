import { ObjectMultiItemsTypes, ObjectTypes } from "../../../../objects-to-jsx";



const emitCode1 = () => {


    function DateNow() {
        const date = new Date();

        return <span>Date: {date}</span>;
    }

    return <DateNow />

}
export const componentsDocs: ObjectMultiItemsTypes = [
    {
        type: ObjectTypes.title,
        text: ["Text_10"]
    }, {
        type: ObjectTypes.description,
        text: ["Text_11"]
    }, {
        type: ObjectTypes.codeView,
        fileName: "1.tsx",
        code: "import kix from \"kix\";\r\n\r\nfunction DateNow() {\r\n  const date  = new Date();\r\n\r\n  return <span>Date: {date}<\/span>;\r\n}\r\n\r\nkix(document.body, <DateNow \/>);\r\n",
        emitCode: emitCode1,
    }, [], [], {
        type: ObjectTypes.description,
        text: [`Text_12`]
    }, {
        type: ObjectTypes.codeView,
        fileName: "3.tsx",
        code: "import kix from \"kix\";\r\n\r\nclass DateNow {\r\n    date = new Date();\r\n\r\n    render() {\r\n        return <h4>Date: {this.date}<\/h4>;\r\n    }\r\n}\r\n\r\nkix(document.body, <DateNow \/>);\r\n",
        emitCode: emitCode1,
    },
] 