import { forwardRef } from "react";





const GenderInput = forwardRef(({label , type , name , genderOptions, ...genderProps}) =>
{
    return <div>
        <label>{label}</label>
        <label>
            {
                genderOptions.map(item => <label key={item}><input name={name} type="radio" {...genderProps}/>{item.toUpperCase()}</label>)
            }
            
        </label>


    </div>
})

GenderInput.displayName="GenderInput";

export default GenderInput ;