
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const FULLNAME_REGEX = /^[A-Za-z\s]*$/;

export const isValidEmailAdd = (email : string):boolean => EMAIL_REGEX.test(email);
export const isValidFullName = (name : string): boolean => FULLNAME_REGEX.test(name)