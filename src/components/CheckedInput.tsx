import { forwardRef, useId } from "react";



const CheckedInput = forwardRef(({label , id , checked, error ,  ...CheckedInput}) =>
{
    const generatedId = useId() ;

    const checkId = id ?? generatedId ;


    return <div>
        <label htmlFor={checkId}>{label}</label>
        <input type="checkbox" checked={checked} {...CheckedInput} id={checkId} />
        {
            error && <p>{error}</p>
        }
    </div>
})
CheckedInput.displayName = "CheckedInput" ;

export default CheckedInput ;