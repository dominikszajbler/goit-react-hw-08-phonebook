import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';

import './UserMenu.css'; 

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className="wrapper userMenuContainer">
      <p className="username grow">Welcome, {user.name}!</p>
      <button
        className="button is-danger logoutButton"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};