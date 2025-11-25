import { forwardRef, type ComponentPropsWithoutRef } from "react";


type genderObj ={
    label : string , 
    value : string ,
}


type GenderPropsType = Omit<ComponentPropsWithoutRef<"input">, "type"> &{
    label : string ,
    name : string,
    value : string ,
    genderOptions : genderObj[] ,
    error ?: string
}





const GenderInput = forwardRef<HTMLInputElement , GenderPropsType>(({ label,  name, value, genderOptions, error, ...genderProps } , ref) => {
    return <div>
        <label>{label}</label>
        <label>
            {
                genderOptions.map((item : genderObj) => <label key={item.label}><input ref={ref} name={name} checked={value == item.value} type="radio" value={item.value}  {...genderProps} />{item.label}</label>)
            }

        </label>
        {
            error && <p>{error}</p>
        }


    </div>
})

GenderInput.displayName="GenderInput";



export default GenderInput;