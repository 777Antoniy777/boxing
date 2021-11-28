import React from 'react';

export const SignIn = () => {
  return (
    <main className="main">
      <section className="main__login login">
        <form className="login__form" method="POST">
          <input type="text" value="test" aria-label="Введите имя пользователя" />
          <input type="email" aria-label="Введите email" />
        </form>
      </section>
    </main>
  );
};