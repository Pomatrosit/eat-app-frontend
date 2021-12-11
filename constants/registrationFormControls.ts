import { IRegistrationFormControl } from "../types/formControl";

export const REGISTRATION_FORM_CONTROLS: IRegistrationFormControl[] = [
  {
    id: 1,
    name: "name",
    label: "Имя",
    placeholder: "Введите ваше имя",
    type: "text",
  },
  {
    id: 2,
    name: "surname",
    label: "Фамилия",
    placeholder: "Введите вашу фамилию",
    type: "text",
  },
  {
    id: 3,
    name: "birthday",
    label: "Дата рождения",
    placeholder: "",
    type: "date",
  },
  {
    id: 4,
    name: "email",
    label: "Email",
    placeholder: "Example@email.com",
    type: "text",
  },
  {
    id: 5,
    name: "password",
    label: "Придумайте пароль",
    placeholder: "",
    type: "password",
  },
  {
    id: 6,
    name: "confirmedPassword",
    label: "Повторите пароль",
    placeholder: "",
    type: "password",
  },
];
