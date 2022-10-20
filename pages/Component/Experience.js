import React from 'react'
import Pic1 from '../../assets/Breaking-News.jpg';
import Pic2 from '../../assets/images.jpg';
import Pic3 from '../../assets/VoiceAssistant.jpg';
import Pic4 from '../../assets/Img.jpg';
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

      <div className={styles.Development}>
        <p className={styles.development}>Development</p>
        <p className={styles.heading}>My Skills</p>
        <section className={styles.section} id={styles.Section}>
          <div className={styles.MainContainer}>
            <h5 className={styles.SkillS}>Programming Language</h5>
            <div className={styles.container}>
              <p className={styles.text1}>Java</p>
              <div className={styles.CirculrProgress1}>
                <span className={styles.progressValue}> 96%</span>
              </div>
            </div>
            <div className={styles.container}>
              <p className={styles.text1}>JavaScript</p>
              <div className={styles.CirculrProgress2}>
                <span className={styles.progressValue}> 90%</span>
              </div>
            </div>


            <div className={styles.container}>
              <p className={styles.text1}>Python</p>
              <div className={styles.CirculrProgress3}>
                <span className={styles.progressValue}> 70%</span>
              </div>
            </div>
            <div className={styles.container}>
              <p className={styles.text1}> C & C++ </p>
              <div className={styles.CirculrProgress4}>
                <span className={styles.progressValue}> 65%</span>
              </div>
            </div>

          </div>
          <section className={styles.AnimatedSkills}>
            <h5 className={styles.SkillS}>Technical Skills </h5>
            <div className={styles.wrapperS}>
              <div className={styles.containerS}>
                {/*  */}
                <div className={styles.skills}>
                  <div className={styles.details}>
                    <span className={styles.text2}>HTML & CSS</span>
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
                    <span className={styles.text2}>Next Js</span>
                    <span>95%</span>
                  </div>
                  <div className={styles.bar}>
                    <div id={styles.NextJs}></div>
                  </div>
                </div>
                {/*  */}
                <div className={styles.skills}>
                  <div className={styles.details}>
                    <span className={styles.text2}>Node js</span>
                    <span>75%</span>
                  </div>
                  <div className={styles.bar}>
                    <div id={styles.React}></div>
                  </div>
                </div>
                {/*  */}
                <div className={styles.skills}>
                  <div className={styles.details}>
                    <span className={styles.text2}>MySql </span>
                    <span>65%</span>
                  </div>
                  <div className={styles.bar}>
                    <div id={styles.MySql}></div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </section>
        </section>

        <br /><br /><br /><br /><br /><br /><br /><br />

        <p className={styles.myproject}>My Projecct</p>
        <div className={styles.Body}>
          <div className={styles.Project}>
            <div className={styles.projectD}>
              <h4>Todays News</h4>
              <p>" I have build this news website site to preserve human beings knowledgeable so that humans can remain up to date and understand the present day happenings in the world. I used NextJs which is React framework for this website and I constructed this website totally from scratch."</p>
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
              <h4>Voice Assistant</h4>
              <p>" I have construct the mobile virtual assistant that can aid users
                by taking activities using speech recognition, natural
                language processing, and speech synthesis." </p>
            </div>
            <div className={styles.image1}>
              <div>
                <Image src={Pic3} alt="Picture of the Owner" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className={styles.Project}>
            <div className={styles.projectD}>
              <h4>Calculator</h4>
              <p> " I have create  calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations."</p>
            </div>
            <div className={styles.image1}>
              <div>
                <Image src={Pic2} alt="Picture of the Owner" />
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
                <Image src={Pic4} alt="Picture of the Owner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Experience