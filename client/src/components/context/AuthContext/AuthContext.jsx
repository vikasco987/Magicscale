





import { createContext, useState, useEffect } from 'react';
import authAPI from "../../../services/api";
import { useAuth } from '../../context/AuthContext/useAuth';



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      localStorage.removeItem('user');
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const userData = await authAPI.getProfile();

        if (userData && (userData._id || userData.email)) {
          setUser(userData);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(userData));
        }
      } catch (error) {
        console.error('Token verification background check failed (Network or 500). Keeping session active:', error);
        // We DO NOT call logout() here! api.js already handles 401 Unauthorized securely by clearing localStorage.
        // Destroying the session on a generic 500 or network lag causes random page-refresh logouts!
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
  };

  const logout = () => {
    // Clear both user and token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Optionally notify server (if using server sessions)
    authAPI.logout?.(); // safe call if exists

    // Clear state
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
