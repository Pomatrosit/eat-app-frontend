type name =
  | "firstName"
  | "lastName"
  | "birthDate"
  | "email"
  | "password"
  | "confirmedPassword"

export interface IFormControl {
  id: number
  name: name
  label: string
  placeholder: string
  type: string
}
