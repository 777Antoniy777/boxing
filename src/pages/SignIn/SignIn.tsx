import React, { useState } from 'react';
import { connect } from 'react-redux';
import { UserAsyncActions } from '../../store/reducers/user/user.actions';
import { useStyles } from './SignIn.styles';
import {Button} from "../../shared/components/Button/Button";

const SignIn = (props: any) => {
  const { setAuthorizationStatus } = props;
  const styles = useStyles(props);

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('12345');

  const handleLoginChange = (evt: any) => {
    const target = evt.target;
    const value = target.value;

    setLoginValue(value);
  };

  const handlePasswordChange = (evt: any) => {
    const target = evt.target;
    const value = target.value;

    setPasswordValue(value);
  };

  const handleButtonClick = (evt: any) => {
    evt.preventDefault();

    setAuthorizationStatus(loginValue, passwordValue);
  };

  return (
    <main className="main">
      <section className={`main__login ${styles.login}`}>
        <form className={styles.loginForm} method="POST">
          <input type="text" value={loginValue} aria-label="Введите имя пользователя" onChange={handleLoginChange} />
          <input type="password" value={passwordValue} aria-label="Введите пароль" onChange={handlePasswordChange} />

          <Button className={styles.loginSubmitButton} type="submit" onClick={handleButtonClick}>Войти</Button>
        </form>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setAuthorizationStatus: (login: string, password: string) => {
    dispatch(UserAsyncActions.setAuthorizationStatus(login, password));
  },
});

export const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);
