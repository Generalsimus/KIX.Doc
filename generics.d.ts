export type ValueOf<T> = T[keyof T];
export type ValueKeyOf<T> = keyof T[keyof T];