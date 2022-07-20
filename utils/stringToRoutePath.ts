export const stringToRoutePath = (stringArg: any) => {

    return (`/${stringArg}/`).toLowerCase().trim().replace(/\s+/gm, "-").replace(/[^\w\-]+/gm, "/");
}