import { forwardRef, type ComponentPropsWithoutRef } from "react";

type AgeInputPropTypes = Omit<ComponentPropsWithoutRef<"input">, "type"> &
{
    label: string
}


const AgeInput = forwardRef<HTMLInputElement, AgeInputPropTypes>(({ label }, ref) => {

    return <div>
        <label htmlFor="age">{label}</label>
        <input type="number" id="age" ref={ref} />

    </div>
}

)

AgeInput.displayName = "AgeInput";

export default AgeInput;