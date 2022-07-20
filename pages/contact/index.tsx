import { ObjectKeys } from "../../utils/ObjectKeys"
import { DescriptionContainer } from "../../widgets/description-container"
import { RoutePageComponent } from "../../widgets/versions"
import "./style.scss"
export const ContactPage: RoutePageComponent  = () => {
    const socialLinks = {
        Linkedin: "https://www.linkedin.com/groups/9018453/",
        Twitter: "https://twitter.com/kix_js",
        Github: "https://github.com/Generalsimus/KIX",
        Discord: "https://discord.gg/JHDPzyF4fX",
        Facebook: "https://www.facebook.com/groups/916841675790603",
    }
     
    return <DescriptionContainer>
        <div>
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
            <div class="w100 flex items-center direction-column">{
                ObjectKeys(socialLinks).map(key => {
                    return <div class="flex social-links">
                        <a href={socialLinks[key]} target="_blank">{key}</a>
                    </div>
                })
            }
            </div>
        </div>
    </DescriptionContainer>
}