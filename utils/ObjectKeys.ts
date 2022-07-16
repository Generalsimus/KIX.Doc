import { ValueKeyOf } from "../generics"

export const ObjectKeys = <O extends {}>(object: O) => {
    return Object.keys(object) as Array<keyof O>
}