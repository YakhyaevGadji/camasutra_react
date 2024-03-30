import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageBody, sendMessage } from '../../redux/slices/dialogsSlice';

// import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const Dialogs = () => {
    const { dialogs, messages, newMessageBody } = useSelector((state) => state.dialogsSlice);
    const dispatch = useDispatch();

    console.log(newMessageBody);

    // let state = props.store.getState().dialogsPage;

    let dialogsElements = dialogs.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let messagesElements = messages.map((messageItem) => <Message key={messageItem.id} message={messageItem.message}/>)
    // let newMessageBody = state.newMessageBody;

    // console.log(newMessageBody);
    
   

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={(event) => dispatch(addMessageBody(event.target.value))} value={newMessageBody} placeholder='Enter your message'></textarea>
                    </div>
                    <div><button onClick={() => dispatch(sendMessage(newMessageBody))}>Send</button></div>
                </div>
            </div>
        </div>
    );
}
 
export default Dialogs;