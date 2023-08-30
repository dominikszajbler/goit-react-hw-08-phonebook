import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import css from './RegisterForm.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <div className="field">
        <label className="label">Username:</label>
        <div className="control">
          <input className="input" type="text" name="name" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email:</label>
        <div className="control">
          <input className="input" type="email" name="email" />
        </div>
      </div>
      <div className="field">
        <label className="label">Password:</label>
        <div className="control">
          <input className="input" type="password" name="password" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-primary" type="submit">
            Register
          </button>
        </div>
      </div>
    </form>
  );
};