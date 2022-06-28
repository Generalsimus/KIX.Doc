import { ValueOf } from "../../../generics"
import { documentationTabs } from "./v1/documentation-tabs";
import { homePageCodeViews, homePageContent } from "./v1/home-page";




const versionExamples = {
  "1": {
    ...homePageContent,
    ...homePageCodeViews,
    documentationTabs,
  },
  "2": {
    ...homePageContent,
    ...homePageCodeViews,
    documentationTabs
  }
}


export type VersionKeyTypes = keyof ValueOf<typeof versionExamples>
export const codeVersionExamples = versionExamples