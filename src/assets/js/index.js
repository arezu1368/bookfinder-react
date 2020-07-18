import {BookServices} from "./book-services.js";
import {BookCard} from "./book-card.js";
import {Volume} from "../../models/volume.js";
import {ResultItem} from "../../models/result-item.js";
import  {MessageCreator} from "./message-creator.js";

export const listItemsContainer = document.getElementById("list-items");
const messageBox = document.getElementById("chips-message");
const emptyList= document.getElementById('empty-list');
const waiting = document.getElementById("search-waiting");
export class Index {
    constructor(){
    }
    removeNodes = (element) => {
        while (element.hasChildNodes()) {
            element.removeChild(element.firstChild);
        }
    };
    searchBtnClick = () => {
        this.removeNodes(listItemsContainer);
        this.removeNodes(messageBox);
        this.hide(emptyList);
        this.show(waiting);
        const key = document.getElementById("key");
        const keyVal = document.getElementById("key").value;
        if(keyVal !== undefined && keyVal.length > 0) {
            const bookServices = new  BookServices();
            const res = bookServices.search(keyVal);
            this.showListItems(res);
        } else {
            const messageCreator = new MessageCreator(1,"لطفا عبارت مورد نظر  جهت جستجو را وارد نمایید.");
            const  message = messageCreator.create();
            messageBox.insertAdjacentHTML("beforeend",message);
            setTimeout(()=> {
                this.removeNodes(messageBox);
            }, 3000);

            this.hide(waiting);
            this.hide(emptyList);

        }
    };
    showListItems = (res) => {

        res.then((data) => {
            this.hide(emptyList);
            const items = data.items;
            if(items !== undefined){
                for (const item of items) {
                    let resultItem = new ResultItem();
                    resultItem = item;
                    let volumeInfo = new Volume();
                    volumeInfo = resultItem.volumeInfo;
                    const bookCard = new BookCard(volumeInfo);
                    bookCard.createCard();
                }
                this.hide(waiting);
            }
            else {

                this.show(emptyList);
                this.hide(waiting);
            }
        })
    }
    // Show an element
    show = function (elem) {
        elem.style.display = 'block';
    };

// Hide an element
    hide = function (elem) {
        elem.style.display = 'none';
    };

}
