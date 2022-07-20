import { useListener } from "kix"
// import { v1 } from "./doc"
import kix, { Component } from "kix"
import { DropDownSmallInput } from "../../ui/dropdown-input"
import { ValueOf } from "../../generics"
import { ObjectKeys } from "../../utils/ObjectKeys"
import { v1 } from "./v1"
import { ObjectMultiItemsTypes } from "../objects-to-jsx"

export type RoutePageComponent = JSX.EL<{
    path: string;
}>

export type DocPageSideBarRouts = {
    [pageName: string]: Omit<DocPageSideBarRouts, "component"> | {
        component: ObjectMultiItemsTypes
    } | undefined
}

export interface VersionsObjectType {
    headers: {
        [path: string]: RoutePageComponent,
    },
    documentation: DocPageSideBarRouts
    pagesData: {}
}
const versionsList = {
    "1": v1,
    "2": v1
}
type VersionKeyNameTypes = keyof typeof versionsList

class VersionController extends Component {
    currentVersionState: VersionsObjectType = { ...v1 }
    constructor() {
        super();
        this.currentVersionState = Object.assign({}, v1)
    }
    currentVersion = this.getVersionName();
    setVersionName(version: VersionKeyNameTypes) {
        this.currentVersion = version
        this.currentVersionState = Object.assign({}, v1)
    }
    getVersionName(): VersionKeyNameTypes {
        let version = localStorage.getItem("version") || ""

        if (version in versionsList) {
            return version as VersionKeyNameTypes
        }
        return ObjectKeys(versionsList)[0]
    }
    render() {
        return <DropDownSmallInput
            value={this.currentVersion}
            options={ObjectKeys(versionsList).map(versionName => {
                return {
                    label: `v${versionName}.x`,
                    value: versionName
                }
            })}
            onChange={({ value }) => {
                if (value) {
                    localStorage.setItem("version", value);
                    this.setVersionName(value)
                }
            }} />
    }
}
const controller = new VersionController();
export const { currentVersionState } = controller;
export const VersionComponent = () => controller.render() 