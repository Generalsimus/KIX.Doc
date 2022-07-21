// import { DocPageSideBarRouts } from "../../.."
import { ObjectMultiItemsTypes, ObjectTypes } from "../../../../objects-to-jsx"
import { componentsDocs } from "./components"
import { eventsDocs } from "./events"
import { parametersDocs } from "./Parameters"
import { propsDocs } from "./props"
import { quickStartDocs } from "./quick-start"
import { routeToolsDocs } from "./routeTools"
import { routingDocs } from "./routing"
import { useListenerDocs } from "./useListener"





export type DocPageSideBarRouts = {
    [pageName: string]: Omit<DocPageSideBarRouts, "component"> | {
        component: ObjectMultiItemsTypes
    } | undefined
}


export const docPageData: DocPageSideBarRouts = {
    "Getting Started": {
        "Quick Start": {
            component: quickStartDocs
        },
        "Introduction": {
            component: [
                {
                    type: ObjectTypes.description,
                    text: [`აქ დაწერე რა არის როგორ მშობს რა შხესძლებლობებს ფლობს რამე რუმეები და დოკის ლინკები დაურთე თან`]
                }
            ]

        }
    },
    "Structure": {
        "Components": {
            component: componentsDocs,
        },
        "Props": {
            component: propsDocs,
        }
    },
    "Routing and Navigation": {
        "Routing": {
            component: routingDocs,
        },
        "Parameters": {
            component: parametersDocs,
        },
        "Events": {
            component: eventsDocs,
        },
        "Tools": {
            component: routeToolsDocs,
        }
    },
    "API Reference": {
        "useListener()": {
            component: useListenerDocs
        }
    }

}
