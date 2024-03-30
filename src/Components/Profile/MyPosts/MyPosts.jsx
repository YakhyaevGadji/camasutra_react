import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { addPostText, profileReducer } from '../../../redux/slices/profileSlice';


const MyPosts = () => {
    const text = React.useRef();
    const { newPostText, posts } = useSelector((state) => state.profileSlice);
    const dispatch = useDispatch();

    const newPost = posts.map((item) => <Post key={item.id} message={item.message} likesCount={item.likesCount}/>)
   

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3> 
        <div>
            <div>
                <textarea onChange={(event) => dispatch(addPostText(event.target.value))} value={newPostText}></textarea>
            </div>
            <div>
                <button onClick={() => dispatch(profileReducer(newPostText))}>Add post</button>
            </div>
        </div>
            <div className={s.posts}>
                {newPost}
            </div>
        </div>
    )

}

export default MyPosts;