// Crucial Imports
import { useRef } from 'react';
import { errorLoginToast, successLoginToast } from '../../common/Toast/toast';
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();

// Responsive UI Essentials
export const labelElement = useRef() as React.MutableRefObject<HTMLInputElement>;
export const passwordElement = useRef() as React.MutableRefObject<HTMLInputElement>;
export const inputWrapper = useRef() as React.MutableRefObject<HTMLDivElement>;
export const passwordWrapper = useRef() as React.MutableRefObject<HTMLDivElement>;

export const addLabelFocus = () => {
  inputWrapper.current.classList.add('focus');
};
export const remveLabelFocus = () => {
  inputWrapper.current.classList.remove('focus');
};
export const addPasswordFocus = () => {
  passwordWrapper.current.classList.add('focus');
};
export const remvePasswordFocus = () => {
  passwordWrapper.current.classList.remove('focus');
};
export const useEffectHookLogic = () => {
  if (labelElement && labelElement.current) {
    labelElement.current.addEventListener('focus', addLabelFocus);
    labelElement.current.addEventListener('blur', remveLabelFocus);
  }
  if (passwordElement && passwordElement.current) {
    passwordElement.current.addEventListener('focus', addPasswordFocus);
    passwordElement.current.addEventListener('blur', remvePasswordFocus);
  }
};

// User Login Check
export const userLogin = (userName: string, password: string) => {
  if (userName === 'krishna' && password === 'abhay') {
    // Success Login.
    successLoginToast();

    // Navigate to home, if User Matched.
    navigate('/home');
  } else {
    // Error Toast.
    errorLoginToast();
  }
};
