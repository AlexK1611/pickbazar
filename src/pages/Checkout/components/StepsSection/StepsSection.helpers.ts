/*
    функция используется только в дочерних компонентах
    текущего компонента. есть смысл вынести её в отдельный файл,
    не объявляя в самом компоненте
*/
export const selectedOptionChecker = (
    first: string,
    second: string
) => {
    return first === second
}