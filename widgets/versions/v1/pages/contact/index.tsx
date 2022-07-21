
import { currentVersionState, RoutePageComponent } from "../../.."
import { ObjectKeys } from "../../../../../utils/ObjectKeys"
import { DescriptionContainer } from "../../../../description-container"
import { objectsToJsx } from "../../../../objects-to-jsx"
import "./style.scss"
export const ContactPage: RoutePageComponent = () => {


    return <DescriptionContainer>
        <div>
            {objectsToJsx(currentVersionState.pagesData.contact)}
        </div>
    </DescriptionContainer>
}