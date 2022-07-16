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
    return HTML
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

    return HTML
}
export const parametersDocs = <div>
    <h1 class="title-text">ნავიგაციის პარამეტრეი KIX ში</h1>
    <br />
    <p class="description-text ">
        ნავიგაციიის პარამეტრები ქიქსში ინახება kix მოდულიდან დაექსპორტებულ Params ობიექტში და იცვლებიან დინამიურად როუტინგიდ მისამართის ცვლილებასთან ერთად
    </p>
    <CodeResultViewBox
        fileName="1.tsx"
        code={"import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { params } = Router\r\n  return <>\r\n    <route-link href=\"\/page\/1\">PADE 1</route-link>\r\n    <route-link href=\"\/page\/2\">PADE 2</route-link>\r\n    <route-link href=\"\/page\/3\">PADE 3</route-link>\r\n\r\n    <route-switch path=\"\/page\/:id\" component={<h1>PAGE {params.id}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)"}
        emitCode={emitCode4}
    />
    <br />
    <br />
    <CodeResultViewBox
        fileName="1.tsx"
        code={"import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { params } = Router\r\n  return <>\r\n    <route-link href=\"\/page\/Naomi\/user\">PAGE Naomi</route-link>\r\n    <route-link href=\"\/page\/Perry\/user\">PAGE Perry</route-link>\r\n    <route-link href=\"\/page\/Daphne\/user\">PAGE Daphne</route-link>\r\n\r\n    <route-switch path=\"\/page\/:name\/user\" component={<h1>User: {params.name}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)"}
        emitCode={emitCode5}
    />

</div>