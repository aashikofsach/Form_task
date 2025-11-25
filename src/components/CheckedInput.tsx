import { forwardRef, type ComponentPropsWithoutRef } from "react";


type checkInputProps = Omit<ComponentPropsWithoutRef<"input">, "type"> &
{
    label: string,
    error?: string

}


const CheckedInput = forwardRef<HTMLInputElement, checkInputProps>(({ label,  error, ...CheckedInput }, ref) => {




    return <div>
        <label htmlFor="checkbox">{label}</label>
        <input type="checkbox" id="checkbox"  {...CheckedInput} ref={ref} />
        {
            error && <p>{error}</p>
        }
    </div>
})
CheckedInput.displayName = "CheckedInput";

export default CheckedInput;