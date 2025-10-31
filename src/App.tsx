import { useState } from 'react'

function App() {

  const [formData , setFormdata] = useState({
    name : "",
    email : "rik@gmail.com",
    password : "",
    age : ""

  })

  function handleSubmit(e)
  {
    e.preventDefault() ;
    console.log(formData)

  }

  function handleChange(e)
  {
    console.log("we trigger the handle chamge ")
    console.log(e.nativeEvent.data)
  }
  

  return (
    <div>
      <h1> Form Task </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Full name</label>
          <input type="text" name='name' value={formData.name} onChange={(e) => handleChange(e)}/>
        </div>
        <div>

          <label htmlFor="">Email Address</label>
          <input type="email" name='email' value={formData.email} onChange={(e) => handleChange(e)} />

        </div>
        <div>

          <label htmlFor="">Password</label>
          <input type="password" name='password' value={formData.password} onChange={(e) => handleChange(e)}/>
        </div>
        <div>

          <label htmlFor="">Age</label>
          <input type="number" name='age'  onChange={(e) => handleChange(e)}/>

        </div>

        <div>
          <label htmlFor="">Gender</label>
          <label htmlFor="">
            <input type="radio" name='gender' />
            <input type="radio" name='gender' />
            <input type="radio" name='gender' />
          </label>

        </div>

        <div>
          <label htmlFor="">Country</label>
          <select name="" id="">
            <option value="">India</option>
            <option value="">UK</option>
            <option value="">USA</option>
            <option value="">Others</option>
          </select>
        </div>

        <div>
          <label htmlFor="">About yourself</label>
          <textarea name="" id="" placeholder='Enter About Yourself here ' rows={10} cols={200}></textarea>
        </div>

        <div>
          <label htmlFor="">Accept Terms and Conditions</label>
          <input type="checkbox" />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>

  )
}

export default App
