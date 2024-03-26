import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://vesti42.ru/wp-content/uploads/2023/08/anime.jpg' />
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;