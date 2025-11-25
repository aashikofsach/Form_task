import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { wordCount } from "../utils/stringUtils";



type AboutInputTypeProps = ComponentPropsWithoutRef<"textarea"> & {
    label : string,
    error ? : string
}



const AboutInput = forwardRef<HTMLTextAreaElement , AboutInputTypeProps >(({label , id , rows , cols , error , value, name, ...inputProps}, ref)=>
{
    

    return <div>
        <label htmlFor='about'>{label}</label>
        <textarea name={name} id="about"  {...inputProps} rows={rows} cols={cols} ref={ref}>{value}</textarea>
        {
            error && <p>{error}</p>
        }
        <p>The Word Length is : {wordCount(value as string)} </p>
    </div>
}
);

AboutInput.displayName = "AboutInput" ;

export default AboutInput ;
