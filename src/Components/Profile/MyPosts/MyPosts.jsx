import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map((postsItem) => <Post key={postsItem.id} message={postsItem.message} likesCount={postsItem.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3> 
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;