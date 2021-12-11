import { FC, Dispatch, SetStateAction } from "react";
import classes from "./TextField.module.scss";
import Image from "next/image";

interface TextFieldProps {
  name: string;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  placeholder?: string;
  type?: string;
  margin?: string;
  label?: string;
  isError: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const TextField: FC<TextFieldProps> = ({
  name,
  value,
  setValue,
  margin = "0px",
  placeholder = "",
  label = "",
  type = "text",
  isError,
  isSuccess,
  errorMessage,
}) => {
  const inputClasses = [classes.input];

  if (isError) inputClasses.push(classes.error);
  if (isSuccess) inputClasses.push(classes.success);

  return (
    <div className={classes.textField} style={{ margin }}>
      {label && <p className={classes.label}>{label}</p>}

      <input
        type={type}
        className={inputClasses.join(" ")}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) =>
          setValue((prev: any) => ({
            ...prev,
            [e.target.name]: { ...[e.target.name], value: e.target.value },
          }))
        }
      />

      {isError && <p className={classes.errorMessage}>{errorMessage}</p>}

      {isError && (
        <div className={classes.errorIcon}>
          <Image src="/img/svg/errorIcon.svg" width={25} height={25} />
        </div>
      )}
    </div>
  );
};

export default TextField;
