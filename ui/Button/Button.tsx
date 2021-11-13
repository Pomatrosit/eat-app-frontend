import { FC } from "react"
import classes from "./Button.module.scss"

interface IButtonProps {
  onClick: () => void
  text: string
  margin?: string
  width?: string
}

const Button: FC<IButtonProps> = ({
  onClick,
  text,
  margin = "0px",
  width = "100%",
}) => {
  return (
    <div className={classes.button} onClick={onClick} style={{ margin, width }}>
      <span className={classes.text}>{text}</span>
    </div>
  )
}

export default Button
