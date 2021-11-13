import { FC, useState } from "react"
import classes from "../../styles/common/Auth.module.scss"
import TextField from "../../ui/TextField/TextField"
import { IRegistrationFormState } from "../../types/registrationFormState"
import { registrationFormControls } from "../../constants/registrationFormControls"

const RegistrationForm: FC = () => {
  const [form, setForm] = useState<IRegistrationFormState>({
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    password: "",
    confirmedPassword: "",
  })

  const onRegistrationButtonClick = () => {
    console.log(form)
  }

  return (
    <div className={classes.form}>
      <h1 className={classes.title}>Eat App</h1>
      <h3 className={classes.subtitle}>Регистрация</h3>

      {registrationFormControls.map((formControl) => (
        <TextField
          key={formControl.id}
          name={formControl.name}
          label={formControl.label}
          placeholder={formControl.placeholder}
          type={formControl.type}
          margin='0 0 1.5rem 0'
          value={String(form[formControl.name])}
          setValue={setForm}
        />
      ))}
    </div>
  )
}

export default RegistrationForm
