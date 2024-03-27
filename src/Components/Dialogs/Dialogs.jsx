import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messages.map((messageItem) => <Message key={messageItem.id} message={messageItem.message}/>)
    
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