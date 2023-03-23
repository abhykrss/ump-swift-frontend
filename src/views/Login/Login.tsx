// Crucial Imports
import { Fragment, useState, useEffect, useRef } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { googleicon, meetriLogo, Fbicon } from '../../common/assets/image';
import { Link } from 'react-router-dom';
import './Login.css';
import {
  addLabelFocus,
  addPasswordFocus,
  inputWrapper,
  labelElement,
  passwordElement,
  passwordWrapper,
  remveLabelFocus,
  remvePasswordFocus,
  useEffectHookLogic,
  userLogin,
} from './LoginHelpers';
import { errorLoginToast, successLoginToast } from '../../common/Toast/toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  // State to Log User In.
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const labelElement = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordElement = useRef() as React.MutableRefObject<HTMLInputElement>;
  const inputWrapper = useRef() as React.MutableRefObject<HTMLDivElement>;
  const passwordWrapper = useRef() as React.MutableRefObject<HTMLDivElement>;

  const addLabelFocus = () => {
    inputWrapper.current.classList.add('focus');
  };
  const remveLabelFocus = () => {
    inputWrapper.current.classList.remove('focus');
  };
  const addPasswordFocus = () => {
    passwordWrapper.current.classList.add('focus');
  };
  const remvePasswordFocus = () => {
    passwordWrapper.current.classList.remove('focus');
  };

  // UseEffect hook for Responsive UI.
  useEffect(() => {
    if (labelElement && labelElement.current) {
      labelElement.current.addEventListener('focus', addLabelFocus);
      labelElement.current.addEventListener('blur', remveLabelFocus);
    }
    if (passwordElement && passwordElement.current) {
      passwordElement.current.addEventListener('focus', addPasswordFocus);
      passwordElement.current.addEventListener('blur', remvePasswordFocus);
    }
  }, []);

  const handleClick = () => {
    if (userName === 'eddie' && password === 'eddie') {
      // Success Login.
      successLoginToast();
      localStorage.setItem('token', 'true');

      // Navigate to home, if User Matched.
      navigate('/home');
    } else {
      // Error Toast.
      errorLoginToast();
    }
  };

  return (
    <Fragment>
      <div className="login-wrapper">
        <div className="Circle"></div>
        <div className="circle">
          <div className="circle-inner"></div>
        </div>
        <div className="container-wrapper shadow-2xl main-content">
          <div className="slider-wrapper">
            <img className="w-2/5" src={meetriLogo} alt="meetri logo" />
            <h4 className="about-us">Where Innovation Meets Logic</h4>
          </div>
          <div className="login-content">
            <div className="login-form">
              <h2 className="title">Hello there!👋</h2>
              <div className="input-wrapper one" ref={inputWrapper}>
                <div className="icon-form-icon"></div>
                <div className="inner-content">
                  <h5 className="label">
                    Username
                    <UserOutlined className="login-icon" />
                  </h5>
                  <input type="text" className="hs-input" ref={labelElement} onChange={e => setUserName(e.target.value)} />
                </div>
              </div>
              <div className="input-wrapper pass" ref={passwordWrapper}>
                <div className="icon-form-icon"></div>
                <div className="inner-content">
                  <h5 className="label">
                    Password
                    <LockOutlined className="login-icon" />
                  </h5>
                  <input type="password" className="hs-input" ref={passwordElement} onChange={e => setPassword(e.target.value)} />
                </div>
              </div>
              {/* Checking Credentials, onClick */}
              <button type="submit" onClick={handleClick} className="btn hs-btn shadow-md">
                Login
              </button>
              <span className="or-text">OR</span>
              <div className="flex py-3 justify-center items-center">
                <div className="google-img mr-3">
                  <a className="google-link">
                    <img src={googleicon} alt="Google Icon" className="google-icon" />
                  </a>
                </div>
                <div className="google-img">
                  <a className="google-link">
                    <img src={Fbicon} alt="Facebook Icon" className="google-icon" />
                  </a>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <h5>Dont have an Account</h5>
                <Link to="/">
                  <span className="link px-1">Sign in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
