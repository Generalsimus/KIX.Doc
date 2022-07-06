
import { LightSwitch } from "../../ui/light-switch"
import { LanguageSwitch } from "../language-swithch"
import { SearchBar } from "../search-bar"
import { Versions } from "../versions"
import "./style.scss"

export function Header() {
    let burgerMenuStatus = false
    const onRouteChange = () => {
        burgerMenuStatus = false;
    }

    return <div class="header flex content-between items-center padding-container" mark={(node) => {
        window.addEventListener('scroll', function (event) {
            const { offsetHeight } = node
            const { scrollY } = this
            const setNextElementMargin = (height = offsetHeight) => {
                const { nextElementSibling } = node
                if (nextElementSibling instanceof HTMLElement) {
                    nextElementSibling.style.marginTop = `${height}px`;
                }
            }
            if (scrollY > offsetHeight) {
                setNextElementMargin();
                node.setAttribute("style", `
                position: fixed;
                width: 100%;
                z-index: 888888888;
                transform: translateY(-${Math.max(100 + (((offsetHeight - scrollY) / offsetHeight) * 100), 0)}%);
                `);
            } else {
                setNextElementMargin(0)
                node.setAttribute("style", ``)
            }
        });
    }}>
        <route-link href="/" class="logo" onClick={function () {

        }}>
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 19.997V19.7586L3.43353 14.6238V14.6053L9.31035 5.84693V15.9004L6.56038 19.9989H3.55978C3.54598 20.0009 3.53194 20.0002 3.51838 19.9969L3.51843 19.997H0ZM7.03989 19.9989H9.20977L9.20972 19.9987C9.21339 19.9991 9.21701 19.9992 9.22068 19.9994C9.23749 19.9994 9.25413 19.9959 9.26956 19.9892C9.28499 19.9825 9.29889 19.9726 9.3104 19.9603V16.6153L7.03989 19.9989ZM13.4613 19.0828C13.724 19.672 13.8928 19.9802 13.9625 19.9989L19.9209 19.9987C19.7653 19.5025 18.1093 15.512 14.9985 8.1379L11.233 13.75C11.4451 14.3045 11.8305 15.212 12.3783 16.4474C12.8341 17.6072 13.1987 18.4937 13.4613 19.0828ZM9.70787 5.25808V15.308L19.8995 0.118911L19.9115 0.127037L19.9209 0.113005C19.9209 0.0475969 19.8787 0.00958647 19.7947 0.000217085H13.2334L13.2317 0.00257026L9.76918 5.16283L9.71706 5.24387L9.70787 5.25808ZM3.44409 0.0670473C3.43744 0.0815137 3.43385 0.0972067 3.43353 0.113138V13.8903L9.10839 5.43321H3.4345V5.03357H9.31013V0.0418685C9.28248 0.0166334 9.24687 0.0020101 9.20955 0.000572128H3.55978C3.544 -0.00101227 3.52807 0.000702787 3.51299 0.00560912C3.49791 0.0105154 3.484 0.0185069 3.47214 0.0290805C3.46029 0.0396542 3.45073 0.0525809 3.44409 0.0670473Z" fill="#F40D30" />
            </svg>
        </route-link>
        <div class="search h100">
            <SearchBar />
        </div>
        <div class="mini-inputs flex">
            <div class="lang">
                <LanguageSwitch />
            </div>
            <div >
                <Versions />
            </div>
        </div>
        <div class="menu flex h100">
            <div class="burger-menu flex items-center h100" onClick={() => {
                burgerMenuStatus = !burgerMenuStatus
            }}>
                <svg viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15" y="2.29999" width="15" height="2.3" rx="1.15" transform="rotate(-180 15 2.29999)" fill="black" />
                    <rect x="15" y="6.59998" width="15" height="2.3" rx="1.15" transform="rotate(-180 15 6.59998)" fill="black" />
                    <rect x="15" y="10.9" width="15" height="2.3" rx="1.15" transform="rotate(-180 15 10.9)" fill="black" />
                </svg>
            </div>
            <div class={`menu-items flex items-center h100 ${burgerMenuStatus ? "active" : ""}`}>
                <route-link href="/docs/" onClick={onRouteChange}>Docs</route-link>
                <route-link href="/examples/" onClick={onRouteChange}>Examples</route-link>
                <route-link href="/support/" onClick={onRouteChange}>Support KIX</route-link>
                <route-link href="/about/" onClick={onRouteChange}>About</route-link>
            </div>
        </div>
    </div >

}