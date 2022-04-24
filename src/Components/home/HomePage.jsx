import React from 'react';
import { useNavigate } from 'react-router-dom';
import featuresImg from "../../assets/images/features.svg";
import whatNotedImg from "../../assets/images/what-noted.svg";
import whyNotedImg from "../../assets/images/why-noted.svg";
import Experience from './Experience';
import Footer from './Footer';
import './styles.css';

import listIcon from "../../assets/images/list-main.png";
import youTubeIcon from "../../assets/images/youtube.svg";
import icon from '../../assets/icon.png';



export default function HomePage() {

    let navigate = useNavigate();
    const toLogin = () => {
        navigate('/login')
    }
    const toHome = () => {
        navigate('/')
    }
    return (
        <>      
            <header className='header-section'>
            {/* <div className="hero-heading-container">
                <h1 className='hero-heading'>
                    <img className="max-h-12 -mt-0 p-1 ml-20 -mb-12" src={icon} alt='logo' />
                    <a className="relative left-32 bottom-2" href="/">Noted</a>
                </h1>
            </div> */}
            <nav className="p-5 flex justify-between bg-white absolute top-0 -left-1 w-full mb-3">
            {/* <MenuIcon/> */}
            <div className="relative left-16 flex">
                <span className="text-black flex content-center max-h-5 mb-2">
                <span>
                    <img src={icon} style={{height : '200%', marginLeft:"0rem"}}  alt='logo' />
                </span>
                </span>
                <div className="relative right-20 text-5xl text-custom font-bold">
                <button onClick={toHome}>Noted</button>
                </div>
            </div>
            </nav>

                <div className="mt-12 my-hero">
                    <div className="hero-info">
                        <h1 className='short-intro'>Taking notes while watching Youtube?</h1>
                        <p className="intro-text">Do it with the most easy to use note taking chrome extension</p>
                        <div className="action-btns">
                            <a href="/login" className="get-started">Get Started</a>
                            <a href="" className="get-noted">Get Noted</a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img className='yt-head' src={youTubeIcon} alt="yotube logo" />
                        <img className='list-head' src={listIcon} alt="list icon" />
                    </div>
                </div>
            </header>












            <main className="main">
                <section className="main-info-sec">

                    <div className="sub-info-sec bg-primary-light">
                        <div className="image-main">
                            <h2 className="image-title">what is noted</h2>
                            <div className="image">
                                <img src={whatNotedImg} alt="featuresImg" />
                            </div>
                        </div>

                        <div className="info">
                            Noted is the go to solution to take notes while watching youtube!
                            You can take notes while watching your favorite podcast, coding tutorial or anything ...
                        </div>
                    </div>

                    <div className="sub-info-sec sub-info-sec-reverse">
                        <div className="info">
                            Take notes from our extension <br />
                            Access from anywhere <br />
                            Edit your notes from dashboard<br />
                            Share notes with your friends (coming soon)
                        </div>

                        <div className="image-main">
                            <h2 className="image-title">main features</h2>
                            <div className="image">
                                <img src={featuresImg} alt="featuresImg" />
                            </div>
                        </div>
                    </div>

                    <div className="sub-info-sec bg-primary-light">
                        <div className="image">
                            <h2 className="image-title">why noted</h2>
                            <img src={whyNotedImg} alt="featuresImg" />
                        </div>
                        <div className="info">
                            Noted is the go to solution to take notes while watching youtube!
                            You can take notes while watching your favorite podcast, coding tutorial or anything ...
                        </div>
                    </div>
                </section>
            </main>

            <Experience />

            <Footer />

        </>
    )
}