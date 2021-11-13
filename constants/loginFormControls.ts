import { ILoginFormControl } from "../types/formControl"

export const LOGIN_FORM_CONTROLS: ILoginFormControl[] = [
  {
    id: 1,
    name: "email",
    label: "Email",
    placeholder: "Example@email.com",
    type: "text",
  },
  {
    id: 2,
    name: "password",
    label: "Пароль",
    placeholder: "",
    type: "password",
  },
]
