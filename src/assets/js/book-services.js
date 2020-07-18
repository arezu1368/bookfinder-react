import {Config} from "./config.js"
export class BookServices {
    constructor() {
        this.config = new Config();
    }
    search = async (key) => {
        const url = `${this.config.baseUrl}?q=${key}&key=${this.config.apikey}`;
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
}
