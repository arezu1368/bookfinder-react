import React, { Component } from 'react'
import './Message-Box.scss'
import { kStringMaxLength } from 'buffer';
import { stringify } from 'querystring';

export class MessageBox extends Component<IMessageBoxProps,IMessageBoxState> {
    constructor(props: IMessageBoxProps) {
       super(props)
       this.state = {isShow : true,isMounted:true}
   }
   componentDidMount() {
    this.timer();
   }
   timer =()=> setTimeout(() => {
    this.props.hideMsg();
   }, 4000);
   componentWillUnmount() {
       clearTimeout(this.timer());
   }
   get typeName() {
    const typeName = "";
    switch (this.props.messageType) {
        case 1:
            return "m-error";
        case 2:
            return "m-success";
        default:
            return null;
    }
}
    render() {
        return (
            <div id="chips-message" className="message-box">
             <span className={`message ${this.typeName}`}>{this.props.messageText}</span>
            </div>
        )
    }
}
interface IMessageBoxProps {
    messageType: number;
    messageText: string;
    hideMsg: any;
}
interface IMessageBoxState {
    isShow:boolean,
    isMounted:boolean;
}
export default MessageBox
