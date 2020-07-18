export class MessageCreator {
    constructor(type,message) {
        this.type= type;
        this.message = message;
    }
    get typeName() {
        const typeName = "";
        switch (this.type) {
            case 1:
                return "m-error";
            case 2:
                return "m-success";
            default:
                return null;
        }
    }
    create() {
        const message = `<span class="message ${this.typeName}">${this.message}</span>`;
        return message;
    }
}