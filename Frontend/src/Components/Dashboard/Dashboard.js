import React, { useEffect, useRef, useState } from 'react';
import style from './Dashboard.module.css'
import m1 from '../../Assets/m1.png'
import m2 from '../../Assets/m2.png'
import m3 from '../../Assets/m3.png'
import g1 from '../../Assets/g1.png'
import Webcam from "react-webcam";

import * as tf from '@tensorflow/tfjs';
import * as tmPose from '@teachablemachine/pose';

function Dashboard() {
    const [models, setModels] = useState();
    const [maxPredictions, setMaxPredictions] = useState();
    const [score, setScore] = useState([]);

    const camera = useRef();
    const player = useRef();

    const URL = "https://teachablemachine.withgoogle.com/models/hZpnR1hwj/";
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    }


    async function predict(img) {
        let prevModels = null
        setModels(models => {
            prevModels = models;
            return models
        })
        if (!prevModels) return
        const { pose, posenetOutput } = await prevModels.estimatePose(img);
        const prediction = await prevModels.predict(posenetOutput);
        let maxPrediction = 0;
        setMaxPredictions(maxPredictions => {
            maxPrediction = maxPredictions;
            return maxPredictions
        })
        for (let i = 0; i < maxPrediction; i++) {
            setScore([prediction[1].probability.toFixed(2), prediction[0].probability.toFixed(2)])
            if (prediction[1].probability.toFixed(2) > 0.90) {
                console.log("bad")
            }
            if (prediction[0].probability.toFixed(2) > 0.80) {
                console.log("good")
            }
        }
    }


    const capture = () => {
        if (!camera.current) return
        const imageSrc = camera.current.getScreenshot();
        if (!camera.current.ctx) return
        var img = new Image();
        img.src = imageSrc;
        camera.current.ctx.drawImage(img, 0, 0)
        predict(camera.current.canvas)
    }

    

    useEffect(async () => {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        let models = await tmPose.load(modelURL, metadataURL);
        setModels(models)
        let maxPredictions = models.getTotalClasses();
        setMaxPredictions(maxPredictions)
        let intervel = setInterval(capture, 1000);


        return () => {
            clearInterval(intervel)

        }
    }, [])




    return <div className={style.wrapper}>
        <div className={style.head} >My Dashboard</div>
        <div className={style.h1}>
            <div className={style.left}>
                <div className={style.subHead}>Your posture has been amazing this week!</div>
                <img src={g1} className={style.g1} />
            </div>
            <div className={style.right}>
                <Webcam audio={false} ref={camera} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} width="500px" />
                {score.length > 0 ? <div className={style.score}>
                    <div className={style.subHead} style={{ marginRight: "50px" }}>
                        Correct Posture <br /> {parseInt(score[1] * 100)}%
                    </div>
                    <div className={style.subHead}>
                        Bad Posture <br /> {parseInt(score[0] * 100)}%
                    </div>
                </div>
                    : null}

            </div>
        </div>
        <div className={style.h2}>
            <img src={m1} className={style.img} />
            <img src={m2} className={style.img} />
            <img src={m3} className={style.img} />
        </div>
    </div>;
}

export default Dashboard;
