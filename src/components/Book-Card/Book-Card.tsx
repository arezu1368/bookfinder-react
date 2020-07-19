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
        if(this.props.volumeInfo !== undefined && this.props.volumeInfo.authors!== undefined) {
            return this.props.volumeInfo.authors.toString();
        } 
        return '';
    }
    render() {
        const {title,imageLinks,publisher,publishedDate} = this.props.volumeInfo;
        let imgSrc: string;
        const stringUtils = new StringUtils();
        if(imageLinks !== undefined) {
            imgSrc = imageLinks.thumbnail;
            if(imgSrc === undefined) {
                imgSrc = noImage;
            }
        } else {
            imgSrc = noImage;
        }
        return (
            <div className="book-card">
            <div className="book-img">
              <img src={imgSrc} alt={title} />
            </div>
            <div className="book-infoes">
              <h1 className="book-title">{stringUtils.truncate(title,50)}</h1>
                {publishedDate !== undefined ?
                        <div className="info-item">
                        <span className='info-title'>تاریخ انتشار:</span>
                        <span className="publish-date">
                          {publishedDate}
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
