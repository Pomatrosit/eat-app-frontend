import { FC, useContext, useState } from "react";
import classes from "../../styles/common/Auth.module.scss";
import TextField from "../../ui/TextField/TextField";
import { REGISTRATION_FORM_CONTROLS } from "../../constants/registrationFormControls";
import { CommonCtx, ICommonContext } from "../../context/common";
import Button from "../../ui/Button/Button";
import Link from "next/link";
import { InputState } from "../../types/inputState";
import { initialInputState } from "../../constants/initialInputState";
import axios from "axios";

export interface IRegistrationFormState {
  name: InputState;
  surname: InputState;
  birthday: InputState;
  email: InputState;
  password: InputState;
  confirmedPassword: InputState;
}

const RegistrationForm: FC = () => {
  const [form, setForm] = useState<IRegistrationFormState>({
    name: initialInputState,
    surname: initialInputState,
    birthday: initialInputState,
    email: initialInputState,
    password: initialInputState,
    confirmedPassword: initialInputState,
  });

  const onRegistrationButtonClick = () => {
    const data = {
      name: form.name.value,
      surname: form.surname.value,
      birthday: form.birthday.value,
      email: form.email.value,
      password: form.password.value,
    };

    console.log(data);

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/registration`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { appName } = useContext<ICommonContext>(CommonCtx);

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
          margin="0 0 1.5rem 0"
          value={String(form[formControl.name].value)}
          setValue={setForm}
          isError={form[formControl.name].isError}
          isSuccess={form[formControl.name].isSuccess}
          errorMessage={form[formControl.name].errorMessage}
        />
      ))}

      <Button
        text="Зарегистрироваться"
        onClick={onRegistrationButtonClick}
        margin="4rem auto 2rem auto"
        width="25rem"
      />

      <div className={classes.ctaText}>
        У вас уже есть аккаунт?{" "}
        <Link href="/login">
          <a>
            <span className={classes.ctaText__inner}>Войдите</span>{" "}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
