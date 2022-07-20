
import { Burger } from "../../ui/burger"
import { LightSwitch } from "../../ui/light-switch"
import { ObjectKeys } from "../../utils/ObjectKeys"
import { stringToRoutePath } from "../../utils/stringToRoutePath"
import { LanguageSwitch } from "../language-switch"
import { SearchBar } from "../search-bar"
import { currentVersionState, VersionComponent } from "../versions"
// import { Versions } from "../versions"
import "./style.scss"

export function Header() {
    let burgerMenuStatus = false
    const onToggleDropMenu = () => {
        burgerMenuStatus = !burgerMenuStatus
    }

    return <div class="header flex content-between items-center padding-container" mark={(node) => {
        window.addEventListener('scroll', function (event) {
            const { offsetHeight } = node
            const { scrollY } = this
            const setNextElementMargin = (height = offsetHeight) => {
                const { nextElementSibling } = node
                if (nextElementSibling instanceof HTMLElement) {
                    nextElementSibling.style.paddingTop = `${height}px`;
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
        <route-link href="/" class="logo" >
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
                <VersionComponent />
            </div>
        </div>
        <div class="menu flex h100">
            <div class="burger-menu flex items-center h100" onClick={onToggleDropMenu}>
                <Burger isActive={burgerMenuStatus} />
            </div>

            <div class={`menu-items flex items-center h100 ${burgerMenuStatus ? "active" : ""}`}>
                {ObjectKeys(currentVersionState.headers).map((routeName) => {
                    return <route-link href={stringToRoutePath(routeName)} onClick={onToggleDropMenu}>{routeName}</route-link>
                })}
                <a class="header-github-logo flex items-center" target="_blank" href="https://github.com/Generalsimus/KIX" >
                    <svg height="32" width="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" >
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </a>

            </div>

        </div>
    </div >

}