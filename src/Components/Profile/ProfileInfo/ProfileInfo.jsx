import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://kartinki.pics/uploads/posts/2021-07/1626173608_49-kartinkin-com-p-krasivii-fon-priroda-krasivo-60.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;