export const editFormButtonChecker = (
    formTitle: string,
    title: string,
    formInfo: string,
    info: string
) => {
    return formTitle === title || formInfo === info
}