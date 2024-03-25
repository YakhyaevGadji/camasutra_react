import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yn8kq_YVzTYhemWw3Q3coPHgqHyfZRnP7w&s" alt=""/>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTpiEoQuOyj6WmKgNKUWkkw1Gus6slQe6YA&s" alt=""/>
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className="item">post 1</div> 
                    <div className="item">post 2</div>
                </div>
            </div>
        </div>
    );
}
 
export default Profile;