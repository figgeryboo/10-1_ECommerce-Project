import { Link } from "react-router-dom";
import topLogo from "/src/assets/img/logo.png"
// import GitThrifty from "/src/assets/img/GitThrifty.png"
import SearchBar from "./SearchBar";


export default function NavBar({ setSearchTerm }) {
  const handleLinkClick = () => {
    setSearchTerm('');
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={topLogo} className="logo" alt="top logo" />
          {/* <img src={GitThrifty} className="logo2" alt="side logo" /> */}
        </Link>
        <nav>
          <Link to="/" onClick={handleLinkClick}>
            Products
          </Link>
          <br/>
          <Link to="/about" onClick={handleLinkClick}>
            About Us
          </Link>
          <br/>
          <Link to="/Sidebar" onClick={handleLinkClick}>
            Filter
          </Link>
          <br/>
          <Link to="/Donate" onClick={handleLinkClick}>
            Donate Here
          </Link>
        </nav>
      </div>
    </>
  );
}


