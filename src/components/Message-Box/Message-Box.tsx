import React, { Component } from 'react'
import './Message-Box.scss'

export class MessageBox extends Component<IMessageBoxProps,IMessageBoxState> {
   constructor(props: IMessageBoxProps) {
       super(props)
       this.state = {isShow : true}
   }
   componentDidMount() {
    setTimeout(() => {
        this.setState({isShow: false})
    }, 3000);
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
            this.state.isShow &&
            <div id="chips-message" className="message-box">
            <span className={`message ${this.typeName}`}>{this.props.messageText}</span>
            </div>
        
        )
    }
}
interface IMessageBoxProps {
    messageType: number;
    messageText: string;
}
interface IMessageBoxState {
    isShow:boolean
}
export default MessageBox
