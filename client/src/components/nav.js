import whitelogo from "../images/whiteTinderLogo.png";
import colourLogo from "../images/tinderLogo.png";

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false )
      };
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colourLogo : whitelogo} />
      </div>

      {!authToken && !minimal && (
        <button className="nav-button" onClick={handleClick} disabled= {showModal}>Log in </button>
      )}
    </nav>
  );
};
export default Nav;
