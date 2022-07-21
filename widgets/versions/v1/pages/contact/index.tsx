
import { currentVersionState, RoutePageComponent } from "../../.."
import { ObjectKeys } from "../../../../../utils/ObjectKeys"
import { DescriptionContainer } from "../../../../description-container"
import { objectsToJsx } from "../../../../objects-to-jsx"
import "./style.scss"
export const ContactPage: RoutePageComponent = () => {
   

    return <DescriptionContainer>
        <div>
            {objectsToJsx(currentVersionState.pagesData.contact)}
            <h1>კონტაქტი</h1>
            <p class="f12">  ტროექტის ავტორთან დასაკავშირებლად გამოიყენეთ მეილი (<a class="url" href="mailto:sosotsertsvadze2@gmail.com" target="_blank">sosotsertsvadze2@gmail.com</a> ){" "}
                ან დაუკავშირდეთ მის linkedin ის ოფიციალურ  <a class="url" href="https://www.linkedin.com/in/soso-tsertsvadze-795565204/" target="_blank">გვერდს</a>
            </p>
            {/* <br />
            <p class="description-text">
                ტროექტის ავტორთან დასაკავშირებლად გამოიყენეთ <a class="url" href="mailto:user@example.com" target="_blank">მაილი</a>{" "}
                ან დაუკავშირდეთ მის linkedin ის ოფიციალურ  <a class="url" href="https://www.linkedin.com/in/soso-tsertsvadze-795565204/" target="_blank">გვერდს</a>
            </p> */}
            <br />
            <br />
            {/* <div class="w100 flex items-center direction-column">{
                ObjectKeys(socialLinks).map(key => {
                    return <div class="flex social-links">
                        <a href={socialLinks[key]} target="_blank">{key}</a>
                    </div>
                })
            }
            </div> */}
        </div>
    </DescriptionContainer>
}