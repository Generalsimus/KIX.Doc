import kix from "kix";
import { CodeResultViewBox } from "../../../../../ui/code/code-result-view/view-box";
const emitCode1 = () => {
    const routes = {
        "/": "PADE 1",
        "/page/2": "PADE 2",
        "/page/3": "PADE 3"
    }
    let counter = 1
    let currentHref: JSX.Element | undefined = <h1>Count {counter}</h1>
    const paths = Object.keys(routes)
    const HTML = <>
        {(paths as any).map((href: keyof typeof routes) => {
            return <a href={href} onClick={(e) => {
                e.preventDefault();
                ++counter
                currentHref = <h1>Count {counter}</h1>
            }}>{routes[href]}</a>
        })}
        {currentHref}
    </>
    return <iframe src="" frameborder="0" onLoad={function () {
        this.contentWindow && kix(this.contentWindow.document.body, HTML)
    }}>
    </iframe>
}
export const eventsDocs = <div>
    <h1 class="title-text">ნავიგაციის ევენთები KIX ში</h1>
    <br />
    <p class="description-text georgian-text ">
        KIX ი ნავიგაციის კონტროლისთვის იყენებს ჯავასკრიფტში უკვე არსებულ "popstate" ევენთს
    </p>
    <CodeResultViewBox
        fileName="1.tsx"
        code={"import kix from \"kix\"\r\n\r\nfunction Routing() {\r\n  let RouteCount = 1\r\n  window.addEventListener(\"popstate\", () => {\r\n    ++RouteCount\r\n  });\r\n  return <>\r\n    <switch href=\"\/\">PADE 1<\/switch>\r\n    <switch href=\"\/page\/2\">PADE 2<\/switch>\r\n    <switch href=\"\/page\/3\">PADE 3<\/switch>\r\n\r\n    <router path=\"\/\" unique={true} component={<h1>Count {RouteCount}<\/h1>} \/>\r\n    <router path=\"\/page\/2\" component={<h1>Count {RouteCount}<\/h1>} \/>\r\n    <router path=\"\/page\/3\" component={<h1>Count {RouteCount}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>);"}
        emitCode={emitCode1}
    />

</div>