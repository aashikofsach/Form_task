import { forwardRef, type ComponentPropsWithoutRef } from "react";


type PasswordInputProps = Omit<ComponentPropsWithoutRef<"input">, "type"> &
{
    label: string,
    error?: string
}


const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ label, error, ...otherProps }, ref) => {
    return <div>
        <label htmlFor="password">{label}</label>
        <input ref={ref} type="password" id="password" {...otherProps} />
        {
            error && <p>{error}</p>
        }
    </div>
})

PasswordInput.displayName = "PasswordInput"

export default PasswordInput;