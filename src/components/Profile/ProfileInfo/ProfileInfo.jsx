import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src={require ( "./../../img/react_img.jpg")} alt="react_img"/>
            </div>
            <div className={s.descriptionBlock}>
                <img  className= {s.ava_person} src={require ( "./../../img/ava_min.jpg")} alt="ava_person"/>
            </div>
        </div>

    )
}

export default  ProfileInfo

// <img  className= {s.ava_person} src={require ( "./../../img/ava_min.jpg")} alt="ava_person"/>