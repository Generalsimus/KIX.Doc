 
import { ObjectKeys } from "../../../../../utils/ObjectKeys";
import { stringToRoutePath } from "../../../../../utils/stringToRoutePath";
import { objectsToJsx } from "../../../../objects-to-jsx";
import { DocPageSideBarRouts } from "../../page-data/documentation";

 
type JsxRouteComponentsJsxType = (JSX.Element | undefined | JsxRouteComponentsJsxType)[]
export const docRouteComponentsToJsx = (
    documentation: DocPageSideBarRouts,
    basePath = "/",
    startRoutePath = basePath,
    index = 0,
): JsxRouteComponentsJsxType => {
    return ObjectKeys(documentation).map((pageName, pageIndex) => {
        const routeComponent = documentation[pageName];
        const routePath = stringToRoutePath(`${startRoutePath}/${pageName}`);
        if (!routeComponent) {
            return
        } else if ("component" in routeComponent) {
            const currentPath = index === 0 && pageIndex === 0 ? basePath : routePath


            return <route-switch path={currentPath} unique={true} component={<div>{objectsToJsx(routeComponent.component)}</div >} />
        } else {
            return docRouteComponentsToJsx(routeComponent, basePath, routePath, pageIndex)
        }

    })
}




export const docRouteSwitchTabsToJsx = (
    documentation: DocPageSideBarRouts,
    basePath = "/",
    state = {
        routesIsOpen: true
    },
    startRoutePath = basePath,
    index = 0
): JSX.Element => {

    return <div class={"doc-menu-tabs flex direction-column " + (state.routesIsOpen && "active")}>
        {ObjectKeys(documentation).map((pageName, pageIndex) => {

            const routeComponent = documentation[pageName];

            if (!routeComponent) return;
            const isComponent = "component" in routeComponent;
            const routePath = stringToRoutePath(`${startRoutePath}/${pageName}`);
            const nameToJsx = <span>{pageName}</span>

            if (isComponent) {
                const currentPath = index === 0 && pageIndex === 0 ? basePath : routePath;

                return <route-link href={currentPath} class={"flex content-between "}>
                    {nameToJsx}
                </route-link>

            } else {
                const routesState = { ...state, routesIsOpen: true }
                return <>
                    <a class={`flex content-between ${routesState.routesIsOpen && "active"}`} onClick={() => {
                        routesState.routesIsOpen = !routesState.routesIsOpen;
                    }}>
                        {nameToJsx}
                        <svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                        </svg>
                    </a>
                    {docRouteSwitchTabsToJsx(routeComponent, basePath, routesState, routePath, pageIndex)}
                </>
            }
        })}
    </div>
}