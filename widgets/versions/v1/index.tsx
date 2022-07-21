
// import { docPageData } from "./page-data/sponsor";
// import { sponsorPage } from "./page-data/sponsor";
// import { Versions } from "..";
import { aboutPageData } from "./page-data/about";
import { contactPageData } from "./page-data/contact";
import { docPageData } from "./page-data/documentation";
import { sponsorPageData } from "./page-data/sponsor";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { DocumentationPage } from "./pages/docs";
import { SponsorPage } from "./pages/sponsor";
// import { AboutPage } from "../../../pages/about";
// import { ContactPage } from "../../../pages/contact";
// import { DocumentationPage } from "../../../pages/docs";
// import { SponsorPage } from "../../../pages/sponsor";
// import { DocumentationResources } from "./documentation";
// import { sponsorPage } from "./pages/data/sponsor";



// const docPageName = 
export const v1 = {
  v: 1,
  pages: {
    "Docs": DocumentationPage,
    "Sponsor": SponsorPage,
    "About": AboutPage,
    "Contact": ContactPage
  },
  pagesData: {
    sponsor: sponsorPageData,
    doc: docPageData,
    about: aboutPageData,
    contact: contactPageData,
    
  }

}