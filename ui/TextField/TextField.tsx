import { FC, Dispatch, SetStateAction } from "react"
import classes from "./TextField.module.scss"
import { IRegistrationFormState } from "../../types/registrationFormState"

interface TextFieldProps {
  name: string
  value: any
  setValue: Dispatch<SetStateAction<any>>
  placeholder?: string
  type?: string
  margin?: string
  label?: string
}

const TextField: FC<TextFieldProps> = ({
  name,
  value,
  setValue,
  margin = "0px",
  placeholder = "",
  label = "",
  type = "text",
}) => {
  return (
    <div className={classes.textField} style={{ margin }}>
      {label && <p className={classes.label}>{label}</p>}
      <input
        type={type}
        className={classes.input}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) =>
          setValue((prev: IRegistrationFormState) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </div>
  )
}

export default TextField
