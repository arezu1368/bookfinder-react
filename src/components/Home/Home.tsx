import React, { Component } from 'react'
import BookList from '../Book-List/Book-List'
import MessageBox from '../Message-Box/Message-Box';

export class Home extends Component<IHomeProps> {
  constructor(props:IHomeProps){
    super(props)
  }
  componentWillReceiveProps(nextProps: IHomeProps) {
    if (nextProps.keyValue !== this.props.keyValue) {
        // do something important here
        console.log('hi home');
    }
   }
  render() {
        return (       
          <BookList keyValue = {this.props.keyValue}/>
          
        )
     
    }
}
interface IHomeProps {
  keyValue: string
}
export default Home
