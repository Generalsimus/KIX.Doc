import { ObjectMultiItemsTypes, ObjectTypes } from "../../../objects-to-jsx";



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
        text: ["კომპონენტები  KIX ში"]
    }, {
        type: ObjectTypes.description,
        text: [` კოპონენტები KIX ში განხსვავდება ჩვეულებრივ JSX ში მიღებული კომპონენტესბისგან,
        კომპონენტები ქიქსში რენდერდება სტატიკურად და არ ხდება მათი გადარენდერება
        რაც გვაძლევს უფრო მაღალ წარმადობას`]
    }, {
        type: ObjectTypes.codeView,
        fileName: "1.tsx",
        code: "import kix from \"kix\";\r\n\r\nfunction DateNow() {\r\n  const date  = new Date();\r\n\r\n  return <span>Date: {date}<\/span>;\r\n}\r\n\r\nkix(document.body, <DateNow \/>);\r\n",
        emitCode: emitCode1,
    }, [], [], {
        type: ObjectTypes.description,
        text: [` აპლიკაცია გთავაზობთ როგორც ფუნქციური ისე კლასობრივი კომპონენტების სრულ მსახრაჭერას`]
    }, {
        type: ObjectTypes.codeView,
        fileName: "3.tsx",
        code: "import kix from \"kix\";\r\n\r\nclass DateNow {\r\n    date = new Date();\r\n\r\n    render() {\r\n        return <h4>Date: {this.date}<\/h4>;\r\n    }\r\n}\r\n\r\nkix(document.body, <DateNow \/>);\r\n",
        emitCode: emitCode1,
    },
] 