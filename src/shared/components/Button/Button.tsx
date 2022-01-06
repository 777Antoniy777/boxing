import React from 'react';

export const Button = (props: any) => {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
};
