import { forwardRef, type ComponentPropsWithoutRef, type HTMLAttributes } from "react";

// type CountrySelectProps = Omit<ComponentPropsWithoutRef<"input"> , "type"> & {

// }

type obj = {
  label : string , 
  value : string 
}


// interface CountrySelectProps extends HTMLAttributes<HTMLSelectElement> {
//   label: string,
//   error?: string,
//   options: [obj, obj, obj , obj],
//   name : string,
//   value : string

// }

type CountrySelectProps = ComponentPropsWithoutRef<"select"> & {
  label: string,
  error?: string,
  options: obj[]
}





const CountryInput = forwardRef<HTMLSelectElement, CountrySelectProps>((props, ref) => {
  const { label, options, error,...otherProps } = props



  return <div>
    <label htmlFor="selectedId">{label}</label>
    <select id="selectedId" {...otherProps} ref={ref}>
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