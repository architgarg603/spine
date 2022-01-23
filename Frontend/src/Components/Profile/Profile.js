import { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import React from 'react'
import style from './Profile.module.css'
import {  useNavigate } from 'react-router-dom';
import axios from '../../axios';


function Profile() {
    const history = useNavigate()
    const [editable, setEditable] = useState(true);
    const [details, setDetails] = useState({
        fname: "Archit",
        lname: "Garg",
        email: "archit@gmail.com",
        ph: "123456789"
    })

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token)
            history("/login")

        axios.post("/user/getuser", { "jwt":token }).then(data => {
            console.log(data.data.data[0])
            let obj = data.data.data[0];
            setDetails({
                fname: obj.name.split(" ")[0],
                lname : obj.name.split(" ")[1] || "",
                email:obj.email,
                ph:obj.phone
            })
        }).catch(err => {
            console.log(err);
        })

    },[])


    const onChangeHandler = (e, key) => {
        let obj = { ...details };
        obj[key] = e.target.value
        console.log(obj)
        setDetails(obj)
    }


    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <Avatar src='/static/images/avatar/1.jpg' className={[style.dp].join(" ")} sx={{height:"200px", width:"200px"}} />
                <div className={style.name}>{details.fname+" "+details.lname}</div>
            </div>
            <div className={style.right}>
                <div className={style.head}>Basic Information</div>
                <div className={style.name}>
                    <label>
                        First Name
                        <input type='text' className={style.fname} value={details.fname} onChange={(e) => onChangeHandler(e, "fname")} disabled={editable ? "disabled" : ""} />
                    </label>
                    <label>Last Name
                        <input type='text' className={style.lname} value={details.lname} onChange={(e) => onChangeHandler(e, "lname")} disabled={editable ? "disabled" : ""} />
                    </label>
                </div>
                <label>Email
                    <input type='email' className={style.email} value={details.email} onChange={(e) => onChangeHandler(e, "email")} disabled={editable} />
                </label>
                <label>
                    Phone Number
                    <input type='text' className={style.phone} value={details.ph} onChange={(e) => onChangeHandler(e, "ph")} disabled={editable} />
                </label>
                <div className={style.btn} onClick={() => { setEditable(!editable) }}>Edit</div>
            </div>
        </div>
    )
}

export default Profile
