export const arrayToObjectKeys = <
    KEY extends string | number | symbol,
    VALUE extends Partial<Record<KEY, any>>
>(
    array: VALUE[],
    key: KEY
): Record<VALUE[KEY], VALUE> => {
    return array.reduce((a, b) => ((a[b[key] + ""] = b), a), {} as any);
};
