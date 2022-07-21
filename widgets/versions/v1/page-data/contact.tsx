import { ObjectKeys } from "../../../../utils/ObjectKeys";
import { ObjectMultiItemsTypes, ObjectTypes } from "../../../objects-to-jsx";
import { StringTypeEnum } from "../../../objects-to-jsx/string-to-jsx";

const socialLinks = {
    Linkedin: "https://www.linkedin.com/groups/9018453/",
    Twitter: "https://twitter.com/kix_js",
    Github: "https://github.com/Generalsimus/KIX",
    Discord: "https://discord.gg/JHDPzyF4fX",
    Facebook: "https://www.facebook.com/groups/916841675790603",
}

export const contactPageData: ObjectMultiItemsTypes = [
    {
        type: ObjectTypes.title,
        text: ["Text_49"],
        size: 1
    }, {
        type: ObjectTypes.description,
        text: [
            `Text_50`,
            {
                type: StringTypeEnum.url,
                url: "mailto:sosotsertsvadze2@gmail.com",
                text: ["sosotsertsvadze2@gmail.com"]
            },
            `Text_51`,
            {
                type: StringTypeEnum.url,
                url: "https://www.linkedin.com/in/soso-tsertsvadze-795565204/",
                text: ["Text_52"]
            },
        ],
        size: 5
    }, [], [], {
        type: ObjectTypes.jsx,
        jsx: <div class="w100 flex items-center direction-column">{
            ObjectKeys(socialLinks).map(key => {
                return <div class="flex social-links">
                    <a href={socialLinks[key]} target="_blank">{key}</a>
                </div>
            })
        }
        </div>
    }
]