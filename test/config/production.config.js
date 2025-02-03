module.exports = {
  database: {
    url: process.env.MONGODB_URI,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },
  redis: {
    url: process.env.REDIS_URL,
    options: {
      retryStrategy: times => Math.min(times * 50, 2000)
    }
  },
  aws: {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY
    },
    region: process.env.AWS_REGION,
    bucket: process.env.AWS_BUCKET_NAME
  },
  server: {
    port: process.env.PORT || 8080,
    cors: {
      origin: ['https://yourdomain.com'],
      credentials: true
    }
  },
  logging: {
    level: 'error',
    format: 'json'
  }
};
