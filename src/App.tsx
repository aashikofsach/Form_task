import React, { useState, useReducer, useRef } from 'react'

import type { UserFormData, inputEvent } from './types';
import { initialUserFormData } from "./constants/formDefaults"
import { isValidEmailAdd, isValidFullName } from './utils/regexUtils';
import { MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH, MIN_TEXT_AREA_LENGTH } from './constants/constValues';
import { wordCount } from './utils/stringUtils';

import Modal from './components/Modal';
import TextInput from './components/TextInput';
import EmailInput from './components/EmailInput';
import CountryInput from './components/CountryInput';
import AboutInput from './components/AboutInput';
import CheckedInput from './components/CheckedInput';
import GenderInput from './components/GenderInput';
import AgeInput from './components/AgeInput';




function App() {

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false)
  const [formData, setFormdata] = useState<UserFormData>(initialUserFormData);
  const [error, setError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [mailError, setMailError] = useState<string>("");
  const [passError, setPassError] = useState<string>("");
  const [radioError, setRadioError] = useState<string>("");
  const [countryError, setCountryError] = useState<string>("");
  const [checkBoxError, setCheckBoxError] = useState<string>("");


  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();
  const passRef = useRef();
  const AboutRef = useRef() ;


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    let errorFlag = false;
    e.preventDefault();


    if (formData.name.length < MIN_NAME_LENGTH) {
      setNameError("name length must be greater than 3")
      // nameRef.current.scrollIntoView({ behaviour: "smooth" })
      errorFlag = true;
    }

    if (!(isValidEmailAdd(formData.email))) {
      setMailError("Enter mail in correct format");
      // emailRef.current.scrollIntoView({ behaviour: "smooth" })

      errorFlag = true
    }

    if (formData.password.length < MIN_PASSWORD_LENGTH) {
      setPassError("password length is not correct")
      // passRef.current.scrollIntoView({ behaviour: "smooth" })

      errorFlag = true
    }
    if (formData.textarea.split(/\s+/).length < MIN_TEXT_AREA_LENGTH) {

      setError("Please enter more than 5 words ")
      errorFlag = true
    }
    if (formData.gender.length === 0) {
      setRadioError("please select radio button")
      errorFlag = true

    }
    if (formData.country.length == 0) {
      setCountryError("please select the country")
      errorFlag = true

    }
    if (formData.checkbox === false) {
      setCheckBoxError("please check all terms and conditions ")
      errorFlag = true
    }
    if (errorFlag) {

      setDisable(true)

      return
    }
    else {


      setSubmitted(true)

      setTimeout(() => {
        setFormdata(initialUserFormData)
        setSubmitted(false)

        setNameError("");
        setMailError("");
        setPassError("");
        setRadioError("");
        setCountryError("");
        setCountryError("");
        setCheckBoxError("");
        setError("");
      }, 3000)

    }
  }

  function handleChange(e: inputEvent) {

    setDisable(false)

    const { name, value, type, checked } = e.target;

    if (name === "gender" && checked) {
      setRadioError("")
    }
    if (name === "country" && type == "select-one") {
      setCountryError("")
    }
    if (name == "checkbox" && checked) {

      setCheckBoxError("")
    }
    const nextValue =
      name === "age" ? (value) : (type === "checkbox" ? checked : value);


    const nextFormData = { ...formData, [name]: nextValue };
    console.log(nextFormData)

    setFormdata((prevState) => {
      const updatedState = { ...prevState, ...nextFormData };

      return updatedState;
    });
    validateForm(nextFormData);
  }

  function validateForm(nextFormData: UserFormData) {

    const isFormValid =

      nextFormData.name.length >= MIN_NAME_LENGTH &&
      isValidEmailAdd(formData.email) &&
      nextFormData.password.length >= MIN_PASSWORD_LENGTH &&
      nextFormData.textarea.split(/\s+/).length >= MIN_TEXT_AREA_LENGTH &&
      nextFormData.gender &&
      nextFormData.country &&
      nextFormData.checkbox;




    setDisable(!isFormValid);
  }



  function isValidTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {

    let data = e.target.value;
    const words = wordCount(data);

    if (words < MIN_TEXT_AREA_LENGTH) {
      setError("Please enter more than 5 words ")
      // textRef.current.scrollIntoView({ behaviour: "smooth" })

      handleChange(e)

    }
    else {
      setError("");
      handleChange(e)
    }

  }

  function isvalidName(value: string) {
    if (value.length <= MIN_NAME_LENGTH) {
      setNameError("name length must be greater than 3")
    }
    else {
      setNameError("")


    }

  }

  function isValidEmail(value: string) {
    if (isValidEmailAdd(value)) {
      setMailError("");

    }
    else
      setMailError("Enter the mail in correct format")



  }

  function isPasswordValid(value: string) {
    if (value.length > MIN_PASSWORD_LENGTH) {
      setPassError("")
    }
    else {
      setPassError("password must be greater then length 6")
    }
  }

  const optionsData = [
    {
      label :"--Select a country from below--" , value : "none"
    },
    {
      label : "India" , value : "India"
    },
    {
      label : "UK" , value :"UK"
    },
    {
      label : "USA", value : "UK"
    },
    {
      label : "Others" , value : "Others"
    }
   
  ]

  const genderOptions = ["male" , "female" , "others"];



  return (
    <>
      <div>
        <h1> Form Task </h1>
        <form onSubmit={handleSubmit}>
          <TextInput
            ref={nameRef}
            label="Full name"
            name="name"
            type="text"
            value={formData.name}
            error={nameError}
            onChange={(e) => {
              const value = e.target.value;

              if (isValidFullName(value)) {
                isvalidName(value);  // your validation function
                handleChange(e);     // your existing handler
              }
            }}
          />
          {/* <div ref={emailRef}>

            <label htmlFor="">Email Address</label>
            <input type="email" name='email' value={formData.email} onChange={(e) => {
              handleChange(e)
              isValidEmail(e.target.value)
            }} />
            {mailError && <p>{mailError}</p>}

          </div> */}
          <EmailInput label="Email Address" ref={emailRef} name='email' value={formData.email} error={mailError} onChange={(e) => {
              handleChange(e)
              isValidEmail(e.target.value)
            }}  />
          
          <div ref={passRef}>

            <label htmlFor="">Password</label>
            <input type="password" name='password' value={formData.password} onChange={(e) => {

              isPasswordValid(e.target.value)
              handleChange(e)
            }} />
            {passError && <p>{passError}</p>}
          </div>
          <div>

            <label htmlFor="">Age</label>
            <input type="number" name='age' value={formData.age} onChange={(e) => handleChange(e)} />

          </div>

          <AgeInput label="Age" />

          <div>
            <label htmlFor="">Gender</label>
            <label htmlFor="">
              <label>  <input type="radio" name='gender' value="male" checked={formData.gender == "male"} onChange={(e) => handleChange(e)} /> Male</label>
              <label> <input type="radio" name='gender' value='female' checked={formData.gender == "female"} onChange={(e) => handleChange(e)} /> Female</label>
              <label> <input type="radio" name='gender' value='other' checked={formData.gender == "other"} onChange={(e) => handleChange(e)} /> Other</label>
            </label>
            {radioError && <p>{radioError}</p>}
          </div>

          <GenderInput label="Gender" type="radio" name="gender" onChange={(e) => handleChange(e)} genderOptions={genderOptions}/>

          {/* <div>
            <label htmlFor="">Country</label>
            <select name="country" id="country" value={formData.country} >
              <option value="none">--Select one country from list--</option>
              <option value="india">India</option>
              <option value="uk">UK</option>
              <option value="usa">USA</option>
              <option value="others">Others</option>
            </select>
            {countryError && <p>{countryError}</p>}
          </div> */}

          

            <CountryInput label="Country" value={formData.country} options={optionsData} error={countryError} onChange={(e) => handleChange(e)} />
          
          
          
          {/* <div ref={textRef}>
            <label htmlFor="">About yourself</label>
            <textarea name="textarea" id="" placeholder='Enter About Yourself here' rows={10} cols={200} value={formData.textarea} onChange={(e) => {
              isValidTextarea(e)


            }}></textarea>
            {error && <p>{error}</p>}
            <p>Word count is : {wordCount(formData.textarea)}</p>
          </div> */}

            <AboutInput label="About Yourself" error={error} placeholder="Enter About Yourself here" rows={10} cols={200} value={formData.textarea} ref={AboutRef} onChange={(e) => {
              isValidTextarea(e)
            }}/>

          <div>
            <label htmlFor="">Accept Terms and Conditions</label>
            <input type="checkbox" checked={formData.checkbox} name='checkbox'onChange={(e) => handleChange(e)}  />
            {checkBoxError && <p>{checkBoxError}</p>}
          </div>

          <CheckedInput label="Accept Terms and Conditions" checked={formData.checkbox} onChange={(e) => handleChange(e)} error={checkBoxError} />

          <button type='submit' disabled={disable}>Submit</button>
        </form>
        {submitted && <Modal><div className='modal-content'>

          <p>Form Submitted Successfully</p>
        </div></Modal>}
      </div>

    </>

  )
}


// function reducer(state , action)
// {
//   if(action.type==='inc')
//   {
//     return {
//       age : state.age +1 
//     }
//   }

// }



// function Counter()
// {

//   const [state , dispatch] = useReducer(reducer , {age : 0})
//   return <>

//   <button onClick={()=> dispatch({type : "inc"})}>Increment</button>
//   <p>The age is : {state.age}</p>


//   </>
// }

export default App
