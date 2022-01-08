import React, { useState } from 'react';
import { connect } from 'react-redux';
import { UserAsyncActions } from '../../store/reducers/user/user.actions';
import { useStyles } from './SignIn.styles';
import { Button } from '../../shared/components/Button/Button';
import { CounterActions } from '../../store/reducers/counter/counter.actions';
import {useStoreActions, useStoreState} from "../../store/store";

const SignIn = (props: any) => {
  // const { counter, setAuthorizationStatus, increaseCounter, decreaseCounter } = props;
  const styles = useStyles(props);

  // easy-peasy
  const todos = useStoreState((state) => state.todos);
  const addTodo = useStoreActions((actions) => actions.addTodo);
  const [value, setValue] = React.useState('');
  //

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

  const handleSubmitButtonClick = (evt: any) => {
    evt.preventDefault();

    // setAuthorizationStatus(loginValue, passwordValue);
  };

  // const handleIncreaseButtonClick = () => {
  //   increaseCounter();
  // };
  //
  // const handleDecreaseButtonClick = () => {
  //   decreaseCounter();
  // };

  return (
    <main className="main">
      <section className={`main__login ${styles.login}`}>
        <form className={styles.loginForm} method="POST">
          <input type="text" value={loginValue} aria-label="Введите имя пользователя" onChange={handleLoginChange} />
          <input type="password" value={passwordValue} aria-label="Введите пароль" onChange={handlePasswordChange} />

          <Button className={styles.loginSubmitButton} type="submit" onClick={handleSubmitButtonClick}>
            Войти
          </Button>
        </form>
      </section>

      <section className="main__counter counter">
        {/*<h2>*/}
        {/*  Счетчик: <span>{counter}</span>*/}
        {/*</h2>*/}

        {/*<div>*/}
        {/*  <button type="button" onClick={handleIncreaseButtonClick}>*/}
        {/*    Увеличить*/}
        {/*  </button>*/}
        {/*  <button type="button" onClick={handleDecreaseButtonClick}>*/}
        {/*    Уменьшить*/}
        {/*  </button>*/}
        {/*</div>*/}

        <ul>
          {todos.map((todo) => (
            <li>{todo.text}</li>
          ))}
        </ul>

        <div>
          <input value={value} onChange={(evt) => setValue(evt.target.value)} />
          <button onClick={() => addTodo({text: value, done: false})}>Add Todo</button>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => ({
  // counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  // setAuthorizationStatus: (login: string, password: string) => {
  //   dispatch(UserAsyncActions.setAuthorizationStatus(login, password));
  // },
  // increaseCounter: () => {
  //   dispatch(CounterActions.increaseCounter());
  // },
  // decreaseCounter: () => {
  //   dispatch(CounterActions.decreaseCounter());
  // },
});

// export const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);
export const SignInContainer = SignIn;
