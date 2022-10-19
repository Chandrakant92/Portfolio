import React from 'react'
import styles from '../../styles/Fotter.module.css'
import Link from 'next/link'
// 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faYoutube, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';


const Fotter = () => {
    
    const text1 = ` © 2022 Copyright: `;
    const text2 = ` Today'sNews.com `;
    const text3 = ` All Rights Reserved`;
    return (
        <>

            <div className={styles.Fotter}>

                <div className={styles.fotp}>
                Thanks For Visiting....!
                <br/>
                
                </div>
                <div className={styles.Icons}>
                    <div className={styles.info}>
                    Follow Us For More..
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed magnam aspernatur, minus est debitis accusantium itaque nulla voluptate, maxime et repellat, delectus labore cumque aperiam unde maiores! Unde, accusamus illum!</p>
                    </div>
                    <div className={styles.FotterC}>
                        <div className={styles.icon}>
                            <a href="https://www.google.com/" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                    icon={faGoogle}
                                // style={{ fontSize: 55, color: "white" }}
                                />
                            </a>
                        </div>
                        <div className={styles.icon}>
                            <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                    icon={faYoutube}
                                // style={{ fontSize: 55, color: "white" }}
                                />
                            </a>
                        </div>
                        <div className={styles.icon}>
                            <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                    icon={faLinkedin}
                                // style={{ fontSize: 55, color: "white" }}
                                />
                            </a>
                        </div>
                        <div className={styles.icon}>
                            <a href="https://github.com/" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                    icon={faGithub}
                                // style={{ fontSize: 55, color: "white" }}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className={styles.FotterB}>
                    {text1}
                    <a className={styles.textwhite} href="https://Today'sNews.com/"> {text2} </a>
                    {text3}
                </div>

            </div>
        </>

    )
}

export default Fotter