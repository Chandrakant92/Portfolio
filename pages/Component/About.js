import React from 'react'
import styles from '../../styles/About.module.css'
import Image from 'next/image'
import Pic2 from '../../assets/xabout-us.png.pagespeed.ic.nAUE9eqUQI.jpg'
// import pdf from '../../assets/ChandrakantGawaliResume.pdf'

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box1}>
          <div className={styles.bioMin}>
            <p className={styles.p1}>About me</p>
            <p className={styles.p2}>LET’S
              INTRODUCE ABOUT
              MYSELF</p>
            <p className={styles.p3}>(COMPUTER PROGRAM & SOFTWARE DEVELOPER)</p>
          </div>
          <div className={styles.MyImage} >
          <div className={styles.bioMax}>
              <p className={styles.p1}>About me</p>
              <p className={styles.p2}>LET’S
                INTRODUCE ABOUT
                MYSELF</p>
              <p className={styles.p3}>(COMPUTER PROGRAM & SOFTWARE DEVELOPER)</p>
            </div>
            <Image
              className={styles.myimg}
              src={Pic2}

              alt="Picture of the author"
            />
          </div>
          <div className={styles.bio}>
           

            <p className={styles.p3}>
              I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device.
              <br />
              I construct many Web-Application as well as Mobile Application from the scratch. That are helpful to society along with user-friendly interface.</p>
            <p className={styles.button2} >DOWANLOAD CV</p>
          </div>
        </div>

        <div>
        </div>
      </div>

    </>

  )
}

export default About