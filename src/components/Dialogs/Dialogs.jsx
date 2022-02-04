import React from 'react'
import s from './Dialogs.module.css'
// import {Link} from "react-router-dom";
import {Router, Route, NavLink} from "react-router-dom"
import DialogItem from  '../Dialogs/DialogItem/DialogItem'
import Message from '../Dialogs/Message/Message'



const Dialogs = (props) => {
     let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = props.state.messages.map(message=><Message message={message.message} />);
    let newMessageElement = React.createRef();

    let message = () => {
        let textMessage = newMessageElement.current.value;
        alert(textMessage);
    }
    return (


        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div>
                <div>
                    <textarea  ref = {newMessageElement} placeholder='Input your message'></textarea>
                </div>
                <div>
                    <button onClick={message}>Add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs