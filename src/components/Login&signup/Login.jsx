import React from 'react'
import login_img from '../Login&signup/Illustration.png';
import styles from '../Login&signup/login.module.css'
import ellipse from '../Ellipse 38.png'


const Login = () => {
  return (
    <div>
      <div className={styles.home}>
            <div className={styles.login_img}>
                <img src={login_img} alt="" />
            </div>
            <div className={styles.login_credentials}>
                <p id={styles.login}>Login</p>

                <div>
                <legend>Email</legend>
                <input type="text" placeholder='enter email address' />
                <legend>Password</legend>
                <input type="password" name="password" id="password" placeholder='enter password' />
                </div>
                <button>Login</button>
                <p id={styles.or}>or</p>
                <p id={styles.register}>Don't have an account?<span>Register</span></p>
            </div>
            <img src={ellipse} id={styles.ellipse}/>

      </div>
    </div>
  )
}

export default Login
