// API Configuration
const API_CONFIG = {
  // Development - local backend
  development: {
    baseURL: 'http://localhost:3002/api',
  },
  // Production - Railway backend
  production: {
    baseURL: 'https://chorvinskystudiosv2-production.up.railway.app/api',
  }
};

// Get current environment
const environment = process.env.NODE_ENV || 'development';

// Export the appropriate config
export const API_BASE_URL = API_CONFIG[environment].baseURL;

// Helper function to build full API URLs
export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Common API endpoints
export const API_ENDPOINTS = {
  health: '/health',
  contact: '/contact',
  // Add more endpoints as we build them
};

export default API_CONFIG; 