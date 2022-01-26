{/** TODO: аж стесняюсь спросить - а зачем? */ }
export const equalityChecker = (
    first: string | null,
    second: string
): boolean => {
    return first === second ? true : false
}

export const everyChecker = (
    ...args: Array<string | null>
): boolean => {
    return args.every(item => !!item)
}