import { Volume } from "./volume";

export class ResultItem {
    constructor(data?: any) {
        this.id = data.firstName;
        this.volumeInfo = data.valumeInfo;   
    }
    id: number;
    volumeInfo: Volume;
}
