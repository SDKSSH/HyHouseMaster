import { ClientOptions } from "../options/ClientOptions";
const mineFlayer = require("mineflayer")


export class HousingClient {
    private options: ClientOptions;

    constructor(options: ClientOptions) {
        this.options = options;    
    }
}