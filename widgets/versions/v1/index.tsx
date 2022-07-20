import { VersionsObjectType } from "..";
import { ValueOf } from "../../../generics"
import { AboutPage } from "../../../pages/about";
import { ContactPage } from "../../../pages/contact";
import { DocumentationPage } from "../../../pages/docs";
import { SponsorPage } from "../../../pages/sponsor";
import { DocumentationResources } from "./documentation";



// const docPageName = 
export const v1: VersionsObjectType = {
  headers: {
    "Docs": DocumentationPage,
    "Sponsor": SponsorPage,
    "About": AboutPage,
    "Contact": ContactPage
  },
  documentation: DocumentationResources,
  pagesData: {
    // docPageSideBar: getDocPageSideBarItems
    // getDocPageSideBarItems(docPageName)
  }

} 