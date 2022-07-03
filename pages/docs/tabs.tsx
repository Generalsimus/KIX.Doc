import { TabMenuItemType } from "../../widgets/versions/doc/v1/documentation-tabs";
import "./tabs.scss"
interface Props {
    tabs: TabMenuItemType[],
    openStatus?: boolean
}
export const DocTabs = (props: Props) => {


    return <div class={"doc-menu-tabs flex direction-column " + (props.openStatus && "active")}>
        {props.tabs.map(tab => {
            return <>
                <Switches tab={tab} />
            </>
        })}
    </div>
}

function Switches(props: { tab: TabMenuItemType }) {
    const state = {
        openStatus: true
    }
    const onToggleDropMenu = () => {
        state.openStatus = !state.openStatus
    }
    const children = <>
        <span>{props.tab.tabTitle}</span>
        {props.tab.childTabs && <svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
        </svg>}</>
    return <>
        {typeof props.tab.path === "string" ? <route-link href={`/docs/${props.tab.path}`} class={"flex content-between " + (state.openStatus && "active")} onClick={onToggleDropMenu}>
            {children}
        </route-link> :
            <a class={"flex content-between " + (state.openStatus && "active")} onClick={onToggleDropMenu}>{children}</a>}
        {props.tab.childTabs && <DocTabs tabs={props.tab.childTabs} openStatus={state.openStatus} />}
    </>
}