import { FC } from "react"
import classes from "../../styles/Auth.module.scss"
import TextField from "../../ui/TextField/TextField"

const RegistrationForm: FC = () => {
  return (
    <div className={classes.form}>
      <h1 className={classes.title}>Eat App</h1>
      <h3 className={classes.subtitle}>Регистрация</h3>
      <TextField />
    </div>
  )
}

export default RegistrationForm
