import React from 'react'
import styles from '../../styles/Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocation, faUser, faSms, faPhone, faMailBulk  } from '@fortawesome/free-solid-svg-icons';
import {faAndroid, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';


const Aboutt = () => {
    const name = `Chandrakant J Gawali`;
    const email = `chandrakantcjg92@gmail.com`;
    const mono = `+91-9960839899`;
    const add = `CQJG+5PF, Akola, Maharashtra, India. 444501`;
    return (
        <>
            <div class={styles.body}>
                
                <section className={styles.footerOuter}>
                    <div className={styles.container}>
                        <div classNa={styles.container2}>
                            <div >
                                <div className={styles.getFormInner}>
                                    <div className={styles.getFormInnerText}>
                                        <p className={styles.p3}>Get In Touch</p>
                                    </div>
                                    <form action="#">
                                        <div>
                                            <input className={styles.Input} type="text" placeholder="First Name" />
                                            <input className={styles.Input} type="text" placeholder="Last Name" />
                                            <input className={styles.Input} type="email" placeholder="Email" />
                                            <input className={styles.Input} type="tel" placeholder="Phone/Skype" />
                                        </div>
                                        <div className={styles.gridFull}>
                                            <textarea class={styles.textarea} placeholder="Write Something..!" cols="30" rows="10"></textarea>
                                            <input className={styles.Submit} type="submit" value="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class={styles.section}>
                   <p className={styles.p1}>Contact</p>
                    <div class={styles.MyInfo}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                icon={faUser}
                            // style={{  color: "red" }}
                            />
                            <span className={styles.text}> {name} </span>
                        </div>
                        <div className={styles.icon}>
                            <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                icon={faPhone}
                                // style={{  color: "red" }}
                                />
                                
                           <span className={styles.text}> {mono}</span>
                            
                        </div>
                        <div className={styles.icon}>
                            <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                icon={faMailBulk}
                            // style={{  color: "red" }}
                            />
                             <span className={styles.text}>{email}</span>
                        </div>
                        <div className={styles.icon}>
                            <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                icon={faLocation}
                            // style={{  color: "red" }}
                            />
                          <span className={styles.text}>{add}</span>
                        </div>                       
                    </div>
                </section>
                <p className={styles.p1}>Contact</p>
               
            </div >
        </>
    )
}

export default Aboutt