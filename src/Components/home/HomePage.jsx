import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

import Footer from './Footer';
import Experience from './Experience';

import featuresImg from "../../assets/images/features.svg"
import whyNotedImg from "../../assets/images/why-noted.svg"
import whatNotedImg from "../../assets/images/what-noted.svg"

export default function HomePage() {

    let navigate = useNavigate();
    const toLogin = () => {
        navigate('/login')
    }

    // importScript("gradient.js");
    return (
        <>
            <section className="navbar">
                <div className="hero"><a href="#">Noted</a></div>
                <div className="nav-items flex">
                    <a href="/register" className="nav-item get-started">Get started</a>
                    <a href="/dashboard" className="nav-item go-to-dashboard">Dashboard</a>
                </div>
            </section>

            <main className="main">
                <div className="gradient">This is gradient</div>
                <section className="hero-text-sec">
                    <span>Taking notes while watching YouTube is difficult ?</span><br />
                    <span className='text-black'>We’ve got you covered!</span>
                </section>

                <div className="download-sec py-12 mt-3">
                    <h3 className='download-text'>Download extension</h3><br />
                    <a className='download-btn shadow-xl' href="#">Get Noted</a>
                </div>

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