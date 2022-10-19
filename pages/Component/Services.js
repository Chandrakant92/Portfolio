import React from 'react'
import styles from '../../styles/Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faComputer, faWeb} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const Services = () => {
    return (
        <>
            <div className={styles.Services} id={styles.Services}>
                <div className={styles.heading}>
                    <p className={styles.p1}>OUR SERVICE</p>
                    <p className={styles.p2}>What Service <br /> We Offer For You</p>
                </div>

                <div className={styles.container}>
                    <div className={styles.box}>
                        <p className={styles.pp1}> Web Development</p>
                        <p className={styles.pp2}>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth
                        </p>
                        <p className={styles.pp3}><Link href="/">Learn More</Link></p>
                    </div>
                    <div className={styles.box}>
                        <p className={styles.pp1}> Apps Design</p>
                        <p className={styles.pp2}>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth
                        </p>
                        <p className={styles.pp3}> <Link href="/">Learn More</Link></p>
                    </div>
                    <div className={styles.box}>
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