import React, { Component } from 'react'
import { BookServices } from '../../services/Book-Services';
import { ResultItem } from '../../models/result-item';
import BookCard from '../Book-Card/Book-Card';
import './Book-List.scss'

class BookList extends Component<IBookListProps,IBookListState> {
    constructor(props: IBookListProps) {
        super(props)
        this.state = {
            resultItems: []
        }
    }
    componentDidMount() {
        const bookServices = new  BookServices();
        const res = bookServices.search("شریعتی");
        res.then((data)=> {
           this.setState({resultItems: data.items});
           console.log(this.state.resultItems);
        })
    }
    render() {
        return (
            <div className="list-items" id="list-items">
            {this.state.resultItems.map (item=> {
                return(
                    <BookCard volumeInfo = {item.volumeInfo} />
                )  
                
              })}
            </div>
           
            )
    }
}
interface IBookListProps {
}
interface IBookListState {
    resultItems: ResultItem[];
}
export default  BookList
