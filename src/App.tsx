import { useState } from 'react'

function App() {

  const [formData , setFormdata] = useState({
    name : "",
    email : "",
    password : "",
    age : "",
    gender : "",
    country : "",
    checkbox : false

  })

  function handleSubmit(e)
  {
    e.preventDefault() ;

    if(!formData.gender)
    {
      alert("please select one gender ")
    }
    if(formData.country.length==0)
    {
      alert("please select the country")
    }
    console.log("submitted Form data", formData )

  }

  function handleChange(e)
  {
    // console.log(e.target.name , e.target.value , e.target.type , e.target.checked)

    const {name , value , type , checked} = e.target ;
    console.log(value.length)
   
    setFormdata({...formData , [name] : type === "checkbox" ? checked : value})

  }
  

  return (
    <div>
      <h1> Form Task </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Full name</label>
          <input type="text" name='name' value={formData.name} minLength={3} required onChange={(e) => {
            let value = e.target.value ;
            if(/^[A-Za-z\s]*$/.test(value) )
              handleChange(e)
          }}/>
        </div>
        <div>

          <label htmlFor="">Email Address</label>
          <input type="email" name='email' value={formData.email} onChange={(e) => handleChange(e)} />

        </div>
        <div>

          <label htmlFor="">Password</label>
          <input type="password" name='password' minLength={6} value={formData.password} onChange={(e) => handleChange(e)}/>
        </div>
        <div>

          <label htmlFor="">Age</label>
          <input type="number" name='age'  onChange={(e) => handleChange(e)}/>

        </div>

        <div>
          <label htmlFor="">Gender</label>
          <label htmlFor="">
         <label>  <input type="radio" name='gender' value="male" onChange={(e)=> handleChange(e)}/> Male</label>  
          <label> <input type="radio" name='gender' value='female' onChange={(e)=> handleChange(e)}/> Female</label>  
          <label> <input type="radio" name='gender' value='other' onChange={(e)=> handleChange(e)}/> Other</label>  
          </label>

        </div>

        <div>
          <label htmlFor="">Country</label>
          <select name="country" id="country" value={formData.country} onChange={(e)=> handleChange(e)}>
            <option value="none">--Select one country from list--</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
            <option value="usa">USA</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div>
          <label htmlFor="">About yourself</label>
          <textarea name="textarea" id="" placeholder='Enter About Yourself here' required rows={10} cols={200}></textarea>
        </div>

        <div>
          <label htmlFor="">Accept Terms and Conditions</label>
          <input type="checkbox" checked={formData.checkbox} name='checkbox' onChange={(e)=> handleChange(e)}/>
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>

  )
}

export default App
