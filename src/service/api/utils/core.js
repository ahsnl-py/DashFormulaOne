import { DashAPI } from "./provider";

export class DashAPICore {

    constructor(options) {
        this.url = options.url
        this.request = options.request

        if (this.request === 'GET') {
            this.getData = () => {
                return DashAPI.getData(this.url)
            }
        }
    }
}