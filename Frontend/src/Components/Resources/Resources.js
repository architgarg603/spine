import React from 'react';
import style from './Resources.module.css'
import v1 from '../../Assets/video 1.png'
import v2 from '../../Assets/video 2.png'
import v3 from '../../Assets/video 3.png'
import { Link } from 'react-router-dom';
function Resources() {
    return <div className={style.wrapper}>
        <div className={style.head}>Resources</div>
        <div className={style.subHead}>Watch these amazing videos to learn how to fix that spine!</div>
        <div className={style.videos}>
            <a href="https://www.youtube.com/watch?v=2oudg45H5VA">
                <div className={style.video}>
                    <img src={v1} className={style.img} />
                    <div className={style.subHead} >Best HIT workouts for spine strength</div>
                </div>
            </a>
            <a href="https://www.youtube.com/watch?v=u6IbsHm6BQs">
                <div className={style.video}>
                    <img src={v2} className={style.img} />
                    <div className={style.subHead} >Science behind bad posture</div>
                </div>
            </a>
            <a href="https://www.youtube.com/watch?v=5YokfY_rnWE">
                <div className={style.video}>
                    <img src={v3} className={style.img} />
                    <div className={style.subHead} >Stretches to try daily</div>
                </div>
            </a>

        </div>

        <div className={style.h2}>
            <div className={style.left}>
                <div className={style.head} style={{ marginTop: "40px", fontSize: "40px" }}>and..if you like to read</div>
                <a href="https://medlineplus.gov/guidetogoodposture.html" >
                    <div className={style.pt}>Guide to good posture  Medline Plus</div>
                </a>
                <a href="https://www.health.harvard.edu/staying-healthy/why-good-posture-matters">
                    <div className={style.pt}>Why posture matters Harvard Health</div>
                </a>
                <a href="https://www.webmd.com/osteoporosis/ss/slideshow-posture-tips">
                    <div className={style.pt}>9 tips to straighten up WebMD</div>
                </a>
            </div>
            <div className={style.right}></div>
        </div>
    </div>;
}

export default Resources;
