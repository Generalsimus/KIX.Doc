import { useListener } from "kix"
// import { v1 } from "./doc"
import kix, { Component } from "kix"
import { DropDownSmallInput } from "../../ui/dropdown-input"
import { ValueOf } from "../../generics"
import { ObjectKeys } from "../../utils/ObjectKeys"
import { v1 } from "./v1"
import { ObjectMultiItemsTypes } from "../objects-to-jsx"
import { sponsorPageData } from "./v1/page-data/sponsor"

export type RoutePageComponent = JSX.EL<{
    path: string;
}>



class VersionController extends Component {
    versions = {
        [v1.v]: v1,
        [2]: {
            ...v1,
            v: 2,
            pagesData: {
                ...v1.pagesData,
                sponsor: [],
            }
        }
    }
    currentVersionState: typeof v1 = this.setVersionName();
    constructor() {
        super();
    }
    setVersionName() {
        let version: string | number = String(localStorage.getItem("version"));
        if (!(version in this.versions)) {
            version = ObjectKeys(this.versions)[0]
        }

        if (this.currentVersionState) {
            return Object.assign(this.currentVersionState, this.versions[version as any])
        }
        return { ...this.versions[version as any] }
    }
    render() {
        return <DropDownSmallInput
            value={String(this.currentVersionState.v)}
            options={Object.keys(this.versions).map(versionName => {
                return {
                    label: `v${versionName}.x`,
                    value: versionName
                }
            })}
            onChange={({ value }) => {
                localStorage.setItem("version", value + "");
                this.setVersionName()
            }} />
    }
}
const controller = new VersionController();
export const { currentVersionState } = controller;
export const VersionComponent = () => controller.render() 