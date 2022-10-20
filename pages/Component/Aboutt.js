import React from 'react'
import styles from '../../styles/Aboutt.module.css'


const Aboutt = () => {
    return (
        <>
            <div>
                <section className={styles.footerOuter}>
                    <div className={styles.container}>
                        <div class="footer_get_touch_inner grid-70-30">
                            <div class="colmun-70 get_form">
                                <div className={styles.getFormInner}>
                                    <div class="get_form_inner_text">
                                        <h3>Get In Touch</h3>
                                    </div>
                                    <form action="#">
                                        <div class="grid-50-50">
                                            <input className={styles.Input} type="text" placeholder="First Name" />
                                            <input  className={styles.Input} type="text" placeholder="Last Name" />
                                            <input className={styles.Input} type="email" placeholder="Email" />
                                            <input className={styles.Input} type="tel" placeholder="Phone/Skype" />
                                        </div>
                                        <div class="grid-full">
                                            <textarea class={styles.textarea} placeholder="About Your Project" cols="30" rows="10"></textarea>
                                            <input className={styles.Submit} type="submit" value="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="colmun-30 get_say_form">
                                <h5>Say Hi!</h5>
                                <ul className={styles.ul} class="get_say_info_sec">
                                    <li>
                                        <i class="fa fa-envelope"></i>
                                        <a href="mailto:">info@stackfindover.com</a>
                                    </li>
                                    <li>
                                        <i class="fa fa-whatsapp"></i>
                                        <a href="tel:">+91 9602381997</a>
                                    </li>
                                    <li>
                                        <i class="fa fa-skype"></i>
                                        <a href="#">Stackfindover</a>
                                    </li>
                                </ul>
                                <ul className={styles.ul} class="get_say_social-icn">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Aboutt