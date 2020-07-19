import React, { Component } from 'react'
import BookList from '../Book-List/Book-List'

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
        if(this.props.keyValue !== undefined && this.props.keyValue.length > 0){
          return (<BookList keyValue = {this.props.keyValue}/>)
        }
        return (<div></div>)
    }
}
interface IHomeProps {
  keyValue: string
}
export default Home
