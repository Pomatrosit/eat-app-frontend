export interface IRegistrationFormControl {
  id: number;
  name:
    | "firstName"
    | "lastName"
    | "birthDate"
    | "email"
    | "password"
    | "confirmedPassword";
  label: string;
  placeholder: string;
  type: string;
}

export interface ILoginFormControl {
  id: number;
  name: "email" | "password";
  label: string;
  placeholder: string;
  type: string;
}
