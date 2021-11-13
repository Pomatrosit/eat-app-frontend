import { FC, useContext, useState } from "react"
import classes from "../../styles/common/Auth.module.scss"
import TextField from "../../ui/TextField/TextField"
import { REGISTRATION_FORM_CONTROLS } from "../../constants/registrationFormControls"
import { CommonCtx, ICommonContext } from "../../context/common"
import Button from "../../ui/Button/Button"
import Link from "next/link"

export interface IRegistrationFormState {
  firstName: string
  lastName: string
  birthDate: string
  email: string
  password: string
  confirmedPassword: string
}

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

  const { appName } = useContext<ICommonContext>(CommonCtx)

  return (
    <div className={classes.form}>
      <h1 className={classes.title}>{appName}</h1>
      <h3 className={classes.subtitle}>Регистрация</h3>

      {REGISTRATION_FORM_CONTROLS.map((formControl) => (
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

      <Button
        text='Зарегистрироваться'
        onClick={onRegistrationButtonClick}
        margin='4rem auto 2rem auto'
        width='25rem'
      />

      <div className={classes.ctaText}>
        У вас уже есть аккаунт?{" "}
        <Link href='/login'>
          <a>
            <span className={classes.ctaText__inner}>Войдите</span>{" "}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default RegistrationForm
