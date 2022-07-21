import { ObjectMultiItemsTypes, ObjectTypes } from "../../../objects-to-jsx";
import { StringTypeEnum } from "../../../objects-to-jsx/string-to-jsx";

export const aboutPageData: ObjectMultiItemsTypes = [
    {
        type: ObjectTypes.title,
        text: ["Text_41"],
    }, {
        type: ObjectTypes.description,
        text: [`Text_42`,
            {
                type: StringTypeEnum.url,
                url: "https://www.linkedin.com/in/soso-tsertsvadze-795565204/",
                text: ["Text_43"]
            },
            `Text_44`
        ],
    }, [], [], {
        type: ObjectTypes.title,
        text: ["Text_45"],
        size: 3
    }, {
        type: ObjectTypes.description,
        text: [`Text_46`],
    }, [], [], {
        type: ObjectTypes.title,
        text: ["Text_47"],
        size: 3
    }, {
        type: ObjectTypes.description,
        text: [`Text_48`],
    },
]