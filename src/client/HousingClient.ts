import { ClientOptions } from "../options/ClientOptions";
import * as mineFlayer from "mineflayer"

export class HousingClient {
    private options: ClientOptions;
    private mineclient : mineFlayer.Bot; 

    constructor(options: ClientOptions) {
        this.options = options;    
    }

    getOptions(){
        return this.options;
    }

    getMineClient(){
        return this.mineclient;
    }

    login(){
        this.mineclient = mineFlayer.createBot(
            {
                "host" : "play.hypixel.net",
                "port" : 25565,
                "auth" : "microsoft",
                "version" : this.options.version,
                "username" : this.options.account.username,
                "password" : this.options.account.password
            }
        )
    }
     
}