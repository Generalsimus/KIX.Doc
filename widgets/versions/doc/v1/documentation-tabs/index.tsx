import kix, { Component } from "kix"
import { currentCodeVersionExamples } from "../../.."
import { CodeTabViewResult } from "../../../../../ui/code/code-result-view/tab-view"
import { CodeResultViewBox } from "../../../../../ui/code/code-result-view/view-box"
import { componentsDoc } from "./components"
import { propsDoc } from "./props"
import { quickStartDoc } from "./quick-start"



export interface TabMenuItemType {
    tabTitle: string
    path?: string
    component?: JSX.Element,
    childTabs?: TabMenuItemType[]
}
window.history.pushState

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
                component: <div>სადასდას</div>,
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
                component: <div>
                    <h1 class="title-text">ნავიგაცია</h1>
                    <p class="description-text georgian-text ">
                        ნავიგაცია KIX-ში არის ძალიან მინიმალიზირებული ის უმეტესად დაფუძნებულია Vanilla JS ის ფუნქციონალზე და არის საკმაოდ მინიმალისტური და გამოირჩევა მაღალი წარმადობით
                    </p>
                </div>,
                path: "routing",
            },
            {
                tabTitle: "Events",
                component: <div>
                    <h1 class="title-text">ნავიგაცია</h1>
                    <p class="description-text georgian-text ">
                        ნავიგაცია KIX-ში არის ძალიან მინიმალიზირებული ის უმეტესად დაფუძნებულია Vanilla JS ის ფუნქციონალზე და არის საკმაოდ მინიმალისტური და გამოირჩევა მაღალი წარმადობით
                    </p>
                </div>,
                path: "route/events",
            },
            {
                tabTitle: "Parameters",
                component: <div>
                    <h1 class="title-text">ნავიგაცია</h1>
                    <p class="description-text georgian-text ">
                        ნავიგაცია KIX-ში არის ძალიან მინიმალიზირებული ის უმეტესად დაფუძნებულია Vanilla JS ის ფუნქციონალზე და არის საკმაოდ მინიმალისტური და გამოირჩევა მაღალი წარმადობით
                    </p>
                </div>,
                path: "route/parameters",
            },
            {
                tabTitle: "Tools",
                component: <div>
                    <h1 class="title-text">ნავიგაცია</h1>
                    <p class="description-text georgian-text ">
                        ნავიგაცია KIX-ში არის ძალიან მინიმალიზირებული ის უმეტესად დაფუძნებულია Vanilla JS ის ფუნქციონალზე და არის საკმაოდ მინიმალისტური და გამოირჩევა მაღალი წარმადობით
                    </p>
                </div>,
                path: "route/tools",
            }
        ]
    },
    {
        tabTitle: "API Reference",
        childTabs: [
            {
                tabTitle: "useListener()",
                component: <div>as22222dfasdf</div>,
                path: "uselistener",
            }
        ]
    },
]