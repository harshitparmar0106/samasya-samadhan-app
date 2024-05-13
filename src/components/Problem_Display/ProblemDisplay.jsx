import React from 'react'
import styles from '../Problem_Display/problemDisplay.module.css'

const ProblemDisplay = () => {
  return (
    <div className={styles.home}>
        <div>
            <span>#2df345</span>
            <p id={styles.problem_heading}>Title of the post Title of the post Title of the post</p>
            <p id={styles.date}>25 Nov. 2023</p>
        </div>  
        <div className={styles.publisher_details}>
            <p>Harshit Parmar</p>
            <p>Hardware</p>
        </div>

        <div  className={styles.content_container}>
        <div id={styles.problem_description}>

            We also announced a few product updates at Cloud Next. Read on to learn more about these features and catch up on the sessions we held.

            Cloud Next ‘24 wrapped up last week and we were happy to participate to share how you can use Firebase and Google Cloud to build and run modern AI-enabled apps with speed, quality, and safety. We had fun connecting with many of you across over 20 different Firebase sessions, lightning talks, demos, workshops, and of course, the Firebase booth at the Innovators Hive in the expo hall. If we met you there during the conference last week, thank you for stopping by!
            We also announced a few product updates at Cloud Next. Read on to learn more about these features and catch up on the sessions we held.
            Cloud Next ‘24 wrapped up last week and we were happy to participate to share how you can use Firebase and Google Cloud to build and run modern AI-enabled apps with speed, quality, and safety. We had fun connecting with many of you across over 20 different Firebase sessions, lightning talks, demos, workshops, and of course, the Firebase booth at the Innovators Hive in the expo hall. If we met you there during the conference last week, thank you for stopping by!
        </div>
            
            <div className={styles.contact_card}>
            <p>Link: https://youtube.com/video?id=asdugahsdsd</p>
            <button>Connect to Publisher</button>
                
            </div>
        </div>
    </div>
  )
}

export default ProblemDisplay
