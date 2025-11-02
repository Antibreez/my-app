const sassModules = require('../src/assets/css/sass-modules').default;

export default {
    preprocessorOptions: {
        scss: {
            additionalData: `
${sassModules}
@use "@/assets/css/base" as *;
            `
        }
    }
}