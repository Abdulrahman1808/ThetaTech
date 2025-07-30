// API Client for Theta Tech Backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

interface ApiResponse<T = unknown> {
  success?: boolean;
  data?: T;
  error?: string;
  message?: string;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Health check
  async healthCheck(): Promise<ApiResponse> {
    return this.request('/health');
  }

  // Contact form submission
  async submitContact(data: {
    name: string;
    email: string;
    message: string;
    subject?: string;
  }): Promise<ApiResponse> {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Newsletter subscription
  async subscribeNewsletter(email: string): Promise<ApiResponse> {
    return this.request('/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Project inquiry
  async submitProjectInquiry(data: {
    name: string;
    email: string;
    projectType: string;
    budget?: string;
    timeline?: string;
    description: string;
  }): Promise<ApiResponse> {
    return this.request('/project-inquiry', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Analytics tracking
  async trackAnalytics(data: {
    event: string;
    page: string;
    timestamp?: string;
  }): Promise<ApiResponse> {
    return this.request('/analytics', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        timestamp: data.timestamp || new Date().toISOString(),
      }),
    });
  }
}

// Create and export the API client instance
export const apiClient = new ApiClient(API_BASE_URL);

// Export types for use in components
export type { ApiResponse }; 