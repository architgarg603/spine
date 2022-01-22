import React from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import style from './Homepage.module.css'
import spine from '../../Assets/d 1.png'
import arrow from '../../Assets/arrow.png'
import { Link } from 'react-router-dom';
function Homepage() {
    return <div className={style.wrapper}>
        <div className={style.h1}>
            <img className={style.spine} src={spine} />
            <div className={style.upper}>
                <div>
                    <div className={style.head}>Welcome to Spine</div>
                    <div className={style.subHead}>We believe in self-care</div>
                </div>
            </div>
            <div className={style.lower}>
                <div>
                    <div className={style.head}>Your Posture <br /> matters.</div>
                    <div className={style.subHead} style={{ position: "relative" }}>
                        Here's why.
                        <img className={style.arrow} src={arrow} />
                    </div>
                    <ScrollIntoView selector="#h2" smooth="true">
                        <div className={style.subHead} style={{ position: "absolute", left: "230px", top: "220px", cursor: "pointer" }}>
                            Explore
                        </div>
                    </ScrollIntoView>
                </div>

            </div>
        </div>
        <div className={style.h2} id='h2' >
            <div className={style.head}>Why good Posture is important ?
                <div className={[style.subHead, style.box1].join(" ")}>
                    "Stand up straight." That's timeless advice we've probably all heard at one time or another. It's worth heeding. Good posture is important to balance: by standing up straight, you center your weight over your feet. This also helps you maintain correct form while exercising, which results in fewer injuries and greater gains.
                    <img src={arrow} className={style.arrow2} />
                </div>
            </div>
            <div className={style.low}>
                <div className={style.subHead} style={{ paddingRight: "120px" }}>Good Posture means:</div>
                <div className={style.pts}>
                    <div className={style.pt}>Enables muscles to coordinate in a more-efficient manner</div>
                </div>
                <div className={style.pts}>
                    <div className={style.pt}>Aids in preventing back and muscular pain</div>
                    <div className={style.pt}>Holds the spinal joints in place</div>
                </div>
                <div className={style.pts}>
                    <div className={style.pt} style={{ marginRight: "350px" }}>Decreases the abnormal wearing of joints by keeping them and the bones properly aligned</div>
                </div>
            </div>
        </div>
        <div className={style.h3}>
            <div className={style.head}>You know the reasons <br /> Get Started</div>
            <Link to="/check">
                <div className={style.btn}>
                    Let's Go
                </div>
            </Link>
            <div className={style.footer}>
                <div className={style.subHead}>Get Updates and health tips <br /> straight to your inbox</div>
                <input type="text" className={style.input} placeholder='Enter Email' />
            </div>
        </div>

    </div>;
}

export default Homepage;
