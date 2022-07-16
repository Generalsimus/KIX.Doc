import { CodeTabViewResult } from "../../../../../ui/code/code-result-view/tab-view";
import { CodeResultViewBox } from "../../../../../ui/code/code-result-view/view-box";
const emitCode1 = () => {
     

function DateNow() {
  const date  = new Date();

  return <span>Date: {date}</span>;
}

return <DateNow />

}
export const componentsDoc = <div>
    <h1 class="title-text">კომპონენტები  KIX ში</h1>
    <p class="description-text   ">
        კოპონენტები KIX ში განხსვავდება ჩვეულებრივ JSX ში მიღებული კომპონენტესბისგან,
        კომპონენტები ქიქსში რენდერდება სტატიკურად და არ ხდება მათი გადარენდერება
        რაც გვაძლევს უფრო მაღალ წარმადობას
    </p>
    {/* <br /> */}
    <CodeResultViewBox
        fileName="1.tsx"
        code={"import kix from \"kix\";\r\n\r\nfunction DateNow() {\r\n  const date  = new Date();\r\n\r\n  return <span>Date: {date}<\/span>;\r\n}\r\n\r\nkix(document.body, <DateNow \/>);\r\n"}
        emitCode={emitCode1}
    />
    {/* <CodeTabViewResult
        codes={[
            {
                typeName: "JavaScript",
                files: [{
                    fileName: '1.tsx',
                    code: "import kix from \"kix\";\r\n\r\nfunction DateNow() {\r\n  const date  = new Date();\r\n\r\n  return <span>Date: {date}<\/span>;\r\n}\r\n\r\nkix(document.body, <DateNow \/>);\r\n",
                    emitCode: emitCode1
                }]
            },
            {
                typeName: "Typescript",
                files: [{
                    fileName: '2.tsx',
                    code: "import kix from \"kix\"\r\n\r\ninterface Props {\r\n  index: number\r\n}\r\nfunction ShowIndex(props: Props) {\r\n  return <h1>INDEX: {props.index}<\/h1>\r\n}\r\n\r\nlet increment = 0\r\n\r\nsetInterval(() => {\r\n  increment++\r\n}, 1000)\r\n\r\nkix(document.body, <ShowIndex index={increment} \/>)",
                    emitCode: emitCode1
                }]
            }
        ]}
    /> */}
    <br />
    <br />
    <p class="description-text   ">
        აპლიკაცია გთავაზობთ როგორც ფუნქციური ისე კლასობრივი კომპონენტების სრულ მსახრაჭერას
    </p>
    <CodeResultViewBox
        fileName="3.tsx"
        code={"import kix from \"kix\";\r\n\r\nclass DateNow {\r\n    date = new Date();\r\n\r\n    render() {\r\n        return <h4>Date: {this.date}<\/h4>;\r\n    }\r\n}\r\n\r\nkix(document.body, <DateNow \/>);\r\n"}
        emitCode={emitCode1}
    />
</div>