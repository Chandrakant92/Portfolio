import React from 'react'
import Pic1 from '../../assets/220367988.jpg';
import styles from '../../styles/Experience.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Experience = () => {

  // let circularProgress =document.querySelector(".CirculrProgress"),
  //     progressValue=document.querySelector(".progressValue");

  //     let progerssStartValue=0,
  //         progressEndValue=20,
  //         speed=100;

  // let progress = setInterval(()=>{
  //   progerssStartValue++;
  //   progressValue.textContent=`${progerssStartValue}%`;
  //   circularProgress.styles.background = `conic-gradient(blueviolet ${progerssStartValue *3 }deg, rgb(211, 211, 211) 0deg)`;

  //   if( progerssStartValue == progressEndValue){
  //     clearInterval(progress);
  //   }
  //   console.log(progerssStartValue);
  // }, speed);



  return (
    <>


      <section className={styles.section} id={styles.Section}>
        <div className={styles.MainContainer}>
          <div className={styles.container}>
            <span className={styles.text}>Communication</span>
            <div className={styles.CirculrProgress}>
              <span className={styles.progressValue}> 90%</span>
            </div>
          </div>
          <div className={styles.container}>
            <span className={styles.text}>Tean Work</span>
            <div className={styles.CirculrProgress}>
              <span className={styles.progressValue}> 90%</span>
            </div>
          </div>
        </div>
        <div className={styles.MainContainer}>
          <div className={styles.container}>
            <span className={styles.text}> Managment</span>
            <div className={styles.CirculrProgress}>
              <span className={styles.progressValue}> 90%</span>
            </div>
          </div>
          <div className={styles.container}>
            <span className={styles.text}> Creativity </span>
            <div className={styles.CirculrProgress}>
              <span className={styles.progressValue}> 90%</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className={styles.SkillS}>Animated Skills </h2>
        <div className={styles.wrapperS}>
          <div className={styles.containerS}>
            {/*  */}
            <div className={styles.skills}>
              <div className={styles.details}>
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className={styles.bar}>
                <div id={styles.htmlBar}></div>
              </div>
            </div>
            {/*  */}
             {/*  */}
             <div className={styles.skills}>
              <div className={styles.details}>
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className={styles.bar}>
                <div id={styles.NextJs}></div>
              </div>
            </div>
            {/*  */}
            <div className={styles.skills}>
              <div className={styles.details}>
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className={styles.bar}>
                <div id={styles.React}></div>
              </div>
            </div>
             {/*  */}
             <div className={styles.skills}>
              <div className={styles.details}>
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className={styles.bar}>
                <div id={styles.MySql}></div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className={styles.Body}>
        <h2 className={styles.myproject}>My Projecct</h2>
        <div className={styles.Project}>
          <div className={styles.projectD}>
            <h4>Project Name</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, rerum sit neque numquam atque dolorem unde inventore explicabo sint dolorum consequatur labore quis </p>
          </div>
          <div className={styles.image1}>
            <div>
              <Image src={Pic1} alt="Picture of the Owner" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className={styles.Project1}>
          <div className={styles.projectD}>
            <h4>Project Name</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, rerum sit neque numquam atque dolorem unde inventore explicabo sint dolorum consequatur labore quis </p>
          </div>
          <div className={styles.image1}>
            <div>
              <Image src={Pic1} alt="Picture of the Owner" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className={styles.Project}>
          <div className={styles.projectD}>
            <h4>Project Name</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, rerum sit neque numquam atque dolorem unde inventore explicabo sint dolorum consequatur labore quis </p>
          </div>
          <div className={styles.image1}>
            <div>
              <Image src={Pic1} alt="Picture of the Owner" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className={styles.Project1}>
          <div className={styles.projectD}>
            <h4>Project Name</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, rerum sit neque numquam atque dolorem unde inventore explicabo sint dolorum consequatur labore quis </p>
          </div>
          <div className={styles.image1}>
            <div>
              <Image src={Pic1} alt="Picture of the Owner" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience