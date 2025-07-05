import { buildApiUrl, API_ENDPOINTS } from '../config/api';

// API Service class for handling HTTP requests
class ApiService {
  constructor() {
    this.baseURL = buildApiUrl('');
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = buildApiUrl(endpoint);
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const config = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // GET request
  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  // POST request
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // PUT request
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // DELETE request
  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }

  // Health check
  async healthCheck() {
    return this.get(API_ENDPOINTS.health);
  }

  // Contact form submission
  async submitContact(formData) {
    return this.post(API_ENDPOINTS.contact, formData);
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService; 