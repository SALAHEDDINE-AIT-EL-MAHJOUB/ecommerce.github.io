import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { CiLogin, CiLogout } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"; // Import correct de Link
import './nav.css'

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  
  return (
    <div className="header">
      <div className="top_header">
        <div className="icon">
          <MdLocalShipping />
        </div>
        <div className="info">
          <p>Free shipping when shopping</p>
        </div>
        <div className="serach_box">
          <input type="text" value="" placeholder="search" />
          <button><FaSearch /></button>
        </div>
        
        {/* Affichage en fonction de l'authentification */}
        {
          isAuthenticated ? 
          <div className="user">
            <div className="icon">
              <CiLogout />
            </div>
            <div className="btn">
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
            </div>
          </div>
          :
          <div className="user">
            <div className="icon">
              <CiLogin />
            </div>
            <div className="btn">
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
        }
      </div>

      <div className="last_header">
        <div className="user_profile">
          {
            isAuthenticated ?
            <>
              <div className="icon">
                <FiUser />
              </div>
              <div className="info">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </>
            :
            <>
              <div className="icon">
                <FiUser />
              </div>
              <div className="info">
                <p>Please login</p>
              </div>
            </>
          }
        </div>
        
        <div className="nav">
          <ul>
            {/* Utilisation correcte du composant Link */}
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/shop" className="link">Shop</Link></li>
            <li><Link to="/collection" className="link">Collection</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
          </ul>
        </div>

        <div className="offer">
          <p>Flat 10% off on all iPhones</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
