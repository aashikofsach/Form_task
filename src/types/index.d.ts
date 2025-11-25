
export interface UserFormData {
  name: string;
  email: string;
  password: string;
  age?:  string;
  gender: string;
  country: string;
  textarea: string ;
  checkbox: boolean;
}

export type inputEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement> 

