import React, { Component } from 'react'
import { BookServices } from '../../services/Book-Services';
import { ResultItem } from '../../models/result-item';
import BookCard from '../Book-Card/Book-Card';
import './Book-List.scss'
import searchWaiting from '../../assets/images/waiting.jpg'
import MessageBox from '../Message-Box/Message-Box';
import { isNullOrUndefined } from 'util';

class BookList extends Component<IBookListProps,IBookListState> {
    constructor(props: IBookListProps) {
        super(props)
        this.state = {
            resultItems: [],
            isEmptyList: false,
            isWaiting: false
        }
    }

    search = (key: string) => {
        this.setState({resultItems: [],isEmptyList: false,isWaiting:true})
        if(!isNullOrUndefined(key) && key.length>0)
        {
            const bookServices = new  BookServices();
            const res = bookServices.search(key);
            res.then((data)=> {
                const items = data.items;
                !isNullOrUndefined(items) ? this.setState({resultItems: items,isWaiting:false}) : this.setState({resultItems:[], isWaiting:false,isEmptyList: true})
             })
        } else {
            this.setState({isWaiting: false})
        }
    }
    componentDidMount() {  
       this.search(this.props.keyValue);

    }
    componentWillReceiveProps(nextProps: IBookListProps) {
         this.search(nextProps.keyValue);
    }
    render() {
        return (
        <div> 
            <div>         
             {
                 this.state.isWaiting && <div id="search-waiting"><img src={searchWaiting} alt="waiting" /></div>            
             }
             {
                this.state.isEmptyList && <div id="empty-list" className="empty-list"><span> هیچ کتابی جهت نمایش مطابق با عبارت وارد شده،وجود ندارد. </span></div>
             }
            </div> 
            <div className="list-items" id="list-items">
            { !isNullOrUndefined(this.state.resultItems) ?
                this.state.resultItems.map (item=> {
                return(
                    <BookCard key={item.id} volumeInfo = {item.volumeInfo} />
                )     
              }) : ''
            
            }
            </div>
           </div>  
            )
    }
}
interface IBookListProps {
    keyValue: string
}
interface IBookListState {
    resultItems: ResultItem[];
    isEmptyList :boolean;
    isWaiting: boolean;
    
}
export default  BookList
