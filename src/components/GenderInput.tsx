import { forwardRef } from "react";



const GenderInput = forwardRef(({label , type , name , genderOptions, ...genderProps}) =>
{
    return <div>
        <label htmlFor=""></label>
        <label htmlFor="">
            {
                genderOptions.map(item => <label><input type="radio"/>{item.toUpperCase()}</label>)
            }
            
        </label>


    </div>
})

GenderInput.displayName="GenderInput";

export default GenderInput ;