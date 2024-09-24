import React, { useContext, useRef } from 'react';
import darkH1 from '../assets/images/Group 43.png';
import lightH1 from '../assets/images/Group 48.png';

import darkAI from '../assets/images/Group 55.png';
import lightAI from '../assets/images/Group 54.png';

import darkSecnario from '../assets/images/Group 31.png';
import lightSecnario from '../assets/images/Group 59.png';

import darkSimplicity from '../assets/images/Simplicity (2).png';
import lightSimplicity from '../assets/images/Simplicity.png';

import lineLightLeft from '../assets/images/Group 53 (1).png';
import lineDarkLeft from '../assets/images/Group 56.png';

import lineLightRight from '../assets/images/Group 58.png';
import lineDarkRight from '../assets/images/Group 57.png';
import emailjs from 'emailjs-com';

import { ThemeContext } from '../contexts/ThemeContext.jsx';
import { message } from 'antd';
import { useOutletContext } from 'react-router-dom';

const Main = () => {
    const { theme } = useContext(ThemeContext);
    const { lastSectionRef } = useOutletContext()
    const form = useRef();  // Use ref for form

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_6ulemwu',  
            'template_3r03w0y',  
            form.current,
            'N_TQJHNO46Uf5fuGi'
        )
        .then(
            () => {
                message.success('Email sent successfully!'); 
            },
            (error) => {
                message.error('Failed to send email. Please try again.');
            }
        );
    };
    return (
        <>

            <section>
                <div className="container w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
                    <div className=" text-center">
                        <div className='mb-3'><img
                            src={theme === 'dark' ? darkH1 : lightH1}
                            width="650"
                            height="220"
                            className="d-inline-block align-top"
                            alt="proFormulate logo"
                        /></div>
                        <span className="tagline ">
                            Empowering entrepreneurs with personalized financial insights.
                        </span>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="input-container d-flex mt-3">
                        <div className="row">
                            <div className="col-8">
                                <input type="email" className="form-control p-3" placeholder="Your email address" name="user_email" required />                          
                            </div>
                        <div className="col-4">
                        <button type="submit" className='btn btn-submit-email w-100'>Request Access</button>
                        </div>
                        </div>
                    </form>


                    <div className="social-icons mt-4 d-flex justify-content-center">
                        <a href="https://waitlist-aallie.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-globe"></i>
                        </a>
                        <a href="https://www.facebook.com/aallie.fin" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/aallie/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.tiktok.com/@www.tiktok.com/@aallie27" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a href="https://www.instagram.com/aallie.financial/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>



                </div>
            </section>

            <section>
    <div className="container mb-5 vh-100 d-flex flex-column justify-content-center align-items-center">
            <div style={{
                position: 'relative',
                boxSizing: 'content-box',
                maxHeight: '85vh',
                width: '100%',
                aspectRatio: '1.4588832487309644',
                padding: '40px 0'
            }}>
                <iframe 
                    src="https://app.supademo.com/embed/cm0zgruj900lbcod9gmiwg897?embed_v=2" 
                    loading="lazy" 
                    title="Preformulate" 
                    allow="clipboard-write" 
                    frameBorder="0" 
                    webkitAllowFullScreen 
                    mozAllowFullScreen 
                    allowFullScreen 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                </iframe>
            </div>
        </div>
</section>

            <section className='vh-50 mb-5'>
                <div >
                    <img src={theme === 'dark' ? lineDarkLeft : lineLightLeft} className='img-line-1' alt="line" />
                    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">

                        <div className=" text-center">
                            <div className='mb-3'><img
                                src={theme === 'dark' ? darkAI : lightAI}
                                width="850"
                                height="220"
                                className="d-inline-block align-top"
                                alt="proFormulate logo"
                            /></div>
                            <span className="subTagLine ">
                                Improving business financial processes by utilizing AI.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='vh-50 mb-5'>
                <div >
                    <img src={theme === 'dark' ? lineDarkRight : lineLightRight} className='img-line-2' alt="line" />
                    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">

                        <div className=" text-center">
                            <div className='mb-3'><img
                                src={theme === 'dark' ? darkSecnario : lightSecnario}
                                width="850"
                                height="220"
                                className="d-inline-block align-top"
                                alt="proFormulate logo"
                            /></div>
                            <span className="subTagLine ">
                                Enable stratups:
                                <ul>
                                    <li>To make more accurate and timely financial decisions. </li>
                                    <li>Enhance their financial strategies and achieve better alignment <br /> with their strategic goals.</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='vh-50 mb-5'>
                <div >
                    <img src={theme === 'dark' ? lineDarkLeft : lineLightLeft} className='img-line-1' alt="line" />
                    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">

                        <div className=" text-center">
                            <div className='mb-3'><img
                                src={theme === 'dark' ? darkSimplicity : lightSimplicity}
                                width="850"
                                height="220"
                                className="d-inline-block align-top"
                                alt="proFormulate logo"
                            /></div>
                            <span className="subTagLine ">
                                aallie will simplify complex data insights, and predictive analysis will <br />assist you in avoiding errors
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={lastSectionRef} className='vh-50 mb-5'>
                <div >
                    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
                        <div className=" text-center">

                            <span className="FooterTagLine ">
                                Join the waitlist now and get a step <br />
                                closer to your goals and make your financial decisions easily!

                            </span>

                            <form ref={form} onSubmit={sendEmail} className="input-container d-flex mt-3">
                        <div className="row">
                            <div className="col-8">
                                <input type="email" className="form-control p-3" placeholder="Your email address" name="user_email" required />                          
                            </div>
                        <div className="col-4">
                        <button type="submit" className='btn btn-submit-email w-100'>Request Access</button>
                        </div>
                        </div>
                    </form>
                        </div>
                    </div>
                </div>
            </section>




        </>
    );
};

export default Main;