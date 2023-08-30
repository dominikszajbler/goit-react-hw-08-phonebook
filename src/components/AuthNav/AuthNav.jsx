import { NavLink } from 'react-router-dom';
import './AuthNav.css'; 

export const AuthNav = () => {
  return (
    <div className="authNavContainer">
      <NavLink className={`button link`} to="/register">
        Register
      </NavLink>
      <span className="buttonSeparator"></span>
      <NavLink className={`button link`} to="/login">
        Log In
      </NavLink>
    </div>
  );
};