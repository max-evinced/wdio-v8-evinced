import { config as sharedConfig} from "./wdio.conf.js"
export const config = {
    ...sharedConfig,
    ...{
        framework: "mocha",
        specs: [
            './test/specs/sauce/*.js',
          ],
        reporters: ['spec'],
        // Options to be passed to Mocha.
        // See the full list at http://mochajs.org/
        mochaOpts: {
            ui: 'bdd',
            timeout: 60000
        },
        services: [
            ['sauce']
        ],
        // Sauce Labs
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        region: 'us',
    }
}
