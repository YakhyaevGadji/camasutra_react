import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your gadji'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ];

    let dialogsElements = dialogs.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let messagesElements = messages.map((messageItem) => <Message key={messageItem.id} message={messageItem.message}/>)
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                
                {messagesElements}
            </div>
        </div>
    );
}
 
export default Dialogs;