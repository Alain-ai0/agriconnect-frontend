const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://agriconnect-backend-fapq.onrender.com';

export const api = {
  // Auth endpoints
  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  // Products endpoints
  getProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/api/products`);
    return response.json();
  },

  createProduct: async (productData) => {
    const response = await fetch(`${API_BASE_URL}/api/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });
    return response.json();
  },

  // Courses endpoints
  getCourses: async () => {
    const response = await fetch(`${API_BASE_URL}/api/courses`);
    return response.json();
  },

  // Experts endpoints
  getExperts: async () => {
    const response = await fetch(`${API_BASE_URL}/api/experts`);
    return response.json();
  },
};
