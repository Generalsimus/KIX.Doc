// import kix from "kix";
import kix, { Component, ComponentProps, Router, useListener } from "kix"
import { HomePage } from "./pages/home";
import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";
import "./style.scss";
import { DocumentationPage } from "./pages/docs";

 

var HTML = <>
  <Header />
  <div class="route-box flex direction-column">
    <route-block ifEmptyComponent={<div> Route Empty </div>}>
      <route-switch path="/" unique={true} component={<HomePage />} />
      <route-switch path="/docs/" component={<DocumentationPage />} />
      <route-switch path="/examples/" component={<h1>Examples</h1>} />
      <route-switch path="/support/" component={<h1>Support KIX</h1>} />
      <route-switch path="/about/" component={<h1>About</h1>} />
    </route-block>
  </div>
  <Footer />
</>

kix(document.body, HTML);