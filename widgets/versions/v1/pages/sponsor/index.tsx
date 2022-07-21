import { currentVersionState, RoutePageComponent } from "../../.."
import { DescriptionContainer } from "../../../../description-container"
import { objectsToJsx } from "../../../../objects-to-jsx"


export const SponsorPage: RoutePageComponent = () => {
    return <DescriptionContainer>
        <div>
            {objectsToJsx(currentVersionState.pagesData.sponsor)}
        </div>
    </DescriptionContainer>
}