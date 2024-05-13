import React from 'react'
import styles from '../About Page/about.module.css'
import harshit_img from '../About Page/HARSHIT_img.png'

const About = () => {
  return (
    <div className={styles.home}>
        <p>About</p>
        <p id={styles.tagline}>------- Our Aim is to Provide Easy interface of solution to the hardest problems--------</p>
       <div className={styles.about_content_container}>
        
        <div className={styles.about_content}>
        Cloud Next ‘24 wrapped up last week and we were happy to participate to share how you can use Firebase and Google Cloud to build and run modern AI-enabled apps with speed, quality, and safety. We had fun connecting with many of you across over 20 different Firebase sessions, lightning talks, demos, workshops, and of course, the Firebase booth at the Innovators Hive in the expo hall. If we met you there during the conference last week, thank you for stopping by!
We also announced a few product updates at Cloud Next. Read on to learn more about these features and catch up on the sessions we held
        </div>
        <div className={styles.devloper_details}>
            <div className={styles.img_bcg_circle1}>
                <img src={harshit_img} alt="" />
                <p>Harshit Parmar</p>
                <p id={styles.designation}>Student | Devloper | Software Engineer</p>

            </div>
            <div className={styles.img_bcg_circle2}>
            </div>

        </div>
        </div> 
      
    </div>
  )
}

export default About
