import React from 'react'
import styles from '../../styles/Contact.module.css'




function Contact() {
  return (
   <>
   <div>
   <div className={styles.box3}>
          <div className={styles.contact}><p>..GET IN TOUCH..</p>

          </div>
          <form className={styles.form}>
            <div className={styles.d1}>

              <label>Name:- </label>
              <input type="text" className={styles.name} />
            </div>
            <div className={styles.d1}>
              <label>Email:-</label>
              <input type="text" className={styles.name} />
            </div>
            <div className={styles.d1}>
              <label>Mobile:-</label>
              <input type="text" className={styles.name} />
            </div>
            <div className={styles.d1}>
              <label>Message:-</label>
              <input type="plain" className={styles.name} />
            </div>
            <div className={styles.btn}>
              <button className={styles.button} >Send Message</button>
            </div>
          </form>

        </div>
   </div>
   
   </>
  )
}

export default Contact