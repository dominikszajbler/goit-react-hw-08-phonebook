import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={`button is-link is-uppercase ${css.link}`} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={`button is-link is-uppercase ${css.link}`}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};