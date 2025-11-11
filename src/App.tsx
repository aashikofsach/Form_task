import React, { useEffect, useState } from 'react'

type inputEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>

interface UserFormData {
  name: string;
  email: string;
  password: string;
  age?: number;
  gender: string;
  country: string;
  textarea: string;
  checkbox: boolean;
}

function App() {


  // const formref = useRef()
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false)
  const [formData, setFormdata] = useState<UserFormData>({
    name: "",
    email: "",
    password: "",
    age: undefined,
    gender: "",
    country: "",
    textarea: "",
    checkbox: false

  });
  const [error, setError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [mailError, setMailError] = useState<string>("");
  const [passError, setPassError] = useState<string>("");
  const [radioError, setRadioError] = useState<string>("");
  const [countryError, setCountryError] = useState<string>("");
  const [checkBoxError, setCheckBoxError] = useState<string>("");


  // const [form]

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    let errorFlag = false;
    e.preventDefault();
    

    if (formData.name.length < 3) {
      setNameError("name length must be greater than 3")
      errorFlag = true;
    }

    if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))) {
      setMailError("Enter mail in correct format");
      errorFlag = true
    }

    if (formData.password.length < 6) {
      setPassError("password length is not correct")
      errorFlag = true
    }

   
    if (formData.textarea.split(/\s+/).length < 5) {
      
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
    // else {
    //   setCheckBoxError("")
    // }




    if (errorFlag) {
      console.log(error)
      setDisable(true)
      console.log("here we have to return")
      return
    }
    else
    {

    console.log(formData)
    setSubmitted(true)

    setTimeout(() => {
      setFormdata({
        name: "",
        email: "",
        password: "",
        age: undefined,
        gender: "",
        country: "",
        textarea: "",
        checkbox: false

      })
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
    console.log(e.target.name, e.target.value, e.target.type, e.target.checked)

    const { name, value, type, checked } = e.target;
    // console.log(value.length);

    // let btnflag = 

    if (name === "gender" && checked) {
      setRadioError("")
    }
    if (name === "country" && type == "select-one") {
      setCountryError("")
    }
    if (name == "checkbox" && checked) {
      console.log("line 159 enering or bot ")
      setCheckBoxError("")
    }

    console.log(radioError , "line numver is 161")

    console.log(checkBoxError, "line number is 162")

   const nextValue =
    name === "age" ? Number(value) : (type === "checkbox" ? checked : value);

      const nextFormData = { ...formData, [name]: nextValue };

     setFormdata((prevState) => {
  const updatedState = { ...prevState, ...nextFormData };
  console.log(updatedState);  // Log the updated state here
  return updatedState;
});

console.log(nextFormData.name.length, "this is line 176")
console.log(formData.name.length)
      console.log(formData , "line number 174 ")

    validateForm(nextFormData);
  }

  function validateForm(nextFormData :UserFormData) {
  // Check if any field has an error
  const isFormValid =
    // !nameError &&
    // !mailError &&
    // !passError &&
    // !radioError &&
    // !countryError &&
    // !checkBoxError &&
    nextFormData.name.length >= 3 &&
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(nextFormData.email) &&
    nextFormData.password.length >= 6 &&
    nextFormData.textarea.split(/\s+/).length >= 5 &&
    nextFormData.gender &&
    nextFormData.country &&
    nextFormData.checkbox;

    console.log(isFormValid, "888888888888")

  // Enable or disable submit button based on validation
    setDisable(!isFormValid);
}


  function wordCount(str: string) {
    return str.trim().split(/\s+/).length;

  }

  function isValidTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {

    let data = e.target.value;
    const words = data.split(/\s+/).length;
    // const characters = data.length;

    // console.log(words)

    if (words < 5) {
      setError("Please enter more than 5 words ")
      handleChange(e)

    }
    else {
      setError("");
      handleChange(e)
    }
    // if(characters < 20)
    //   setError("Please enter more 20 characters ")

  }

  function isvalidName(value: string) {
    if (value.length <= 3) {
      setNameError("name length must be greater than 3")
      // setDisable(true)
    
    }
    else {
      setNameError("")
      // setDisable(false)

    }

  }

  function isValidEmail(value: string) {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      setMailError("");

    }
    else
      setMailError("Enter the mail in correct format")



  }

  function isPasswordValid(value: string) {
    if (value.length > 6) {
      setPassError("")
    }
    else {
      setPassError("password must be greater then length 6")
    }
  }


  return (
    <div>
      <h1> Form Task </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Full name</label>
          <input type="text" name='name' value={formData.name} onChange={(e) => {
            let value = e.target.value;
            if (/^[A-Za-z\s]*$/.test(value)) {
              isvalidName(e.target.value)
              handleChange(e)
            }
          }} />
          {nameError && <p>{nameError}</p>}
        </div>
        <div>

          <label htmlFor="">Email Address</label>
          <input type="email" name='email' value={formData.email} onChange={(e) => {
            handleChange(e)
            isValidEmail(e.target.value)
          }} />
          {mailError && <p>{mailError}</p>}

        </div>
        <div>

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

        <div>
          <label htmlFor="">Gender</label>
          <label htmlFor="">
            <label>  <input type="radio" name='gender' value="male" checked={formData.gender == "male"} onChange={(e) => handleChange(e)} /> Male</label>
            <label> <input type="radio" name='gender' value='female' checked={formData.gender == "female"} onChange={(e) => handleChange(e)} /> Female</label>
            <label> <input type="radio" name='gender' value='other' checked={formData.gender == "other"} onChange={(e) => handleChange(e)} /> Other</label>
          </label>
          {radioError && <p>{radioError}</p>}
        </div>

        <div>
          <label htmlFor="">Country</label>
          <select name="country" id="country" value={formData.country} onChange={(e) => handleChange(e)}>
            <option value="none">--Select one country from list--</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
            <option value="usa">USA</option>
            <option value="others">Others</option>
          </select>
          {countryError && <p>{countryError}</p>}
        </div>

        <div>
          <label htmlFor="">About yourself</label>
          <textarea name="textarea" id="" placeholder='Enter About Yourself here' rows={10} cols={200} value={formData.textarea} onChange={(e) => {
            isValidTextarea(e)


          }}></textarea>
          {error && <p>{error}</p>}
          <p>Word count is : {wordCount(formData.textarea)}</p>
        </div>

        <div>
          <label htmlFor="">Accept Terms and Conditions</label>
          <input type="checkbox" checked={formData.checkbox} name='checkbox' onChange={(e) => handleChange(e)} />
          {checkBoxError && <p>{checkBoxError}</p>}
        </div>

        <button type='submit' disabled={disable}>Submit</button>
      </form>
      {submitted && <p>Form Submitted successfully </p>}
    </div>

  )
}

export default App
