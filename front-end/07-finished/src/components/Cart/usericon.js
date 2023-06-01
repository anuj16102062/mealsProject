import React, { useContext, useState } from 'react';
import classes from './login.css';
import Modal from '../UI/Modal';
import Login from './UserLogin';
import Logged from './Login';
import axios from 'axios';

const Signup = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const loginHandler = () => {
    setIsLogin(true);
  };

  const submitLoginHandler = async (userData) => {
    setIsSubmitting(true);
      const requestBody = {
        email:userData.email,
        name:userData.username,
        password:userData.password
      };
  
      axios.post('http://localhost:8080/auth/signup', requestBody)
        .then(response => {
          console.log('28',response)
          setIsSubmitting(false);
          setDidSubmit(true);
        })
        .catch(error => {
          console.error(error);
        });

  };


  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {(

<p>
Need an Account?<br />
<span className="line">
<button className={classes.button} onClick={loginHandler}>
          Signup
        </button>
</span>
</p>
      )}
          {(
            <Logged/>
        
      )}
    </div>
  );
  const cartModalContent = (
    <React.Fragment>
      {isLogin && (
        <Login onConfirm={submitLoginHandler} onCancel={props.onClose} />
      )}
      {!isLogin && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending User data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Signup;
