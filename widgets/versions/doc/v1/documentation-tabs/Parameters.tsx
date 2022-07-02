import kix from "kix";
import { CodeResultViewBox } from "../../../../../ui/code/code-result-view/view-box";

const emitCode4 = () => {
    let currentIndex = 1
    const HTML = <>
        {[1, 2, 3].map((index) => {
            return <a href={"/page/" + index} onClick={(e) => {
                e.preventDefault();
                currentIndex = index
            }}> PAGE {index}</a>
        })}
        <h1>PAGE {currentIndex}</h1>
    </>
    return <iframe src="" frameborder="0" onLoad={function () {
        this.contentWindow && kix(this.contentWindow.document.body, HTML)
    }}>
    </iframe>
}
const emitCode5 = () => {
    let currentIndex: number | undefined = undefined
    let names = ["Naomi", "Perry", "Daphne"]
    const HTML = <>
        {names.map((name, index) => {
            return <a href={`/page/${name}/user`} onClick={(e) => {
                e.preventDefault();
                currentIndex = index
            }}>PAGE {name}</a>
        })}
        {currentIndex !== undefined && <h1>User: {names[currentIndex]}</h1>}
    </>

    return <iframe src="" frameborder="0" onLoad={function () {
        this.contentWindow && kix(this.contentWindow.document.body, HTML)
    }}>
    </iframe>
}
export const parametersDocs = <div>
    <h1 class="title-text">ნავიგაციის პარამეტრეი KIX ში</h1>
    <br />
    <p class="description-text georgian-text ">
        ნავიგაციიის პარამეტრები ქიქსში ინახება kix მოდულიდან დაექსპორტებულ Params ობიექტში და იცვლებიან დინამიურად როუტინგიდ მისამართის ცვლილებასთან ერთად
    </p>
    <CodeResultViewBox
        fileName="1.tsx"
        code={"import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { params } = Router\r\n  return <>\r\n    <switch href=\"\/page\/1\">PADE 1<\/switch>\r\n    <switch href=\"\/page\/2\">PADE 2<\/switch>\r\n    <switch href=\"\/page\/3\">PADE 3<\/switch>\r\n\r\n    <router path=\"\/page\/:id\" component={<h1>PAGE {params.id}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)"}
        emitCode={emitCode4}
    />
    <br />
    <br />
    <CodeResultViewBox
        fileName="1.tsx"
        code={"import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { params } = Router\r\n  return <>\r\n    <switch href=\"\/page\/Naomi\/user\">PAGE Naomi<\/switch>\r\n    <switch href=\"\/page\/Perry\/user\">PAGE Perry<\/switch>\r\n    <switch href=\"\/page\/Daphne\/user\">PAGE Daphne<\/switch>\r\n\r\n    <router path=\"\/page\/:name\/user\" component={<h1>User: {params.name}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)"}
        emitCode={emitCode5}
    />

</div>