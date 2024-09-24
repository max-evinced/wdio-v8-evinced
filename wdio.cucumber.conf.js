import { config as sharedConfig} from "./wdio.conf.js"
export const config = {
    ...sharedConfig,
    ...{
        framework: "cucumber",
        specs: [
            './test/features/*.feature',
          ],
        cucumberOpts: {
            // <string[]> (file/dir) require files before executing features
            require: [
                './test/step-definitions/given.js',
                './test/step-definitions/when.js',
                './test/step-definitions/then.js'
            ]
        }
    }
}
