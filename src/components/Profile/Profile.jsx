import React from "react";
import s from './Profile.module.css'
import MyPosts from '../Profile/MyPosts/MyPosts'

const Profile = () => {
    return (
        <div>
            <div>
                 <img src={require ( "../img/react_img.jpg")} alt="react_img"/>
           </div>
                <div >
                    <img  className= {s.ava_person} src={require ( "../img/ava_min.jpg")} alt="ava_person"/>
                </div>
          <MyPosts/>
        </div>
    )
}

export default Profile
