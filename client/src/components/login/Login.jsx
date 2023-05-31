import { useState } from "react";
import validation from "../../utils/validation";
import "./Login.css"
// import image from "../../assets/login.webp";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className="form-container">
      <div className="box">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="form__login">Login</h2>

          <div className="form__inputBox">
            <input required
              className="form__input"
              onChange={handleChange}
              value={userData.email}
              type="text"
              name="email"
            />
            <label htmlFor="email">Email</label>
            {errors.email && <p className="form__danger">{errors.email}</p>}
          </div>

          <div className="form__inputBox">
            <input required
              className="form__input"
              onChange={handleChange}
              value={userData.password}
              type="text"
              name="password"
            />
            <label htmlFor="password">Password</label>
            {errors.password && <p className="form__danger">{errors.password}</p>}
          </div>

          <button className="form__button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;