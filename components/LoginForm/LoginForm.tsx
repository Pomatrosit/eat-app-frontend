import { FC } from "react"
import classes from "./LoginForm.module.scss"
import Paper from "../../ui/Paper/Paper"

const LoginForm: FC = () => {
  return (
    <div className={classes.loginForm}>
      <h1 className={classes.title}>Eat App</h1>
      <h3 className={classes.subtitle}>Авторизация</h3>
    </div>
  )
}

export default LoginForm
