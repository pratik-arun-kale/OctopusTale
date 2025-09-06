// Configuration management for the application
// This file centralizes all environment variable usage

export const config = {
  // Database Configuration
  database: {
    url: process.env.DATABASE_URL || '',
    host: process.env.PGHOST || 'localhost',
    port: parseInt(process.env.PGPORT || '5432'),
    user: process.env.PGUSER || '',
    password: process.env.PGPASSWORD || '',
    database: process.env.PGDATABASE || '',
  },

  // Application URLs
  app: {
    baseUrl: process.env.BASE_URL || 'http://localhost:5000',
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5000',
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:5000/api',
    port: parseInt(process.env.PORT || '5000'),
  },

  // Session Configuration
  session: {
    secret: process.env.SESSION_SECRET || 'default-session-secret-change-me',
    name: 'tales-session',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  },

  // Environment
  env: {
    nodeEnv: process.env.NODE_ENV || 'development',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
  },

  // External Services (add as needed)
  external: {
    stripeWebhookUrl: process.env.STRIPE_WEBHOOK_URL || '',
    emailServiceUrl: process.env.EMAIL_SERVICE_URL || '',
    cdnUrl: process.env.CDN_URL || '',
  },
};

// Validation function to check required environment variables
export function validateConfig() {
  const required = [
    // Add required environment variables here
    // 'DATABASE_URL',
    // 'SESSION_SECRET',
  ];

  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

// Helper function to get database connection string
export function getDatabaseUrl(): string {
  if (config.database.url) {
    return config.database.url;
  }
  
  // Construct from individual components if DATABASE_URL not provided
  const { host, port, user, password, database } = config.database;
  if (user && password && host && database) {
    return `postgresql://${user}:${password}@${host}:${port}/${database}`;
  }
  
  return '';
}