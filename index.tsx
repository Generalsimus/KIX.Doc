// import kix from "kix";
import kix from "kix"
// import { HomePage } from "./pages/home";
import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";
import "./style.scss";
import { ObjectKeys } from "./utils/ObjectKeys";
import { currentVersionState } from "./widgets/versions";
import { stringToRoutePath } from "./utils/stringToRoutePath";
import { HomePage } from "./widgets/versions/v1/pages/home";



var HTML = <>
    <Header />
    <div class="route-box flex direction-column">
        <route-block ifEmptyComponent={<div> Route Empty </div>}>
            <route-switch path="/" unique={true} component={<HomePage path={"/"} />} />
            {ObjectKeys(currentVersionState.pages).map((routeName) => {
                const routePath = stringToRoutePath(routeName)
                const RouteComponent = currentVersionState.pages[routeName]
                if (RouteComponent) {
                    return <route-switch path={routePath} component={<RouteComponent path={routePath} />} />
                }
            })}
        </route-block>
    </div>
    <Footer />
</>

kix(document.body, HTML); 