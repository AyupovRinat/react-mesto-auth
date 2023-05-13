import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/authApi.js';
import SignForm from './SignForm';

function Register({ onRegister, onSuccess }) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    auth.register(formValue.email, formValue.password)
      .then(() => {
        setFormValue({ email: '', password: '' });
        onRegister();
        onSuccess(true);
        navigate('/sign-in', { replace: true });
      }
      )
      .catch((err) => {
        onSuccess(false);
        onRegister();
        console.log(err);
      })
  }

  return (
    <SignForm
      title="Регистрация"
      textButton="Зарегистрироваться"
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formValue={formValue}
    />

  );
}

export default Register;
