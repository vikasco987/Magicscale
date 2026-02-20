






// services/api.js

const API_URL = 'https://magicscale-backend.onrender.com/api'; // ✅ Production backend

/**
 * Core request wrapper
 */
export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');

  const headers = {
    ...options.headers,
  };

  if (!headers['Content-Type'] && !(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }
      throw new Error(data.message || 'API error');
    }

    return data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

/**
 * Token validation and profile retrieval
 */
export const checkToken = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/auth/verify-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Invalid token");

  return res.json(); // { success: true }
};

export const getProfile = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch profile");

  return res.json(); // { user: {...} }
};

export const logout = async () => {
  const token = localStorage.getItem('token');
  await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/**
 * Auth APIs
 */
export const authAPI = {
  login: async (credentials) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Login failed');

    if (data.token) localStorage.setItem('token', data.token);
    if (data.user) localStorage.setItem('user', JSON.stringify(data.user));

    return data;
  },

  register: async (userData) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Registration failed');

    return data;
  },

  logout,
  checkToken,
  getProfile,
};

/**
 * Seller-only APIs
 */
export const sellerAPI = {
  uploadFood: async (foodData) => {
    return apiRequest('/seller/upload', {
      method: 'POST',
      body: JSON.stringify(foodData),
    });
  },

  getSellerDashboard: async () => {
    return apiRequest('/seller-only');
  },
};

/**
 * General user APIs
 */
export const userAPI = {
  getProtectedData: async () => {
    return apiRequest('/protected');
  },
};

/**
 * Full Export
 */
export default {
  apiRequest,
  authAPI,
  sellerAPI,
  userAPI,
  checkToken,
  getProfile,
  logout,
};
