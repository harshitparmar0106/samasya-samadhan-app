import React from 'react'
import styles from '../DashBoard/dashboard.module.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
const Dashboard = () => {
  return (
    <div className={styles.home}>
        <div className={styles.banner}>
            <div className={styles.icon}>
            <IoIosArrowBack/>
            <IoIosArrowForward />
            </div>
        </div>
        <div className={styles.search_section}>
            <p>Search Your Problem </p>
            <FiSearch />

        </div>
        <div className={styles.filters}>
            <div className={styles.category}>
              

                <select>
                <input type="text" name="category" id="category" placeholder='Search by category' />
                <option>Software</option>
                <option>Hardware</option>
                <option>Others</option>

                </select>
            </div >
            <div className={styles.date}>
            <input type="month" name="date" id="date" placeholder='Search by date' />

            </div>
            <div className={styles.fileds}>
            <select 
                name="type_of_person"
                id="type_of_person">

                <option>Industry Person</option>
                <option>Corporate man</option>
                <option>Student</option>
                <option>Organisation</option>
                <option>Common man</option>
                <option>Research & Developement team</option>
                </select>
            </div>
        </div>

        <div className={styles.problem_table}>
            <div className={styles.row}>
                <div id={styles.serial_no}> Sr no.</div>
                <div id={styles.heading}> Problem Heading</div>
                <div id={styles.description}> Problem Description</div>
            </div>
            <div className={styles.row}>
                <div id={styles.serial_no}> Sr no.</div>
                <div id={styles.heading}> Problem Heading</div>
                <div id={styles.description}> Problem Description</div>
            </div>
            <div className={styles.row}>
                <div id={styles.serial_no}> Sr no.</div>
                <div id={styles.heading}> Problem Heading</div>
                <div id={styles.description}> Problem Description</div>
            </div>

        </div>
      
    </div>
  )
}

export default Dashboard
