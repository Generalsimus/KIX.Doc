// import kix from "kix";
import kix from "kix"
import { HomePage } from "./pages/home";
import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";
import "./style.scss";
import { DocumentationPage } from "./pages/docs";


var HTML = <>
  <Header />
  <div class="route-box flex direction-column">
    <routing ifEmptyComponent={<div> Route Empty </div>}>
      <router path="/" unique={true} component={<HomePage />} />
      <router path="/docs/" component={<DocumentationPage />} />
      <router path="/examples/" component={<h1>Examples</h1>} />
      <router path="/support/" component={<h1>Support KIX</h1>} />
      <router path="/about/" component={<h1>About</h1>} />
    </routing>
  </div>
  <Footer />
</>

kix(document.body, HTML);
