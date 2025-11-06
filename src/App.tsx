import { useState } from 'react'

function App() {

const [disable , setDisable] = useState(false)
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    country: "",
    textarea: "",
    checkbox: false

  });
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [mailError, setMailError] = useState("");
  const [passError, setPassError] = useState("");
  const [radioError, setRadioError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [checkBoxError, setCheckBoxError] = useState("");
  // const [form]

  function handleSubmit(e) {
   
    e.preventDefault();
    // console.log("trigger")

    if (formData.gender.length === 0) {
      setRadioError("please select radio button")
      
      return
    }
    else {
      setRadioError("")
    }
    // setRadioError("")
    if (formData.country.length == 0) {
      setCountryError("please select the country")
      return
    }
    else {
      setCountryError("")
    }


    if (formData.checkbox === false) {
      setCheckBoxError("please check all terms and conditions ")
      return

    }
    else {
      setCheckBoxError("")
    }

    console.log("submitted Form data", formData)

  }

  function handleChange(e) {
    console.log(e.target.name, e.target.value, e.target.type, e.target.checked)

    const { name, value, type, checked } = e.target;
    console.log(value.length)

    setFormdata({ ...formData, [name]: type === "checkbox" ? checked : value })

  }

  function wordCount(str) {
    return str.split(/\s+/).length;

  }

  function isValidTextarea(e) {

    let data = e.target.value ;
    const words = data.split(/\s+/).length;
    // const characters = data.length;

    // console.log(words)

    if (words < 5) {
      setError("Please enter more than 5 words ")
      handleChange(e)


    }
    else
    {
      setError("");
      handleChange(e)
    }
    // if(characters < 20)
    //   setError("Please enter more 20 characters ")

  }

  function isvalidName(value) {
    if (value.length <= 3)
{
      setNameError("name length must be greater than 3")
      setDisable(true)
      return
}
    else { setNameError("")
setDisable(false)

     }

  }

  function isValidEmail(value) {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      setMailError("");

    }
    else
      setMailError("Enter the mail in correct format")



  }

  function isPasswordValid(value) {
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
          <input type="text" name='name' required minLength={3} value={formData.name} onChange={(e) => {
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
          <input type="email" name='email' required value={formData.email} onChange={(e) => {
            handleChange(e)
            isValidEmail(e.target.value)
          }} />
          {mailError && <p>{mailError}</p>}

        </div>
        <div>

          <label htmlFor="">Password</label>
          <input type="password" name='password' minLength={6} required value={formData.password} onChange={(e) => {

            isPasswordValid(e.target.value)
            handleChange(e)
          }} />
          {passError && <p>{passError}</p>}
        </div>
        <div>

          <label htmlFor="">Age</label>
          <input type="number" name='age' required onChange={(e) => handleChange(e)} />

        </div>

        <div>
          <label htmlFor="">Gender</label>
          <label htmlFor="">
            <label>  <input type="radio" name='gender' value="male" onChange={(e) => handleChange(e)} /> Male</label>
            <label> <input type="radio" name='gender' value='female' onChange={(e) => handleChange(e)} /> Female</label>
            <label> <input type="radio" name='gender' value='other' onChange={(e) => handleChange(e)} /> Other</label>
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
          <textarea name="textarea" id="" placeholder='Enter About Yourself here' required rows={10} cols={200} value={formData.textarea} onChange={(e) => {
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
    </div>

  )
}

export default App
