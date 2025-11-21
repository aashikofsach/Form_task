import { forwardRef } from "react";


const AgeInput = forwardRef(({label}) =>
{

    return <div>
        <label htmlFor="age">{label}</label>
        <input type="number" id="age" />

    </div>
}

)

AgeInput.displayName="AgeInput";

export default AgeInput;