import { useState } from "react";

const AuthModal = ({ setShowModal, setIsSignUp, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  console.log(email, password, confirmPassword);

  const handleClick = () => {
    setShowModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try { 
         if (isSignUp && (password === confirmPassword )){
             setError('Passwords need to match!')
             console.log('Make a post request to database');
         }
    } catch (error) {
        console.log();
    }
  };
 
  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        X
      </div>
      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p>
        By loging in, you agree with our terms. Learn how we process your data
        in our Privacy policy and Cookie policy
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isSignUp && <input
          type="password"
          id="passoword-check"
          name="password-check"
          placeholder="confirm password"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />}
        <input className="secondary-button" type='submit'/>
        <p>{error}</p>
      </form>
      <hr/>
      <h2>GET THE APP!</h2>
      AUTHMODAL
    </div>
  );
};
export default AuthModal;
