export const waitForTimeOutPromise = (t: number = 100): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, t)
    })
}