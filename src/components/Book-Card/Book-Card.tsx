import React, { Component } from 'react'
import { Volume } from '../../models/volume'
import './Book-Card.scss'
import { StringUtils } from '../../utils/string-utils';
import noImage from '../../assets/images/no_img.png'

class BookCard extends Component<IBookCardProps,{}> {
    constructor(props: IBookCardProps) {
        super(props)
    }
    get authors(): string {
        return this.props.volumeInfo.authors.toString();
    }
    render() {
        let imgSrc: string;
        const stringUtils = new StringUtils();
        if(this.props.volumeInfo.imageLinks !== undefined) {
            imgSrc = this.props.volumeInfo.imageLinks.thumbnail;
            if(imgSrc === undefined) {
                imgSrc = noImage;
            }
        } else {
            imgSrc = noImage;
        }
        return (
            <div className="book-card">
            <div className="book-img">
              <img src={imgSrc} alt={this.props.volumeInfo.title} />
            </div>
            <div className="book-infoes">
              <h1 className="book-title">{stringUtils.truncate(this.props.volumeInfo.title,50)}</h1>
                { this.props.volumeInfo.publishedDate !== undefined ?
                        <div className="info-item">
                        <span className='info-title'>تاریخ انتشار:</span>
                        <span className="publish-date">
                          {this.props.volumeInfo.publishedDate}
                        </span>
                       </div> : ''}
                { this.authors !== undefined ?
                  <div className="info-item authors">
                  <span className='info-title'> نویسندگان :</span>
                   {stringUtils.truncate(this.authors,70)}
                  </div> : ''        
                }
             </div>
         </div>
           
        )
    }
}
interface IBookCardProps {
    volumeInfo:Volume;
}
export default BookCard
