import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import './LoginForm.css';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <div className="field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="control">
          <input type="email" id="email" name="email" className="inputField" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="password" className="label">
          Password
        </label>
        <div className="control">
          <input
            type="password"
            id="password"
            name="password"
            className="inputField"
          />
        </div>
      </div>
      <div className="control">
        <button type="submit" className="button is-primary">
          Log In
        </button>
      </div>
    </form>
  );
};