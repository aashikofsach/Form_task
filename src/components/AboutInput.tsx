import { forwardRef, useId } from "react";
import { wordCount } from "../utils/stringUtils";





const AboutInput = forwardRef(({label , id ,  placeholder, rows , cols , error , value, ...inputProps}, ref)=>
{
    const generatedId = useId() ;

    const aboutId = id ?? generatedId ;

    return <div>
        <label htmlFor={aboutId}>{label}</label>
        <textarea name="" id={aboutId} {...inputProps} placeholder={placeholder} rows={rows} cols={cols} ref={ref}>{value}</textarea>
        {
            error && <p>{error}</p>
        }
        <p>The Word Length is : {wordCount(value)} </p>
    </div>
}
);

AboutInput.displayName = "AboutInput" ;

export default AboutInput ;
