import { FC } from "react"
import classes from "./TextField.module.scss"

const TextField: FC = () => {
  return (
    <div className={classes.textField}>
      <input type='text' className={classes.input} />
    </div>
  )
}

export default TextField
