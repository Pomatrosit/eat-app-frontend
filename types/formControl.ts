export interface IRegistrationFormControl {
  id: number;
  name:
    | "name"
    | "surname"
    | "birthday"
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
