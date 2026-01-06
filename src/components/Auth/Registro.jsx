import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

export default function Registro() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { registro, error: authError } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const password = watch('password');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const { confirmPassword, ...userData } = data;
    const result = await registro(userData);
    setIsSubmitting(false);

    if (result.success) {
      navigate('/');
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        <h2>Registro</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="registro-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              {...register('nombre', {
                required: 'El nombre es obligatorio',
                minLength: {
                  value: 3,
                  message: 'El nombre debe tener al menos 3 caracteres'
                }
              })}
              className={errors.nombre ? 'error' : ''}
            />
            {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'El email es obligatorio',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Email inválido'
                }
              })}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'La contraseña es obligatoria',
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 caracteres'
                }
              })}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: 'Confirma tu contraseña',
                validate: value => value === password || 'Las contraseñas no coinciden'
              })}
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
          </div>

          {authError && <div className="error-message">{authError}</div>}

          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>

        <p className="login-link">
          ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
}
