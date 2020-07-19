import React, { Component } from 'react'
import './Header.scss'
import logo from '../../assets/images/book-finder2.png'
import searchImage from '../../assets/images/search-icon.png'

export class Header extends Component<IHeaderProps,IHeaderState> {
    constructor(props:IHeaderProps) {
        super(props)
        this.state = {key: ''}
    }
    onSubmit = (e:any) => {
        e.preventDefault();
        this.props.searchClick(this.state.key);
    }
    onChange = (e:any) => {
        const newState = { [e.target.name]: e.target.value } as Pick<IHeaderState, keyof IHeaderState>;
        this.setState(newState);
    }
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
                       <form  onSubmit={this.onSubmit} id="search-form" className="search-form">
                           <input  id="key" name="key" value = {this.state.key} onChange = {this.onChange}
                                  placeholder="جستجو بر اساس عنوان ،نویسنده،..."/>
                           <input type="submit" value="submit" hidden/>
                           <i id="search-btn" onClick={this.props.searchClick.bind(this,this.state.key)}  className="material-icons search-icon">search</i>
                       </form>
                   </div>

               </div>
           </div>

       </header>
        )
    }
}
interface IHeaderProps{
    searchClick: any;
}
interface IHeaderState{
    key: string
}
export default Header
