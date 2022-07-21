import { ObjectMultiItemsTypes, ObjectTypes } from "../../../../objects-to-jsx";
import { StringTypeEnum } from "../../../../objects-to-jsx/string-to-jsx";




export const quickStartDocs: ObjectMultiItemsTypes = [
    {
        type: ObjectTypes.title,
        text: ["Text_3"]
    }, {
        type: ObjectTypes.description,
        text: [`Text_4`]
    },
    [[]],
    {
        type: ObjectTypes.description,
        text: [
            {
                type: StringTypeEnum.url,
                url: "https://nodejs.org/",
                text: ['Text_5']
            }
        ],
        size: 4
    },
    [],
    {
        type: ObjectTypes.description,
        text: [`Text_6`]
    }, {
        type: ObjectTypes.command,
        command: "npm i -g kix"
    },
    [],
    {
        type: ObjectTypes.description,
        text: [`Text_7`]
    }, {
        type: ObjectTypes.command,
        command: "kix new app-name"
    },
    [],
    {
        type: ObjectTypes.description,
        text: [`Text_8`]
    }, {
        type: ObjectTypes.command,
        command: "cd app-name"
    },
    [],
    {
        type: ObjectTypes.description,
        text: [`Text_9`]
    },
    {
        type: ObjectTypes.command,
        command: "kix start"
    }
] 