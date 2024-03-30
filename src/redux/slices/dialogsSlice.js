import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your gadji'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: ''
};

const dialogsSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        addMessageBody(state, action) {
            state.newMessageBody = action.payload;
        },
        sendMessage(state, action) {
            state.messages.push({id: 6, message: action.payload});
            state.newMessageBody = '';
        }
    }
});


export const {addMessageBody, sendMessage} = dialogsSlice.actions;

export default dialogsSlice.reducer;