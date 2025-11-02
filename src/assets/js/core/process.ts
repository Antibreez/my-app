export const getProcess = () => {
    const { DEV: isDev, SSR: isSSR } = import.meta.env

    return {
        isDev,
        client: !isSSR && window !== undefined
    }
}