import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { SignInContainer } from './pages/SignIn/SignIn';
import { PrivateRoute } from './shared/components/PrivateRoute/PrivateRoute';
import { Main } from './pages/Main/Main';
import { RouteEnum } from './shared/enums/route';

const isAuth = 'no_auth';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          path={RouteEnum.Login}
          authorizationStatus={isAuth}
          condRedirect={'no_auth'}
          linkRedirect={RouteEnum.Main}
          render={(props: any) => <SignInContainer {...props} />}
        />

        <PrivateRoute
          path={RouteEnum.Main}
          authorizationStatus={isAuth}
          condRedirect={'auth'}
          linkRedirect={RouteEnum.Login}
          render={(props: any) => <Main {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};
