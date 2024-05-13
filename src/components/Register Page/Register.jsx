import React from 'react'
import login_img from '../Login&signup/Illustration.png';
import styles from '../Register Page/register.module.css'
import ellipse from '../Ellipse 38.png'




const Register = () => {
  return (
    <div>

      <div className={styles.home}>
            <div className={styles.login_img}>
                <img src={login_img} alt="" />
            </div>
            <div className={styles.register_credentials}>
                <p id={styles.register}>Register</p>

                <div>
                <legend>Name</legend>
                <input type="text" placeholder='enter email address' />
                <legend>E-mail</legend>
                <input type="email" name="email" id="email" placeholder='enter email' />
                <legend>Contact No.</legend>
                <input type="tel" name="number" id="number" placeholder='enter contact number' pattern='[0-9]{10}'required />
                </div>
                <button>Register</button>
            </div>
      </div>
            <img src={ellipse} id={styles.ellipse}/>
    </div>
  )
}

export default Register
