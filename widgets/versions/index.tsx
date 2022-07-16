import { useListener } from "kix"
import { codeVersionExamples } from "./doc"
import kix, { Component } from "kix"
import { DropDownSmallInput } from "../../ui/dropdown-input"
import { ValueOf } from "../../generics"
import { ObjectKeys } from "../../utils/ObjectKeys"




export const Versions = () => {

    let activeVersion = getVersionName()
    return <DropDownSmallInput
        value={activeVersion}
        options={ObjectKeys(codeVersionExamples).map(versionName => {
            return {
                label: `v${versionName}.x`,
                value: versionName
            }
        })}
        onChange={({ value }) => {
            localStorage.setItem("version", value);
            activeVersion = defaultVersion.version = value;
        }} />
}

const getVersionName = (): (keyof typeof codeVersionExamples) => {
    let version = localStorage.getItem("version") || "";

    if (!codeVersionExamples.hasOwnProperty(version)) {
        for (const v in codeVersionExamples) {
            version = v;
            break;
        }
    }
    return version as any
}

export const currentCodeVersionExamples = { ...(codeVersionExamples[getVersionName()!]) };


const defaultVersion = {
    version: getVersionName(),
}

useListener(defaultVersion, "version", () => {

    Object.assign(currentCodeVersionExamples, codeVersionExamples[getVersionName()])

})