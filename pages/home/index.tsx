
import { CommandView } from "../../ui/command-view";
import { Banner } from "../../widgets/banner";
import { Header } from "../../widgets/header";
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
                    <p class="read-simple-text">{`React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.

JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.
`}</p>
                </div>
            </div>
            <div class="install-instruction flex">
                <p class="read-simple-text">{`Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.

Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.

We're proud that Svelte was recently voted the most loved web framework with the most satisfied developers in a pair of industry surveys. We think you'll love it too. Read the introductory blog post to learn more.`}</p>
                <div class="run-commands-list flex direction-column items-start">
                    <CommandView command="npm i -g kix" />
                    <CommandView command="kix new app-name" />
                    <CommandView command="cd app-name" />
                    <CommandView command="kix start" />
                    <div class="learn-button flex items-center">
                        LEARN KIX
                        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8H14" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.6667 4.66669L14.0001 8.00002L10.6667 11.3334" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </>
}


