
import { currentVersionState, RoutePageComponent } from "../../.."
import { DescriptionContainer } from "../../../../description-container"
import { objectsToJsx } from "../../../../objects-to-jsx"
import "./style.scss"

export const AboutPage: RoutePageComponent = () => {
    return <DescriptionContainer>
        <div class="about-page w100 h100">
            {objectsToJsx(currentVersionState.pagesData.about)}
        </div>
    </DescriptionContainer>
}