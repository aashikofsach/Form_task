import { forwardRef, type ComponentPropsWithoutRef } from "react";

type TextInputProps = Omit<ComponentPropsWithoutRef<"input">, "type"> & {
    label: string,
    error?: string
}
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ label, error , ...inputProps }, ref) => {

        return <div>
            <label htmlFor="name">{label}</label>
            <input type="text" id="name" ref={ref} {...inputProps} />
            {
                error && <p>{error}</p>
            }

        </div>
    }
);

TextInput.displayName = "TextInput"

export default TextInput;
