// import { CommandView } from "../../../../../ui/command-view";

import { CommandView } from "../../../../ui/command-view";
import { ObjectMultiItemsTypes, objectsToJsx, objectToJsx, ObjectTypes } from "../../../objects-to-jsx";
import { StringTypeEnum } from "../../../objects-to-jsx/string-to-jsx";


export const quickStartDocs: ObjectMultiItemsTypes = [
    {
        type: ObjectTypes.title,
        text: ["რა არის KIX?"]
    }, {
        type: ObjectTypes.description,
        text: [`KIX არის javascript ის ბიბლიოთეკა რომელიც ფოკუსირებულია კოდის სიმარტივესა და სისწრაფერზე
        ის საშუალებას აძლევს მომხმარებელს შექმნას დინამური და მაღალი კომპლექსური პროექტი მაქსიმალურად მარტივი და სწარაფად რენდერირებადი კომპონენტებით`]
    },
    [[]],
    {
        type: ObjectTypes.title,
        text: [
            {
                type: StringTypeEnum.url,
                url: "https://nodejs.org/",
                text: [' აპლიკაციიის გასაშვებად აუცილებელია დაყნებული გქონდეთ Node.JS აპლიკაცია']
            }
        ],
        size: 2
    },
    [[]],
    {
        type: ObjectTypes.description,
        text: [`KIX ის დასაინსტალირებლად გახსენით ბრძანების ფანჯარა და ჩაწერეთ შემდეგი კომანდი:`]
    }, {
        type: ObjectTypes.command,
        command: "npm i -g kix"
    },
    [],
    {
        type: ObjectTypes.description,
        text: [` ახალი სამუშაო გარემოს შესაქმნელად გაუშვით შემდეგი ბრძანება, "app-name" მაგივრად მიუთითეთ აპლიკაციის დასახელება:`]
    }, {
        type: ObjectTypes.command,
        command: "kix new app-name"
    },
    [],
    {
        type: ObjectTypes.description,
        text: [`აპლიკაციაში შესასველად გაუშვით შემდეგი ბრძანება: `]
    }, {
        type: ObjectTypes.command,
        command: "cd app-name"
    },
    [],
    {
        type: ObjectTypes.description,
        text: [`აპლიკაციის გასაშვებად გამოიყენეთ შემდეგი ბრძანება: `]
    },
    {
        type: ObjectTypes.command,
        command: "kix start"
    }
] 