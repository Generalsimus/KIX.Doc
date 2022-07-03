import kix from "kix";
import { CodeHighlighterBox } from "../../../../../ui/code/code-highlighter-box";
import { CodeTabViewResult } from "../../../../../ui/code/code-result-view/tab-view";
import { CodeResultView } from "../../../../../ui/code/code-result-view/view";
import { CodeResultViewBox } from "../../../../../ui/code/code-result-view/view-box";

const emitCode1 = () => {
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
export const routeToolsDocs = <div>
    <div>
        <h1 class="title-text">ნავიგაციის დამხმარე ფუნქციები</h1>
        <p class="description-text georgian-text ">
            ვინაიდან KIX ში არსებული ნავიგაცია მთლიანად დაფუძლებული vannila JS ის ფუნქციონალზე KIX ში როუტინგის სამართავად გამოიყენება იგივე ფუნქციები რაც ჩვეულებრივ javascript ში უკვე არსებობს
            <a class="url" href="https://developer.mozilla.org/en-US/docs/Web/API/History" target="_blank">ფუნქციებზე მეტის გასაგებად ეწვიეთ შემდეგ ბმულს </a>
        </p>
        <br />
        <br />
        <p>
            KIX როუტინგისას იყნრბს
            <a class="url" href="https://developer.mozilla.org/en-US/docs/Web/API/History/pushState" target="_blank">.pushState()</a>{"  "}
            ფუნქციას.<br />
            ხოლო როუტინგის გადასარეფრეშებლად საჭიროა popstate ევენთის გაშვება
        </p>
        <CodeTabViewResult
            codes={
                [
                    {
                        typeName: "JavaScript",
                        files: [
                            {
                                fileName: '1.tsx',
                                code: "import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { params, history } = Router\r\n\r\n  function onRouteChange(event) {\r\n    event.preventDefault();\r\n    history.pushState(undefined, \"\", this.getAttribute(\"href\"));\r\n    window.dispatchEvent(new CustomEvent('popstate'));\r\n  }\r\n  return <>\r\n    <a href=\"\/page\/1\" onClick={onRouteChange}>PADE 1<\/a>\r\n    <a href=\"\/page\/2\" onClick={onRouteChange}>PADE 2<\/a>\r\n    <a href=\"\/page\/3\" onClick={onRouteChange}>PADE 3<\/a>\r\n\r\n    <route-switch path=\"\/page\/:id\" component={<h1>PAGE {params.id}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)",
                                emitCode: emitCode1

                            }
                        ]
                    },
                    {
                        typeName: "Typescript",
                        files: [
                            {
                                fileName: '2.tsx',
                                code: "import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { params, history } = Router\r\n\r\n  function onRouteChange(this: HTMLElement, event: MouseEvent) {\r\n    event.preventDefault();\r\n    history.pushState(undefined, \"\", this.getAttribute(\"href\"));\r\n    window.dispatchEvent(new CustomEvent('popstate'));\r\n  }\r\n  return <>\r\n    <a href=\"\/page\/1\" onClick={onRouteChange}>PADE 1<\/a>\r\n    <a href=\"\/page\/2\" onClick={onRouteChange}>PADE 2<\/a>\r\n    <a href=\"\/page\/3\" onClick={onRouteChange}>PADE 3<\/a>\r\n\r\n    <route-switch path=\"\/page\/:id\" component={<h1>PAGE {params.id}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)",
                                emitCode: emitCode1
                            }
                        ]
                    }
                ]
            }
        />
        <br />
        <br />
        <p>
            KIX როუტინგისას გვერდის უკან დასაბრუნებლად იყნებს
            <a class="url" href="https://developer.mozilla.org/en-US/docs/Web/API/History/back" target="_blank">.back()</a>{"  "}
            ფუნქციას.<br />
        </p>
        {/* <CodeResultView
            emitCode={emitCode1}
            fileName={"1.tsx"}
            code={"import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { params, history } = Router\r\n\r\n  function onRouteChange(this: HTMLElement, event: MouseEvent) {\r\n    event.preventDefault();\r\n    history.pushState(undefined, \"\", this.getAttribute(\"href\"));\r\n    window.dispatchEvent(new CustomEvent('popstate'));\r\n  }\r\n  return <>\r\n    <a href=\"\/page\/1\" onClick={onRouteChange}>PADE 1<\/a>\r\n    <a href=\"\/page\/2\" onClick={onRouteChange}>PADE 2<\/a>\r\n    <a href=\"\/page\/3\" onClick={onRouteChange}>PADE 3<\/a>\r\n\r\n    <route-switch path=\"\/page\/:id\" component={<h1>PAGE {params.id}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)"}
        /> */}
        <CodeResultViewBox
            fileName="1.tsx"
            code={"import kix from \"kix\"\r\n\r\nfunction Routing() {\r\n  let RouteCount = 1\r\n  window.addEventListener(\"popstate\", () => {\r\n    ++RouteCount\r\n  });\r\n  return <>\r\n    <route-link href=\"\/\">PADE 1<\/route-link>\r\n    <route-link href=\"\/page\/2\">PADE 2<\/route-link>\r\n    <route-link href=\"\/page\/3\">PADE 3<\/route-link>\r\n\r\n    <route-switch path=\"\/\" unique={true} component={<h1>Count {RouteCount}<\/h1>} \/>\r\n    <route-switch path=\"\/page\/2\" component={<h1>Count {RouteCount}<\/h1>} \/>\r\n    <route-switch path=\"\/page\/3\" component={<h1>Count {RouteCount}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>);"}
            emitCode={emitCode1}
        />
        <br />
        <br />
        <p>
            KIX როუტინგისას გვერდის წინ გადასასვლელად იყენებს
            <a class="url" href="https://developer.mozilla.org/en-US/docs/Web/API/History/back" target="_blank">.forward()</a>{"  "}
            ფუნქციას.<br />
        </p>
    </div>
</div>