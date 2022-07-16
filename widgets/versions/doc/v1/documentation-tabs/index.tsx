import kix, { Component } from "kix"
import { currentCodeVersionExamples } from "../../.."
import { CodeTabViewResult } from "../../../../../ui/code/code-result-view/tab-view"
import { CodeResultViewBox } from "../../../../../ui/code/code-result-view/view-box"
import { componentsDoc } from "./components"
import { eventsDocs } from "./events"
import { parametersDocs } from "./Parameters"
import { propsDoc } from "./props"
import { quickStartDoc } from "./quick-start"
import { routeToolsDocs } from "./routeTools"
import { routingDoc } from "./routing"
import { useListenerDocs } from "./useListener"
// import ss from "../../../../../package.json"
// console.log("🚀 --> file: index.tsx --> line 14 --> ss", ss);



export interface TabMenuItemType {
    tabTitle: string
    path?: string
    component?: JSX.Element,
    childTabs?: TabMenuItemType[]
}

export const documentationTabs: TabMenuItemType[] = [
    {
        tabTitle: "Getting Started",
        childTabs: [
            {
                tabTitle: "Quick Start",
                path: "",
                component: quickStartDoc,
            },
            {
                tabTitle: "Introduction",
                component: <div>აქ დაწერე რა არის როგორ მშობს რა შხესძლებლობებს ფლობს რამე რუმეები და დოკის ლინკები დაურთე თან</div>,
                path: "child/Tasdab1",
            }
        ]
    },
    {
        tabTitle: "Structure",
        childTabs: [
            {
                tabTitle: "Components",
                component: componentsDoc,
                path: "components",
            },
            {
                tabTitle: "Props",
                component: propsDoc,
                path: "props",
            }
        ]
    },
    {
        tabTitle: "Routing and Navigation",

        childTabs: [
            {
                tabTitle: "Routing",
                component: routingDoc,
                path: "routing",
            },
            {
                tabTitle: "Parameters",
                component: parametersDocs,
                path: "route/parameters",
            },
            {
                tabTitle: "Events",
                component: eventsDocs,
                path: "route/events",
            },
            {
                tabTitle: "Tools",
                component: routeToolsDocs,
                path: "route/tools",
            }
        ]
    },
    {
        tabTitle: "API Reference",
        childTabs: [
            {
                tabTitle: "useListener()",
                component: useListenerDocs,
                path: "uselistener",
            }
        ]
    },
]