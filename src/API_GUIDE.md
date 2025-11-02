# CodeCanvas Backend API Guide

This document outlines the backend implementation for your MERN stack portfolio.

## 📁 Suggested Backend Structure

```
backend/
├── server.js              # Express server entry point
├── config/
│   ├── db.js             # MongoDB connection
│   └── cloudinary.js     # Cloudinary configuration
├── models/
│   ├── Project.js        # Project schema
│   ├── BlogPost.js       # Blog post schema
│   └── Contact.js        # Contact message schema
├── routes/
│   ├── projects.js       # Project CRUD routes
│   ├── blog.js           # Blog CRUD routes
│   └── contact.js        # Contact form route
├── controllers/
│   ├── projectController.js
│   ├── blogController.js
│   └── contactController.js
├── middleware/
│   ├── auth.js           # JWT authentication
│   └── upload.js         # Cloudinary upload
└── .env                  # Environment variables
```

## 🗄️ MongoDB Schemas

### Project Schema
\`\`\`javascript
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String, required: true },
  image: { type: String }, // Cloudinary URL
  technologies: [{ type: String }],
  github: { type: String },
  demo: { type: String },
  featured: { type: Boolean, default: false },
  category: { 
    type: String, 
    enum: ['web', 'mobile', 'fullstack', 'ai', 'backend'],
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
\`\`\`

### BlogPost Schema
\`\`\`javascript
const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true }, // Markdown
  author: { type: String, default: 'Bhavik' },
  tags: [{ type: String }],
  image: { type: String },
  readTime: { type: Number },
  published: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('BlogPost', blogPostSchema);
\`\`\`

### Contact Schema
\`\`\`javascript
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
\`\`\`

## 🚀 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (protected)
- `PUT /api/projects/:id` - Update project (protected)
- `DELETE /api/projects/:id` - Delete project (protected)

### Blog
- `GET /api/blog` - Get all published posts
- `GET /api/blog/:id` - Get single post
- `POST /api/blog` - Create post (protected)
- `PUT /api/blog/:id` - Update post (protected)
- `DELETE /api/blog/:id` - Delete post (protected)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (protected)

## 🔐 Environment Variables

\`\`\`env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/codecanvas?retryWrites=true&w=majority

# JWT
JWT_SECRET=your_super_secret_jwt_key_here

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Server
PORT=5000
NODE_ENV=production
CLIENT_URL=https://yourdomain.com
\`\`\`

## 🛠️ Example Express Server Setup

\`\`\`javascript
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});
app.use('/api/', limiter);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/contact', require('./routes/contact'));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
\`\`\`

## 📤 Cloudinary Integration

\`\`\`javascript
// config/cloudinary.js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'codecanvas',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
    transformation: [{ width: 1200, height: 800, crop: 'limit' }]
  }
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };
\`\`\`

## 🔒 JWT Authentication Example

\`\`\`javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');
  
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};
\`\`\`

## 🚢 Deployment Options

### Free-Tier Hosting
1. **Backend**: Render.com (Free tier)
   - Connect GitHub repo
   - Add environment variables
   - Auto-deploys on push

2. **Database**: MongoDB Atlas (Free 512MB)
   - Create cluster
   - Whitelist IPs
   - Get connection string

3. **Frontend**: Vercel (Free)
   - Import GitHub repo
   - Add environment variables
   - Auto-deploys on push

4. **Media**: Cloudinary (Free 25GB)
   - Create account
   - Get API credentials
   - Configure in backend

## 📝 Frontend API Integration

\`\`\`typescript
// Example API service
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const projectsAPI = {
  getAll: async () => {
    const res = await fetch(\`\${API_URL}/projects\`);
    return res.json();
  },
  
  getById: async (id: string) => {
    const res = await fetch(\`\${API_URL}/projects/\${id}\`);
    return res.json();
  }
};

export const contactAPI = {
  submit: async (data: ContactMessage) => {
    const res = await fetch(\`\${API_URL}/contact\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  }
};
\`\`\`

## 🎯 Next Steps

1. Initialize Node.js project: \`npm init -y\`
2. Install dependencies: \`npm install express mongoose cors helmet dotenv cloudinary multer express-rate-limit jsonwebtoken bcryptjs\`
3. Set up MongoDB Atlas account
4. Configure Cloudinary account
5. Create routes and controllers
6. Test with Postman/Thunder Client
7. Deploy to Render
8. Update frontend API URLs
9. Test end-to-end

---

**Note**: The current frontend uses mock data. Once your backend is deployed, replace the mock data imports with actual API calls.
