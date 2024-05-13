import { fireEvent } from '@testing-library/react';
import React from 'react'
import { useState } from 'react'
import style from '../SubmitProblem/Submitform.module.css'

const SubmitForm = () => {

    const [FormData, setFormData] = useState({firstname:"",lastname:"",
    email:"",contact_No:"",type_of_person:"Common man",Problem_heading:"",problem_type:"Others",Problem_description:""});

    function changeHandler(event){
        const{name,value,type} = event.target

        setFormData((prev)=>({...prev,[name]:value}))
    }

    function SubmitHandler(event){
        event.preventDefault();
        console.log(FormData);
    }



  return (
    <div className={style.home}>
        <div className={style.form_heading}>
             <p>Form for submitting problem Statement</p>
        </div>
        <div className={style.form_div}>
          <form className={style.form_home} onSubmit={SubmitHandler}>

                <label htmlFor="firstname">First Name</label>
                <input type="text"
                name="firstname"
                id='firstname'
                value={FormData.firstname}
                placeholder='Enter first name'
                onChange={changeHandler}
                />
                <br />
                <label htmlFor="lastname">Last Name</label>

                <input type="text"
                name="lastname"
                id='lastname'
                value={FormData.lastname}
                placeholder='Enter last name'
                onChange={changeHandler}
                />

                <br />
                <label htmlFor="email">E-mail</label>
                <input type="email"
                name="email"
                id='email'
                value={FormData.email}
                placeholder='abcd@email.com'
                onChange={changeHandler}
                />

                <br />
                <label htmlFor="contact_No">Contact Number</label>
                <input type="tel"
                name="contact_No"
                id='contact_No'
                pattern='[0-9]{10}'
                value={FormData.contact_No}
                placeholder='Enter contact number'
                onChange={changeHandler}
                />

                <br />
                <label htmlFor="type_of_person">Enter your field</label>
                <select 
                name="type_of_person"
                id="type_of_person"
                value={FormData.type_of_person}
                onChange={changeHandler}>

                <option>Industry Person</option>
                <option>Corporate man</option>
                <option>Student</option>
                <option>Organisation</option>
                <option>Common man</option>
                <option>Research & Developement team</option>
                </select>

                <br />
                <label htmlFor="problem_type">Select Problem Type</label>

                <select 
                name="problem_type"
                id="problem_type"
                value={FormData.problem_type}
                onChange={changeHandler}>

                <option>Software</option>
                <option>Hardware</option>
                <option>Others</option>

                </select>
                <br />
                <label htmlFor="Problem_heading">Problem Heading</label>
                <input type="text"
                name="Problem_heading"
                id='Problem_heading'
                value={FormData.Problem_heading}
                placeholder='Enter Problem Heading'
                onChange={changeHandler}
                />

                <br />
                <label htmlFor="Problem_description">Problem Description</label>
                <input type="text"
                name="Problem_description"
                id={style.Problem_description}
                value={FormData.Problem_description}
                placeholder='Describe the Problem statement'
                onChange={changeHandler}
                />

                <br />
                
                <button>Submit</button>

             </form>
      </div>

    </div>
  )
}

export default SubmitForm
