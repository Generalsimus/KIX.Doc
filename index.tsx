// import kix from "kix";
import kix from "kix"
import { HomePage } from "./pages/home";
import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";
import "./style.scss";
import { DocumentationPage } from "./pages/docs";
import { AboutPage } from "./pages/about";
import { SponsorPage } from "./pages/sponsor";
import { ContactPage } from "./pages/contact";

// const s = <HomePage />

var HTML = <>
    <Header />
    <div class="route-box flex direction-column">
        <route-block ifEmptyComponent={<div> Route Empty </div>}>
            <route-switch path="/" unique={true} component={<HomePage />} />
            <route-switch path="/docs/" component={<DocumentationPage />} />
            <route-switch path="/sponsor/" component={<SponsorPage />} />
            <route-switch path="/about/" component={<AboutPage />} />
            <route-switch path="/contact/" component={<ContactPage />} />
        </route-block>
    </div>
    <Footer />
</>

kix(document.body, HTML);
{/* <route-link href="/sponsor/" >Sponsor</route-link>
<route-link href="/about/" >About</route-link>
<route-link href="/contact/" >Contact</route-link> */}