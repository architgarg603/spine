import React, { useState } from 'react'
import style from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios';
function Login() {
    const history = useNavigate();
    const [details, setDetails] = useState({});
    const changeHandler = (e, type) => {
        let obj = { ...details };
        obj[type] = e.target.value;
        setDetails(obj)
    }

    const onSubmitHandler = async () => {
        try {
            let data = await axios.post("/user/login", details)
            localStorage.setItem("token", data.data.token)
            history("/")
        } catch (e) {
            console.log(e)
        }
    }



    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <div className={style.detail} >
                    <div className={style.head}>Don't have an Account?</div>
                    <div className={style.subHead}>Make an account now</div>
                    <Link to='/signup' style={{ textDecoration: "none" }}>
                        <div className={style.loginBtn} style={{ textDecoration: "none" }}>Signup</div>
                    </Link>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.rightWrapper}>
                    <div className={style.subHead} style={{ color: "black", fontWeight: 'bold' }}>Hello Again!</div>
                    <div className={style.subsubHead}>Welcome Back</div>
                    <input className={style.email} type='text' placeholder='Email' value={details.email} onChange={(e)=>changeHandler(e,"email")} />
                    <input type="password"  className={style.password} placeholder='Password' value={details.password} onChange={(e)=>changeHandler(e,"password")}  />
                    <div className={style.submitBtn} onClick={onSubmitHandler}> Login</div>
                    <div className={style.forgot}>Forgot Password</div>
                </div>
            </div>
        </div>
    )
}

export default Login
