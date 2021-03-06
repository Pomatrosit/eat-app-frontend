import { FC, useContext, useState } from "react"
import { CommonCtx, ICommonContext } from "../../context/common"
import Link from "next/link"
import { LOGIN_FORM_CONTROLS } from "../../constants/loginFormControls"
import TextField from "../../ui/TextField/TextField"
import classes from "../../styles/common/Auth.module.scss"
import Button from "../../ui/Button/Button"

export interface ILoginFormState {
  email: string
  password: string
}

const LoginForm: FC = () => {
  const { appName } = useContext<ICommonContext>(CommonCtx)

  const [form, setForm] = useState<ILoginFormState>({
    email: "",
    password: "",
  })

  const onLoginButtonClick = () => {
    console.log(form)
  }

  return (
    <div className={classes.form}>
      <h1 className={classes.title}>{appName}</h1>
      <h3 className={classes.subtitle}>Авторизация</h3>

      {LOGIN_FORM_CONTROLS.map((formControl) => (
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
        text='Войти'
        onClick={onLoginButtonClick}
        margin='4rem auto 2rem auto'
        width='25rem'
      />

      <div className={classes.ctaText}>
        У вас еще нет аккаунта?{" "}
        <Link href='/registration'>
          <a>
            <span className={classes.ctaText__inner}>Зарегистрируйтесь</span>{" "}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default LoginForm
