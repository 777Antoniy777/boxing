import { createUseStyles } from 'react-jss';

type RuleNames = 'login' | 'loginForm' | 'loginSubmitButton';

interface ButtonProps {
  color?: string;
}

export const useStyles = createUseStyles<RuleNames, ButtonProps>({
  login: {
    '& input': {
      marginBottom: '20px',

      '&:nth-child(1)': {
        marginBottom: '20px',
      }
    },
  },

  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    padding: '20px',
    backgroundColor: (props) => props?.color
      ? props.color
      : 'lightblue',
  },

  loginSubmitButton: {
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      display: 'block',
      width: '50px',
      height: '50px',
      backgroundColor: 'pink',
    },
  },
});