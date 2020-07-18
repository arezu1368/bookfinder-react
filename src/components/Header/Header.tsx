import React, { Component } from 'react'
import './Header.scss'
import logo from '../../assets/images/book-finder2.png'
import searchImage from '../../assets/images/search-icon.png'

export class Header extends Component {
    render() {
        return (
            <header>
             <div className="header-container">
               <div className="logo">
                   <img src={logo} className="logo" alt="logo" />
               </div>
               <h1 className="search-title">
                   <div className="search-icon" >
                       <img src={searchImage} />
                   </div>
                   <span>   کتاب مور نظر خود را در این قسمت بیابید</span>
                   <div className="title-end-shape"></div>
               </h1>
               <div className="search-container">
                   <div  className="search-fields">
                       <form  id="search-form" className="search-form">
                           <input  id="key" name="key"
                                  placeholder="جستجو بر اساس عنوان ،نویسنده،..."/>
                           <input type="submit" value="submit" hidden/>
                           <i id="search-btn"  className="material-icons search-icon">search</i>
                       </form>
                   </div>

               </div>
           </div>

       </header>
        )
    }
}

export default Header
