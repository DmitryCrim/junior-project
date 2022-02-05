import React from "react";
import s from './Profile.module.css'
import MyPosts from '../Profile/MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {


    // let posts = [
    //     {id: 1, message: "Hello, glad to see you", likesCount: 12},
    //     {id: 2, message: "Best props", likesCount: 15},
    // ]



    return (
        <div>
            <ProfileInfo />

          <MyPosts posts={props.state.posts} addPost = {props.addPost} />
        </div>
    )
}

export default Profile
