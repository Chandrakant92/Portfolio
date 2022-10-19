import React from 'react'
import { useRouter } from "next/router"
import  { useEffect, useState } from "react";

import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import About from './About.js'
import Script from 'next/script'

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);



  const router = useRouter();
  
  return (
    <>
      <nav className={styles.navbar}>

        <ul className={styles.navtag}>
          <div className={styles.nava} onClick={() => router.push('/')}>Home</div>
          <div className={styles.nava} onClick={() => router.push('/')}>About</div>
          <div className={styles.nava} onClick={() => router.push('/')}>Services</div>
          <div className={styles.nava} onClick={() => router.push('/')}>Experience</div>
          <div className={styles.nava} onClick={() => router.push('/')}>Contact</div>
        </ul>
        
      </nav>
      {/* <div className={styles.scrollToTop}>
      {isVisible && 
        <div onClick={scrollToTop}>
          <img src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top'/>
        </div>}
    </div> */}
   
    </>
  )
}

export default Navbar