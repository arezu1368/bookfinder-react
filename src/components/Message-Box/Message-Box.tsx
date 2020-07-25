import React, { Component } from 'react'
import './Message-Box.scss'
import { kStringMaxLength } from 'buffer';
import { stringify } from 'querystring';

export class MessageBox extends Component<IMessageBoxProps,IMessageBoxState> {
   constructor(props: IMessageBoxProps) {
       super(props)
       this.state = {isShow : true,isMounted:true}
   }
//    componentDidMount() {
//     this.setShowTime();
//    }
//    setShowTime = () => {
//     setTimeout(() => {
//         this.setState({isShow: false})
//     }, 3000);
//    }
//    static getDerivedStateFromProps(nextProps:IMessageBoxProps, prevState:IMessageBoxState){
//     if(nextProps.messageText!==prevState.messageText || nextProps.messageType!==prevState.messageType){
//       return { messageText: nextProps.messageText,messageType: nextProps.messageType};
//    }
//    else return  {isShow: true};
//  }
//    componentWillReceiveProps(nextProps: IMessageBoxProps) {
//     this.state.isMounted && this.setState({isShow: true})
//     this.setShowTime();
//    }
//    componentDidUpdate(prevProps:IMessageBoxProps, prevState:IMessageBoxState) {
//     if(prevProps.messageText!==this.props.messageText || prevProps.messageType!==this.props.messageType){
//       //Perform some operation here
//       this.setState({messageText: this.props.messageText,messageType:this.props.messageType,isShow:true});

//     }
//     this.setShowTime();
//   }
//    componentWillUnmount(){
//        this.setState({isMounted : false,isShow:false})
//    }
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
}
interface IMessageBoxState {
    isShow:boolean,
    isMounted:boolean;
}
export default MessageBox
