import React from 'react'
import Image from 'next/image';
import styles from '../../styles/Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faComputer, faWeb } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Pic1 from '../../assets/web.jpg'
import Pic2 from '../../assets/OIP.jpg'
import Pic3 from '../../assets/uxux.jpg'


const Services = () => {
    return (
        <>
            <div className={styles.Services} id={styles.Services}>
                <div className={styles.heading}>
                    <p className={styles.p1}>OUR SERVICE</p>
                    <p className={styles.p2}>What Service <br /> We Offer For You</p>
                    <p className={styles.p3}>At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected.</p>
                </div>

                <div className={styles.container}>
                    <div className={styles.box}>
                        <Image
                            className={styles.myimg}
                            src={Pic1}
                            alt="Picture of the author"
                             />
                        <p className={styles.pp1}> Web Development</p>
                        <p className={styles.pp2}>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth
                        </p>
                        <p className={styles.pp3}><Link href="/">Learn More</Link></p>
                    </div>
                    <div className={styles.box}>
                    <Image
                            className={styles.myimg}
                            src={Pic2}
                            alt="Picture of the author"
                             />
                        <p className={styles.pp1}> Apps Interface</p>
                        <p className={styles.pp2}>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth
                        </p>
                        <p className={styles.pp3}> <Link href="/">Learn More</Link></p>
                    </div>
                    <div className={styles.box}>
                    <Image
                            className={styles.myimg}
                            src={Pic3}
                            alt="Picture of the author"
                             />
                        <p className={styles.pp1}> UI/UX Design</p>
                        <p className={styles.pp2}>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth
                        </p>
                        <p className={styles.pp3}><Link href="/">Learn More</Link></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services