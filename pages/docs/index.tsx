import { currentCodeVersionExamples } from "../../widgets/versions"
import { TabMenuItemType } from "../../widgets/versions/doc/v1/documentation-tabs"
import "./style.scss"
import { DocTabs } from "./tabs"


export function DocumentationPage() {

    return <div class="documentation-page w100 flex content-between" mark={() => {
        console.log("render")
    }}>
        <div class="menu-tabs">
            <DocTabs tabs={currentCodeVersionExamples.documentationTabs} />
        </div>
        <div class="menu-tab-content flex content-center w100">
            <route-block ifEmptyComponent={<div>EMPTY</div>} >
                {currentCodeVersionExamples.documentationTabs.map(tab => {
                    return <Routes tab={tab} />
                })}
            </route-block>
        </div>
    </div>
}

function Routes(props: { tab: TabMenuItemType }) {
    return <>
        {props.tab && <route-switch path={`/docs/${props.tab.path}`} unique={true} component={props.tab.component} />}
        {props.tab.childTabs?.map((childTab) => {
            return <Routes tab={childTab} />
        })}
    </>
}