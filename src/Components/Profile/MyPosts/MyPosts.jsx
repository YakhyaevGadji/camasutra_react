import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const text = React.useRef();
    const [valueState, setValueState] = React.useState('');
    let postsElements = props.posts.map((postsItem) => <Post key={postsItem.id} message={postsItem.message} likesCount={postsItem.likesCount} />)

    let addPost = (value) => {
        setValueState(value);
        props.addPost(value);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3> 
        <div>
            <div>
                <textarea ref={text}></textarea>
            </div>
            <div>
                <button onClick={() => addPost(text.current.value)}>Add post</button>
            </div>
        </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;