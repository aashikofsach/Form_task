import { forwardRef, type ComponentPropsWithoutRef } from "react";

// have to create custom typecsript for props coming and the type on which we use our ref 
type EmailInputProps = Omit<ComponentPropsWithoutRef<"input">, "type"> & {
    label: string,
    error?: string
}


const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(({ id, error, label, ...inputFields }, ref) => {


    return <div>
        <label htmlFor="email">{label}</label>
        <input ref={ref} type="email" id="email" {...inputFields} />
        {error && <p>{error}</p>}
    </div>

})

EmailInput.displayName = "EmailInput";

export default EmailInput;