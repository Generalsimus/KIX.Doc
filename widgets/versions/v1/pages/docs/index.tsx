
// import { RoutePageComponent } from "../page-types";
// import { currentCodeVersionExamples } from "../../widgets/versions"
// import { TabMenuItemType } from "../../widgets/versions/doc/v1/documentation-tabs"
import "./style.scss"
import { docRouteSwitchTabsToJsx } from "./utils";
import { docRouteComponentsToJsx } from "./utils";
import "./tabs.scss"
import { currentVersionState, RoutePageComponent } from "../../..";
import { Burger } from "../../../../../ui/burger";


export const DocumentationPage: RoutePageComponent = (props) => {
    let burgerIsActive = false;
    const toggleBurger = () => {
        burgerIsActive = !burgerIsActive
    }


    return <div class={`documentation-page  w100 flex content-between rltv ${burgerIsActive && "active"}`}>
        <div class="menu-tabs ">

            {docRouteSwitchTabsToJsx(currentVersionState.pagesData.doc, props.path)}
        </div>
        <div class="menu-tab-content flex content-center w100">
            <route-block ifEmptyComponent={<div>EMPTY</div>} >
                {docRouteComponentsToJsx(currentVersionState.pagesData.doc, props.path)}
            </route-block>
        </div>
        <div onClick={toggleBurger} class="tabs-burger-switch flex items-center direction-column content-center" >
            <Burger isActive={burgerIsActive} />
        </div>
    </div>
}
