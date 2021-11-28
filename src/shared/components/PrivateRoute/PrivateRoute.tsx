import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = (props) => {
  const { path, authorizationStatus, condRedirect, linkRedirect, render } = props;

  return (
    <Route
      path={path}
      render={(props) => (authorizationStatus === condRedirect ? render({...props}) : <Redirect to={linkRedirect} />)}
    />
  );
};
