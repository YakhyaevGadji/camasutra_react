import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {
    const text = React.useRef();
    console.log(props);
    let postsElements = props.posts.map((postsItem) => <Post key={postsItem.id} message={postsItem.message} likesCount={postsItem.likesCount} />)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        props.dispatch(updateNewPostTextActionCreator(text.current.value));
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3> 
        <div>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={text}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;