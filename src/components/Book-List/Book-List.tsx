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
            resultItems: []
        }
    }
    isShowMessage = false;
    isEmptyList = false;
    search = (key: string) => {
        this.setState({resultItems: []})
        if(!isNullOrUndefined(key) && key.length>0)
        {
            this.isEmptyList = false;
            const bookServices = new  BookServices();
            const res = bookServices.search(key);
            res.then((data)=> {
                const items = data.items;
                items !== undefined ? this.setState({resultItems: items}) : this.isEmptyList = true
             })
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
            <div className="list-items" id="list-items">
            { this.state.resultItems !== undefined && this.state.resultItems.length>0 ?
                this.state.resultItems.map (item=> {
                return(
                    <BookCard volumeInfo = {item.volumeInfo} />
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
}
export default  BookList
