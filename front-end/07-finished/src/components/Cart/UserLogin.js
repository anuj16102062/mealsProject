import { useRef, useState } from 'react';

import classes from './user.login.css'
const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const User = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    username: true,
    password: true,
    email:true,
  });
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const enteredNameIsValid = USER_REGEX.test(enteredName);
    const enteredPasswordIsValid = PWD_REGEX.test(enteredPassword);
    const enteredEmailIsValid = emailRegex.test(enteredEmail);

    setFormInputsValidity({
    username: enteredNameIsValid,
    password: enteredPasswordIsValid,
    email: enteredEmailIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredPasswordIsValid &&  enteredEmailIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      username: enteredName,
      password: enteredPassword,
      email:enteredEmail
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.username ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.password ? '' : classes.invalid
  }`;
  const emailControlClasses = `${classes.control} ${
    formInputsValidity.email ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>User Name</label>
        <input type='text' id='name' ref={usernameInputRef} />
        {!formInputsValidity.username && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Password</label>
        <input type='text' id='street' ref={passwordInputRef} />


        {!formInputsValidity.password && <p>Please enter a valid password</p>}
      </div>
      <div className={nameControlClasses}>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' ref={emailInputRef} />
        {!formInputsValidity.email && <p>Please enter a Email name!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
      
    </form>
  );
};

export default User;
