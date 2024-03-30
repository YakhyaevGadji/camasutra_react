import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'it,s my first post', likesCount: 10},
    ],

    newPostText: ''
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers : {
        profileReducer(state, action) {
            let newPost = {
                id: 5,
                message: action.payload,
                likesCount: 0
            };
        
            state.posts.push(newPost);
        },
        addPostText(state, action) {
            state.newPostText = action.payload;
        },
    }
});

export const { profileReducer, addPostText } = profileSlice.actions;

export default profileSlice.reducer; 