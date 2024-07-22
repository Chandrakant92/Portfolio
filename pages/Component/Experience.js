import React from "react";
import Pic1 from "../../assets/news.jpg";
import Pic3 from "../../assets/foalogo.png";
import Pic2 from "../../assets/green.png";
import Pic4 from "../../assets/aisense.png";
import styles from "../../styles/Experience.module.css";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  const project1 = `Our Disease Detection Mobile App uses AI technology to analyze user voice recordings and detect potential health issues. Developed with React Native, Express.js, and Firebase, it offers a convenient way for users to monitor their health.`;
  const project2 = `The Friends of Animal website is an organization that promotes animal welfare and
provides resources for animal care and adoption, education, and news updates related to
animal welfare issues.`;
  const project3 = `Our app helps farmers identify and manage crop diseases using AI technology. Built with React Native, Node.js, and MongoDB, it offers an easy and effective way to support sustainable farming.`;
  const project4 = `This news website is a platform that delivers up-to-date news and information on various
topics through articles, videos, and multimedia content produced by journalists and news
organizations worldwide.`;
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
      <div className={styles.body}>
        <div className={styles.Development}>
          <p className={styles.p1}>Development</p>
          <p className={styles.p2}>My Skills</p>
          <p></p>
          <section className={styles.section} id={styles.Section}>
            <div className={styles.MainContainer}>
              <p className={styles.SkillS}>Programming Language</p>
              <div className={styles.container}>
                <p className={styles.p3}>Java</p>
                <div className={styles.CirculrProgress1}>
                  <span className={styles.progressValue}> 96%</span>
                </div>
              </div>
              <div className={styles.container}>
                <p className={styles.p3}>JavaScript</p>
                <div className={styles.CirculrProgress2}>
                  <span className={styles.progressValue}> 90%</span>
                </div>
              </div>

              <div className={styles.container}>
                <p className={styles.p3}>Python</p>
                <div className={styles.CirculrProgress3}>
                  <span className={styles.progressValue}> 70%</span>
                </div>
              </div>
              <div className={styles.container}>
                <p className={styles.p3}> C & C++ </p>
                <div className={styles.CirculrProgress4}>
                  <span className={styles.progressValue}> 65%</span>
                </div>
              </div>
            </div>
            <section className={styles.AnimatedSkills}>
              <p className={styles.SkillS}>Technical Skills </p>
              <div className={styles.wrapperS}>
                <div className={styles.containerS}>
                  {/*  */}
                  <div className={styles.skills}>
                    <div className={styles.details}>
                      <span className={styles.p4}>HTML & CSS</span>
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
                      <span className={styles.p4}>Next Js</span>
                      <span>95%</span>
                    </div>
                    <div className={styles.bar}>
                      <div id={styles.NextJs}></div>
                    </div>
                  </div>
                  {/*  */}
                  <div className={styles.skills}>
                    <div className={styles.details}>
                      <span className={styles.p4}>Node js</span>
                      <span>75%</span>
                    </div>
                    <div className={styles.bar}>
                      <div id={styles.React}></div>
                    </div>
                  </div>
                  {/*  */}
                  <div className={styles.skills}>
                    <div className={styles.details}>
                      <span className={styles.p4}>MySql </span>
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

          <br />
          <br />
          <br></br>
          <p className={styles.p1}>Development</p>
          <p className={styles.p2}>My Projecct</p>
          <p className={styles.p3}>
            I am construct some awesome project that are help society, also for
            grow myself.
          </p>

          <div className={styles.Body}>
            <div className={styles.Project}>
              <div className={styles.projectD}>
                <p className={styles.pp4}>
                  1.{" "}
                  <a
                    href="https://github.com/Chandrakant92/Disease-Detetion-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Disease Detection Mobile App
                  </a>
                </p>
                <p className={styles.pp3}>{project1}</p>
              </div>
              <div className={styles.image1}>
                <div>
                  <Image  src={Pic4} alt="Picture of the Owner" />
                </div>
              </div>
              <p className={styles.ppp3}>{project1}</p>
            </div>

            {/*  */}
            <div className={styles.Project1}>
              <div className={styles.projectD}>
                <p className={styles.pp4}>
                  2.{" "}
                  <a
                    href="https://github.com/Friends-of-Animals-FOA/FOA-Web-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Friends of Animal (FOA)
                  </a>
                </p>
                <p className={styles.pp3}>{project2}</p>
              </div>
              <div className={styles.image1}>
                <div>
                  <Image src={Pic3} height={300} alt="Picture of the Owner" />
                </div>
              </div>
              <p className={styles.ppp3}>{project2}</p>
            </div>
            {/*  */}
            <div className={styles.Project}>
              <div className={styles.projectD}>
                <p className={styles.pp4}>
                  3.{" "}
                  <a
                    href="https://github.com/Chandrakant92/Crop/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Crop Disease Prediction Mobile App
                  </a>
                </p>
                <p className={styles.pp3}>{project3} </p>
              </div>
              <div className={styles.image1}>
                <div>
                  <Image src={Pic2} alt="Picture of the Owner" />
                </div>
              </div>
              <p className={styles.ppp3}>{project3} </p>
            </div>
            {/*  */}
            <div className={styles.Project1}>
              <div className={styles.projectD}>
                <p className={styles.pp4}>
                  4.{" "}
                  <a
                    href="https://todaysnews.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Todays News
                  </a>
                </p>
                <p className={styles.pp3}>{project4}</p>
              </div>
              <div className={styles.image1}>
                <div>
                  <Image src={Pic1} alt="Picture of the Owner" />
                </div>
              </div>
              <p className={styles.ppp3}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur, rerum sit neque numquam atque dolorem unde inventore
                explicabo sint dolorum consequatur labore quis{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Experience;
