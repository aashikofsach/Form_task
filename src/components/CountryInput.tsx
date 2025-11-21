import { forwardRef, useId, type ComponentPropsWithoutRef, type HTMLAttributes } from "react";

// type CountrySelectProps = Omit<ComponentPropsWithoutRef<"input"> , "type"> & {

// }


interface CountrySelectProps extends HTMLAttributes<HTMLSelectElement> {
  label: string,
  error?: string,
  options: []
  id?: string
}



const CountryInput = forwardRef<HTMLSelectElement, CountrySelectProps>((props, ref) => {
  const { label, options, error, id, ...otherProps } = props

  const generatedId = useId();

  const selectId = id ?? generatedId;

  return <div>
    <label htmlFor={selectId}>{label}</label>
    <select name="" id={selectId} {...otherProps} ref={ref}>
      {
        options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)
      }
    </select>
    {
      error && <p>{error}</p>
    }

  </div>

})

CountryInput.displayName = "CountryInput";

export default CountryInput;