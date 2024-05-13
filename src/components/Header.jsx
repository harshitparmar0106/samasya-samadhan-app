import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
           <div className={styles.heading}>
            Samasya Samadhan
           </div>

           <div className={styles.navigation_btn}>

                 <a href="/">Home</a>
                <a href="/about">About</a>
                <button >
                    <a href="/login" id={styles.submit_btn}> Submit your problem</a>
                </button>
           </div>
    </div>
  )
}

export default Header
