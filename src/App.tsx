import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function formControl(data : any)
  {

    console.log(data)
    console.log(data.get("name"))

  }

  return (
    <div>
      <h1> Form Task </h1>
      <form action={formControl}>
       <div>
         <label htmlFor="">Full name</label>
        <input type="text" name='name'/>
       </div>
       <div>

        <label htmlFor="">Email Address</label>
        <input type="email" />

       </div>
<div>

        <label htmlFor="">Password</label>
        <input type="password" />
</div>
    <div>

        <label htmlFor="">Age</label>
        <input type="number" />

    </div>
     
     <div>
         <label htmlFor="">gender</label>
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
     </div>

     <div>
      <select name="" id="">
        <option value="">Values</option>
        <option value="">Values</option>
        <option value="">Values</option>
        <option value="">Values</option>
        <option value="">Values</option>
      </select>
     </div>

     <div>
      <label htmlFor="">About yourself</label>
      <textarea name="" id="" placeholder='Enter About Yourself here ' rows={10} cols={20}></textarea>
     </div>

     <div>
      <label htmlFor="">CheckBox</label>
      <input type="checkbox" />
     </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
   
  )
}

export default App
