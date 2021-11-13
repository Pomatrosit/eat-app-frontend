import { FC } from "react"
import classes from "../../styles/Auth.module.scss"

const LoginForm: FC = () => {
  return (
    <div className={classes.form}>
      <h1 className={classes.title}>Eat App</h1>
      <h3 className={classes.subtitle}>Авторизация</h3>
    </div>
  )
}

export default LoginForm
