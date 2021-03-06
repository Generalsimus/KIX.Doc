import { ObjectMultiItemsTypes, ObjectTypes } from "../../../../objects-to-jsx"



const emitCode1 = () => {
    const routes = {
        "/": "PADE 1",
        "/page/2": "PADE 2",
        "/page/3": "PADE 3"
    }
    let currentHref: JSX.Element | undefined = undefined
    const paths = Object.keys(routes)
    const HTML = <>
        {(paths as any).map((href: keyof typeof routes) => {
            return <a href={href} onClick={(e) => {
                e.preventDefault();

                currentHref = href === "/" ? undefined : <h1>{routes[href]}</h1>
            }}>{routes[href]}</a>
        })}
        <h1>PAGE 1</h1>
        {currentHref}
    </>
    return HTML
}
const emitCode2 = () => {
    const routes = {
        "/": "PADE 1",
        "/page/2": "PADE 2",
        "/page/3": "PADE 3"
    }
    let currentHref: JSX.Element | undefined = <h1>{routes["/"]}</h1>
    const paths = Object.keys(routes)
    const HTML = <>
        {(paths as any).map((href: keyof typeof routes) => {
            return <a href={href} onClick={(e) => {
                e.preventDefault();

                currentHref = <h1>{routes[href]}</h1>
            }}>{routes[href]}</a>
        })}
        {currentHref}
    </>
    return HTML
}
const emitCode3 = () => {
    const routes = {
        "/page/1": "PADE 1",
        "/page/2": "PADE 2",
        "/page/3": "PADE 3"
    }
    let currentHref: JSX.Element | undefined = undefined
    const paths = Object.keys(routes)
    const HTML = <>
        {(paths as any).map((href: keyof typeof routes) => {
            return <a href={href} onClick={(e) => {
                e.preventDefault();

                currentHref = href === "/page/1" ? <div> Route Empty </div> : <h1>{routes[href]}</h1>
            }}>{routes[href]}</a>
        })}
        {currentHref}
    </>
    return HTML
}
export const routingDocs: ObjectMultiItemsTypes = [
    {
        type: ObjectTypes.title,
        text: ["Text_17"]
    }, [], {
        type: ObjectTypes.description,
        text: [`Text_18`]

    }, {
        type: ObjectTypes.codeView,
        fileName: "1.tsx",
        code: "import kix from \"kix\"\r\n\r\nfunction Routing() {\r\n  return <>\r\n    <route-link href=\"\/\">PADE 1<\/route-link>\r\n    <route-link href=\"\/page\/2\">PADE 2<\/route-link>\r\n    <route-link href=\"\/page\/3\">PADE 3<\/route-link>\r\n\r\n    <route-switch path=\"\/\" component={<h1>PAGE 1<\/h1>} \/>\r\n    <route-switch path=\"\/page\/2\" component={<h1>PAGE 2<\/h1>} \/>\r\n    <route-switch path=\"\/page\/3\" component={<h1>PAGE 3<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <route-block \/>)",
        emitCode: emitCode1
    }, [], [], {
        type: ObjectTypes.description,
        text: [`Text_19`]
    }, {
        type: ObjectTypes.codeView,
        fileName: "1.tsx",
        code: "import kix from \"kix\"\r\n\r\nfunction Routing() {\r\n  return <>\r\n    <route-link href=\"\/\">PADE 1<\/route-link>\r\n    <route-link href=\"\/page\/2\">PADE 2<\/route-link>\r\n    <route-link href=\"\/page\/3\">PADE 3<\/route-link>\r\n\r\n    <route-switch path=\"\/\" unique={true} component={<h1>PAGE 1<\/h1>} \/>\r\n    <route-switch path=\"\/page\/2\" component={<h1>PAGE 2<\/h1>} \/>\r\n    <route-switch path=\"\/page\/3\" component={<h1>PAGE 3<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)",
        emitCode: emitCode2
    }, [], [], {
        type: ObjectTypes.description,
        text: [`Text_20`]
    }, {
        type: ObjectTypes.codeView,
        fileName: "1.tsx",
        code: "import kix from \"kix\"\r\n\r\nfunction Routing() {\r\n  return <>\r\n    <route-link href=\"\/page\/1\">PADE 1<\/route-link>\r\n    <route-link href=\"\/page\/2\">PADE 2<\/route-link>\r\n    <route-link href=\"\/page\/3\">PADE 3<\/route-link>\r\n\r\n    <route-block ifEmptyComponent={<div> Route Empty <\/div>}>\r\n      <route-switch path=\"\/page\/2\" component={<h1>PAGE 2<\/h1>} \/>\r\n      <route-switch path=\"\/page\/3\" component={<h1>PAGE 3<\/h1>} \/>\r\n    </route-block>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)",
        emitCode: emitCode3
    },
]