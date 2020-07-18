import Config from "./Config";

export class BookServices {
    constructor() {
        this.config = new Config();
    }
    config : Config
    search = async (key: string) => {
        const url = `${this.config.baseUrl}?q=${key}&key=${this.config.apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
}