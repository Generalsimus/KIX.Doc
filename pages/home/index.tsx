
import { CommandView } from "../../ui/command-view";
import { Banner } from "../../widgets/banner";
import { Header } from "../../widgets/header";
import { languageState } from "../../widgets/language-switch";
import { currentCodeVersionExamples } from "../../widgets/versions";
import "./style.scss";

export function HomePage() {

    return <>
        <Banner />
        <div class="home-page flex content-center direction-column items-center">
            <div class="code-revision flex items-start content-center">
                {currentCodeVersionExamples.HomePageCodeView1}
                <div>
                    <h1 class="home-page-title">A Simpliest Component</h1>
                    <p class="read-simple-text">
                    
                     
                        {languageState.home_page_description1}
                        </p>
                </div>
            </div>
            <div class="install-instruction flex">
                <p class="read-simple-text">{languageState.home_page_description2}</p>
                <div class="run-commands-list flex direction-column items-start">
                    <CommandView command="npm i -g kix" />
                    <CommandView command="kix new app-name" />
                    <CommandView command="cd app-name" />
                    <CommandView command="kix start" />
                    <route-link href="/docs/"  class="learn-button flex items-center">
                        LEARN KIX
                        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8H14" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.6667 4.66669L14.0001 8.00002L10.6667 11.3334" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </route-link> 
                </div>
            </div>
        </div>
    </>
}


