import { createContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar perfil del usuario al iniciar
  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          const response = await authAPI.getPerfil();
          if (response.success) {
            setUser(response.data);
          }
        } catch (err) {
          console.error('Error cargando usuario:', err);
          logout();
        }
      }
      setLoading(false);
    };

    loadUser();
  }, [token]);

  const login = async (credentials) => {
    try {
      setError(null);
      const response = await authAPI.login(credentials);
      
      if (response.success) {
        setToken(response.token);
        setUser(response.data);
        localStorage.setItem('token', response.token);
        return { success: true };
      }
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const registro = async (userData) => {
    try {
      setError(null);
      const response = await authAPI.registro(userData);
      
      if (response.success) {
        setToken(response.token);
        setUser(response.data);
        localStorage.setItem('token', response.token);
        return { success: true };
      }
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  const updatePerfil = async (userData) => {
    try {
      setError(null);
      const response = await authAPI.updatePerfil(userData);
      
      if (response.success) {
        setUser(response.data);
        return { success: true };
      }
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const cambiarPassword = async (passwords) => {
    try {
      setError(null);
      const response = await authAPI.cambiarPassword(passwords);
      return { success: response.success };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const isAdmin = () => user?.rol === 'admin';
  const isAuthenticated = () => !!user && !!token;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        login,
        registro,
        logout,
        updatePerfil,
        cambiarPassword,
        isAdmin,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
