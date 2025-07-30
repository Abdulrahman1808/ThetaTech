# Backend Setup & Deployment Guide

## 🚀 Quick Start

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

### 2. Set Up Environment Variables
```bash
cp server/env.example server/.env
# Edit server/.env with your email credentials
```

### 3. Start Backend Server
```bash
cd server
npm run dev
```

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in your `.env` file

### Environment Variables
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=contact@thetatech.com
```

## 🌐 API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status and environment info

### Contact Form
- **POST** `/api/contact`
- Body: `{ name, email, message, subject? }`
- Sends email notification

### Newsletter Subscription
- **POST** `/api/newsletter`
- Body: `{ email }`
- Sends welcome email

### Project Inquiry
- **POST** `/api/project-inquiry`
- Body: `{ name, email, projectType, budget?, timeline?, description }`
- Sends detailed project inquiry email

### Analytics
- **POST** `/api/analytics`
- Body: `{ event, page, timestamp? }`
- Tracks user interactions

## 🐳 Docker Deployment

### Build and Run
```bash
# Build the image
docker build -t theta-tech .

# Run with environment variables
docker run -p 3001:3001 \
  -e EMAIL_USER=your-email@gmail.com \
  -e EMAIL_PASS=your-app-password \
  -e CONTACT_EMAIL=contact@thetatech.com \
  theta-tech
```

### Using Docker Compose
```bash
# Set environment variables
export EMAIL_USER=your-email@gmail.com
export EMAIL_PASS=your-app-password
export CONTACT_EMAIL=contact@thetatech.com

# Start services
docker-compose up -d
```

## ☁️ Cloud Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`

The `vercel.json` configuration handles both frontend and backend deployment.

### Railway
1. Connect your GitHub repository
2. Set environment variables in Railway dashboard
3. Deploy automatically on push

### Render
1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set start command: `node server/index.js`
5. Add environment variables

### Heroku
1. Install Heroku CLI
2. Create app: `heroku create your-app-name`
3. Set environment variables:
   ```bash
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   heroku config:set CONTACT_EMAIL=contact@thetatech.com
   ```
4. Deploy: `git push heroku main`

## 🔧 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port | No | 3001 |
| `NODE_ENV` | Environment | No | development |
| `FRONTEND_URL` | Frontend URL for CORS | No | http://localhost:5173 |
| `EMAIL_USER` | Gmail address | Yes | - |
| `EMAIL_PASS` | Gmail app password | Yes | - |
| `CONTACT_EMAIL` | Contact email | No | EMAIL_USER |

## 🔒 Security Features

- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: Email format and required fields
- **Compression**: Gzip compression for responses

## 📊 Monitoring & Health Checks

### Health Check Endpoint
```bash
curl http://localhost:3001/api/health
```

### Docker Health Check
The Docker container includes automatic health checks.

### Logging
- Console logging for development
- Structured logging for production
- Error tracking and monitoring

## 🔄 CI/CD Pipeline

### GitHub Actions
The `.github/workflows/deploy.yml` file provides:
- Automated testing
- Vercel deployment
- Docker image building and pushing

### Required Secrets
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

## 🗄️ Database Integration (Future)

The backend is prepared for database integration:

### PostgreSQL
```javascript
// Uncomment in server/index.js
// const { Pool } = require('pg');
// const pool = new Pool({ connectionString: process.env.DATABASE_URL });
```

### MongoDB
```javascript
// Uncomment in server/index.js
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI);
```

## 🧪 Testing

### Manual Testing
```bash
# Test health endpoint
curl http://localhost:3001/api/health

# Test contact form
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

### Automated Testing (Future)
```bash
npm test
```

## 🚨 Troubleshooting

### Common Issues

1. **Email not sending**
   - Check Gmail app password
   - Verify 2FA is enabled
   - Check email credentials in .env

2. **CORS errors**
   - Verify FRONTEND_URL in environment
   - Check CORS configuration in server/index.js

3. **Port already in use**
   - Change PORT in .env
   - Kill existing process: `lsof -ti:3001 | xargs kill`

4. **Docker build fails**
   - Check Dockerfile syntax
   - Verify all files are present
   - Check Node.js version compatibility

### Logs
```bash
# View server logs
docker logs <container-id>

# View real-time logs
docker logs -f <container-id>
```

## 📈 Performance Optimization

- **Compression**: Gzip enabled
- **Rate Limiting**: Prevents abuse
- **Security Headers**: Helmet.js protection
- **Error Handling**: Graceful error responses
- **Health Checks**: Monitoring ready

## 🔄 Updates & Maintenance

### Updating Dependencies
```bash
cd server
npm update
npm audit fix
```

### Database Migrations (Future)
```bash
npm run migrate
```

### Backup Strategy (Future)
- Automated database backups
- Email backup to cloud storage
- Configuration backup

---

**Need Help?** Check the troubleshooting section or create an issue in the repository. 