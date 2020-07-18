export class Volume {
    constructor() {
        this.title= "";
        this.authors = [];
        this.publisher = "";
        this.publishedDate = "";
        this.imageLinks = {smallThumbnail:"",thumbnail:"",medium: ""};
        this.description = "";
    }
    title: string;
    authors: string[];
    publisher : string;
    publishedDate: string;
    imageLinks : any;
    description: string;
}