import { config as sharedConfig} from "./wdio.conf.js"
export const config = {
    ...sharedConfig,
    ...{
        framework: "cucumber",
        specs: [
            './test/features/*.feature',
          ],
    }
}
