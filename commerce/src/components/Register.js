import React, { useState } from 'react';
import closeIcon from '../Assets/Navbar/close.svg';

const RegistrationForm = () => {
const [first_name, setfName] = useState('');
const [last_name, setlName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showSignupForm, setShowSignupForm] = useState(true);
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const handlefName = (e) => {
setfName(e.target.value);
setSubmitted(false);
};

const handlelName = (e) => {
setlName(e.target.value);
setSubmitted(false);
};

const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

const handleRegisterClick = () => {
setShowSignupForm(!showSignupForm);
};

const handleSubmit = (e) => {
e.preventDefault();
if (first_name === '' || last_name === '' || email === '' || password === '') {
setError(true);
setSubmitted(false);
} else {
setSubmitted(true);
setError(false);
// You can perform form submission actions here.
}
};

const successMessage = () => {
return (
<div className="success" style={{ display: submitted ? '' : 'none' }}>
<h1>User {first_name} successfully registered!!</h1>
</div>
);
};

const errorMessage = () => {
return (
<div className="error" style={{ display: error ? '' : 'none' }}>
<h1>Please enter all the fields</h1>
</div>
);
};

const backgroundHider = {
position: 'fixed',
width: '100%',
height: '100%',
backgroundColor: 'rgba(50,50,50,0.9)',
zIndex: '9'
};

const registrationFormStyle = {
position: 'fixed',
top: '30%',
left: '30%',
justifyContent: 'center',
alignItems: 'center',
textAlign: 'center',
width: '500px',
height: '300px',
backgroundColor: ' #F5C096',
borderRadius: '30px',
fontFamily: 'Franklin-Gothic-Medium',
zIndex: '9'
};

const inputStyle = {
width: '100px'
};

  return (
    <>
      {showSignupForm && (
        <div className="backgroundHider" style={backgroundHider}>
          <div className="popup" style={registrationFormStyle}>
            <div className="container" style={{ padding: '10px' }}>
              <div className="row">
                <h3 style={{ fontSize: '25px', float: 'left' }}>Register With Us</h3>
                <div className="col">
                  <a onClick={handleRegisterClick} style={{ position: 'relative', float: 'right' }}>
                    <img style={{ width: '50px', height: '50px' }} src={closeIcon} alt="Close" />
                  </a>
                </div>
              </div>
            </div>
            <div className="container">
              <form onSubmit={handleSubmit}>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <label>First Name:</label>
                      <input name="first_name" id="first_name" value={first_name} onChange={handlefName} />
                    </div>
                    <div className="col">
                      <label>Last Name:</label>
                      <input name="last_name" id="last_name" value={last_name} onChange={handlelName} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>Email:</label>
                      <input name="email" id="email" value={email} onChange={handleEmail} />
                    </div>
                    <div className="col">
                      <label>Password:</label>
                      <input name="password" id="password" value={password} onChange={handlePassword} />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <button className="btn btn-primary" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
    </>
  );
};

export default RegistrationForm;

















