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
    <p class="description-text georgian-text ">
        კოპონენტები KIX ში განხსვავდება ჩვეულებრივ JSX ში მიღებული კომპონენტესბისგან,
        კომპონენტები ქიქსში რენდერდება ერთჯერადად და არ ხდება მათი გადარენდერება
        რაც გვაძლევს უფრო მაღალ წარმადობას
    </p>
    {/* <br /> */}
    <CodeTabViewResult
        codes={[
            {
                typeName: "JavaScript",
                files: [{
                    fileName: '1.tsx',
                    code: "import kix from \"kix\"\r\n\r\nfunction ShowIndex(props) {\r\n  return <h1>INDEX: {props.index}<\/h1>\r\n}\r\n\r\nlet increment = 0\r\n\r\nsetInterval(() => {\r\n  increment++\r\n}, 1000)\r\n\r\nkix(document.body, <ShowIndex index={increment} \/>)",
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
    />
    <br />
    <p class="description-text georgian-text ">
        ფუნქციური კომპონენტები KIX ში რენდერდება ერთჯერადად KIX ში ნებისმიერი ობიექტის property არის დინამიურად ცვლადი ქვენ არ გიწევთ იზრუნოთ მისი
        მეორადი რენდერის საფრთხის თავიდნა აცილებაზე
    </p>
    <CodeResultViewBox
        fileName="3.tsx"
        code={"import kix from \"kix\";\r\n\r\nfunction Hello() {\r\n  let date = new Date();\r\n  setInterval(() => {\r\n    date = new Date();\r\n  }, 1000);\r\n  return <div>Date: {date}!<\/div>;\r\n}\r\n\r\nkix(document.body, <Hello \/>);"}
        emitCode={emitCode1}
    />
</div>