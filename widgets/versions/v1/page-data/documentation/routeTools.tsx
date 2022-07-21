import { ObjectMultiItemsTypes, ObjectTypes } from "../../../../objects-to-jsx";
import { StringTypeEnum } from "../../../../objects-to-jsx/string-to-jsx";



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
    return HTML
}
export const routeToolsDocs: ObjectMultiItemsTypes = [
    {
        type: ObjectTypes.title,
        text: ["Text_25"]
    },
    {
        type: ObjectTypes.description,
        text: [`Text_26`,
            {
                type: StringTypeEnum.url,
                url: "https://developer.mozilla.org/en-US/docs/Web/API/History",
                text: ['Text_27']
            }
        ]
    }, [], [], {
        type: ObjectTypes.description,
        text: [`Text_28`,
            {
                type: StringTypeEnum.url,
                url: "https://developer.mozilla.org/en-US/docs/Web/API/History/pushState",
                text: ['.pushState()']
            },
            `Text_29`, [],
            `Text_30`
        ]
    }, {
        type: ObjectTypes.codeViewTabs,
        codes: [
            {
                typeName: "JavaScript",
                files: [
                    {
                        fileName: '1.tsx',
                        code: "import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { history } = Router\r\n\r\n  function onRouteChange(event) {\r\n    event.preventDefault();\r\n    history.pushState(undefined, \"\", this.getAttribute(\"href\"));\r\n    window.dispatchEvent(new CustomEvent('popstate'));\r\n  }\r\n  return <>\r\n    <a href=\"\/page\/1\" onClick={onRouteChange}>PADE 1<\/a>\r\n    <a href=\"\/page\/2\" onClick={onRouteChange}>PADE 2<\/a>\r\n    <a href=\"\/page\/3\" onClick={onRouteChange}>PADE 3<\/a>\r\n\r\n    <route-switch path=\"\/page\/:id\" component={<h1>PAGE {params.id}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)",
                        emitCode: emitCode1

                    }
                ]
            },
            {
                typeName: "Typescript",
                files: [
                    {
                        fileName: '2.tsx',
                        code: "import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { history } = Router\r\n\r\n  function onRouteChange(this: HTMLElement, event: MouseEvent) {\r\n    event.preventDefault();\r\n    history.pushState(undefined, \"\", this.getAttribute(\"href\"));\r\n    window.dispatchEvent(new CustomEvent('popstate'));\r\n  }\r\n  return <>\r\n    <a href=\"\/page\/1\" onClick={onRouteChange}>PADE 1<\/a>\r\n    <a href=\"\/page\/2\" onClick={onRouteChange}>PADE 2<\/a>\r\n    <a href=\"\/page\/3\" onClick={onRouteChange}>PADE 3<\/a>\r\n\r\n    <route-switch path=\"\/page\/:id\" component={<h1>PAGE {params.id}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)",
                        emitCode: emitCode1
                    }
                ]
            }
        ]
    }, [], [], {
        type: ObjectTypes.description,
        text: [`Text_31`,
            {
                type: StringTypeEnum.url,
                url: "https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState",
                text: ['.replaceState()']
            },
            `Text_32`, [],
            `Text_33`
        ]
    }, {
        type: ObjectTypes.codeViewTabs,
        codes: [
            {
                typeName: "JavaScript",
                files: [
                    {
                        fileName: '1.tsx',
                        code: "import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { history } = Router\r\n\r\n  function onRouteReplace(event) {\r\n    event.preventDefault();\r\n    history.replaceState(undefined, \"\", this.getAttribute(\"href\"));\r\n    window.dispatchEvent(new CustomEvent('popstate'));\r\n  }\r\n  return <>\r\n    <a href=\"\/page\/1\" onClick={onRouteReplace}>PADE 1<\/a>\r\n    <a href=\"\/page\/2\" onClick={onRouteReplace}>PADE 2<\/a>\r\n    <a href=\"\/page\/3\" onClick={onRouteReplace}>PADE 3<\/a>\r\n\r\n    <route-switch path=\"\/page\/:id\" component={<h1>PAGE {params.id}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)",
                        emitCode: emitCode1

                    }
                ]
            },
            {
                typeName: "Typescript",
                files: [
                    {
                        fileName: '2.tsx',
                        code: "import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { history } = Router\r\n\r\n  function onRouteReplace(this: HTMLElement, event: MouseEvent) {\r\n    event.preventDefault();\r\n    history.pushState(undefined, \"\", this.getAttribute(\"href\"));\r\n    window.dispatchEvent(new CustomEvent('popstate'));\r\n  }\r\n  return <>\r\n    <a href=\"\/page\/1\" onClick={onRouteReplace}>PADE 1<\/a>\r\n    <a href=\"\/page\/2\" onClick={onRouteReplace}>PADE 2<\/a>\r\n    <a href=\"\/page\/3\" onClick={onRouteReplace}>PADE 3<\/a>\r\n\r\n    <route-switch path=\"\/page\/:id\" component={<h1>PAGE {params.id}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)",
                        emitCode: emitCode1
                    }
                ]
            }
        ]
    }, [], [], {
        type: ObjectTypes.description,
        text: [`Text_34`,
            {
                type: StringTypeEnum.url,
                url: "https://developer.mozilla.org/en-US/docs/Web/API/History/back",
                text: ['.back()']
            },
            `Text_35`,
        ]
    },
    {
        type: ObjectTypes.codeView,
        fileName: "3.tsx",
        code: "import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { history } = Router\r\n\r\n  const onRouteBack = () => {\r\n    history.back();\r\n  }\r\n  return <>\r\n    <button onClick={onRouteBack}>Back<\/button>\r\n    <br \/>\r\n    <route-link href=\"\/page\/1\" >PADE 1<\/route-link>\r\n    <route-link href=\"\/page\/2\" >PADE 2<\/route-link>\r\n    <route-link href=\"\/page\/3\" >PADE 3<\/route-link>\r\n\r\n    <route-switch path=\"\/page\/:id\" component={<h1>PAGE {params.id}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)",

    }, [], [], {
        type: ObjectTypes.description,
        text: [`Text_36`,
            {
                type: StringTypeEnum.url,
                url: "https://developer.mozilla.org/en-US/docs/Web/API/History/forward",
                text: ['.forward()']
            },
            `Text_37`,
        ]
    },
    {
        type: ObjectTypes.codeView,
        fileName: "3.tsx",
        code: "import kix, { Router } from \"kix\"\r\n\r\nfunction Routing() {\r\n  const { history } = Router\r\n\r\n  const onRouteForward = () => {\r\n    history.forward();\r\n  }\r\n  return <>\r\n    <button onClick={onRouteForward}>Forward<\/button>\r\n    <br \/>\r\n    <route-link href=\"\/page\/1\" >PADE 1<\/route-link>\r\n    <route-link href=\"\/page\/2\" >PADE 2<\/route-link>\r\n    <route-link href=\"\/page\/3\" >PADE 3<\/route-link>\r\n\r\n    <route-switch path=\"\/page\/:id\" component={<h1>PAGE {params.id}<\/h1>} \/>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Routing \/>)"

    },
]
