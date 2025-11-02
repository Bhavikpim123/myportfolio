// Mock data matching MongoDB schema structure
import { Project, BlogPost, TechSkill, BuildLogEntry } from './types';

export const projects: Project[] = [
  {
    _id: '1',
    title: 'AI Driven HR & Employee Management Portal',
    description: 'Full-stack HR administration with AI-powered predictive analytics',
    longDescription: 'Built a rapid response HR platform with task delegation and AI predictive analytics. Integrated AI to predict employee performance, optimize task allocation, and automate routine HR operations. Features include employee management, attendance tracking, leave management, and performance analytics with real-time dashboard.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    technologies: ['React.js', 'Generative AI', 'MongoDB Atlas', 'Node.js', 'Express.js', 'JWT Authentication'],
<<<<<<< HEAD
    github: 'https://github.com/Bhavikpim123/staff-sphere-ai',
=======
    github: 'https://github.com/bhavik',
>>>>>>> 167262af9b447d2e9d5be4e8b43ec7704f5947c5
    featured: true,
    category: 'fullstack',
    createdAt: '2025-06-15'
  },
<<<<<<< HEAD
 /* {
    _id: '2',
    title: 'Parkify',
    description: 'Real-time parking management with license plate recognition',
=======
  {
    _id: '2',
    title: 'License Plate Detection Using YOLO',
    description: 'Real-time license plate recognition with retrieval system',
>>>>>>> 167262af9b447d2e9d5be4e8b43ec7704f5947c5
    longDescription: 'Developed a SAP-integrated license plate detection system using YOLO for real-time recognition. The system processes entry/exit data, uses LicensePlate number and Gemini API for ANPR analysis, and stores results in SQL database. Designed for campus/parking management with automated vehicle tracking and reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=800&h=600&fit=crop',
    technologies: ['YOLO', 'Python', 'Gemini API', 'SQL', 'OpenCV', 'Flask'],
    github: 'https://github.com/rajat-hawke/license-plate',
    featured: true,
    category: 'ai',
    createdAt: '2023-05-20'
<<<<<<< HEAD
  },*/
=======
  },
>>>>>>> 167262af9b447d2e9d5be4e8b43ec7704f5947c5
  {
    _id: '3',
    title: 'GapShap - Real-time Messaging App',
    description: 'Flutter-based chat app with one-on-one and group messaging',
    longDescription: 'A real-time chat application built with Flutter and Firebase. Features include one-on-one messaging, group chats, push notifications using FCM, Google Cloud Storage for media files, and Firestore for real-time data synchronization. Integrated user authentication with Firebase Auth and optimized for both iOS and Android platforms.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
    technologies: ['Flutter', 'Firebase', 'Firestore', 'Google Cloud Storage', 'FCM', 'Dart'],
<<<<<<< HEAD
    github: 'https://github.com/Bhavikpim123/GapShap',
    demo: 'https://play.google.com/store/apps/details?id=com.GapShap.GapShap&pcampaignid=web_share',
=======
    github: 'https://github.com/bhavik/gapshap',
    demo: 'https://play.google.com/store/apps/gapshap',
>>>>>>> 167262af9b447d2e9d5be4e8b43ec7704f5947c5
    featured: true,
    category: 'mobile',
    createdAt: '2025-04-01'
  },
  {
    _id: '4',
<<<<<<< HEAD
    title: 'LLM-Powered Intelligent Document Query & Retrieval System | Bajaj HackRx',
    description: 'LLM-Powered Intelligent Document Query & Retrieval System',
    longDescription: 'Developed NLP-powered query system using LangChain and Gemini API, FAISS enabling semantic search over large datasets. Created a preprocessing pipeline for ingestion, chunking, and embedding generation. Designed a responsive web interface for real-time query input and retrieval results.',
    image: 'https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/08/26051537/Advanced-RAG.png',
    technologies: ['Node.js', 'Gemini API', 'WebSocket.io', 'Express.js', 'FAISS', 'NLP'],
    github: 'https://github.com/Bhavikpim123/LLM-Powered-Intelligent-Document-Query-Retrieval-System',
    featured: true,
    category: 'ai',
=======
    title: 'Google Calendar API Integration',
    description: 'JWT authentication with seamless calendar event notifications',
    longDescription: 'Integrated Google Calendar API with JWT token-based authentication and email notifications for seamless user experience. Built a scheduling system that automatically syncs events, sends reminder notifications via email, and manages user permissions. Implemented OAuth 2.0 flow for secure API access.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    technologies: ['Node.js', 'Google Calendar API', 'JWT', 'Express.js', 'OAuth 2.0', 'Nodemailer'],
    github: 'https://github.com/bhavik/calendar-integration',
    featured: false,
    category: 'backend',
>>>>>>> 167262af9b447d2e9d5be4e8b43ec7704f5947c5
    createdAt: '2024-11-10'
  }
];

export const blogPosts: BlogPost[] = [
  {
    _id: '1',
    title: 'Building GapShap: A Flutter Chat App Journey',
    excerpt: 'How I built a real-time messaging app with Flutter and Firebase',
    content: `# Building GapShap: A Flutter Chat App Journey

## The Vision

Creating a seamless real-time chat experience for both one-on-one and group conversations using Flutter and Firebase.

## Technical Stack

- **Frontend**: Flutter with Dart
- **Backend**: Firebase (Firestore, Cloud Storage, FCM)
- **Authentication**: Firebase Auth
- **Real-time**: Firestore real-time listeners

## Key Features Implemented

- One-on-one and group messaging
- Push notifications using FCM
- Media sharing with Google Cloud Storage
- Real-time message synchronization
- Cross-platform support (iOS & Android)

## Lessons Learned

Building a production-ready chat app taught me the importance of efficient state management, optimizing Firestore queries, and handling edge cases in real-time communication.`,
    author: 'Bhavik Pimpalkar',
    publishedAt: '2025-04-15',
    tags: ['flutter', 'firebase', 'dart', 'mobile-dev', 'real-time'],
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=400&fit=crop',
    readTime: 10
  },
  {
    _id: '2',
    title: 'AI in HR: Building Predictive Analytics System',
    excerpt: 'Integrating Generative AI for employee performance predictions',
    content: `# AI in HR: Building Predictive Analytics System

## The Challenge

Traditional HR systems lack predictive capabilities. I built an AI-driven platform that uses machine learning to predict employee performance and optimize task allocation.

## Tech Stack

- **Frontend**: React.js with modern UI
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas
- **AI**: Generative AI for predictive analytics
- **Auth**: JWT-based authentication

## Key Innovations

- Task delegation based on AI predictions
- Employee performance forecasting
- Automated routine HR operations
- Real-time dashboard with analytics

## Impact

The system improved task allocation efficiency and provided actionable insights for HR decision-making.`,
    author: 'Bhavik Pimpalkar',
    publishedAt: '2025-06-20',
    tags: ['ai', 'react', 'mongodb', 'machine-learning', 'hr-tech'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop',
    readTime: 12
  },
  {
    _id: '3',
    title: 'License Plate Recognition with YOLO',
    excerpt: 'Real-time vehicle detection and recognition using deep learning',
    content: `# License Plate Recognition with YOLO

## Introduction

Building an automated license plate recognition (ALPR) system for campus parking management using YOLO and Gemini API.

## Architecture

- **Detection**: YOLO for real-time object detection
- **OCR**: Gemini API for license plate text extraction
- **Backend**: Flask API with Python
- **Database**: SQL for vehicle data storage
- **Integration**: SAP for entry/exit processing

## Implementation Highlights

- Real-time video processing
- High accuracy plate detection
- Automated entry/exit logging
- Integration with existing campus systems

## Results

Achieved 95%+ accuracy in license plate detection with sub-second processing times, significantly improving campus security and vehicle tracking.`,
    author: 'Bhavik Pimpalkar',
    publishedAt: '2023-06-10',
    tags: ['yolo', 'python', 'computer-vision', 'ai', 'flask'],
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=800&h=400&fit=crop',
    readTime: 15
  }
];

export const techSkills: TechSkill[] = [
  // Frontend
  { name: 'React.js', category: 'frontend', icon: 'react', proficiency: 92 },
  { name: 'Next.js', category: 'frontend', icon: 'triangle', proficiency: 88 },
  { name: 'HTML/CSS', category: 'frontend', icon: 'code', proficiency: 95 },
  { name: 'JavaScript', category: 'frontend', icon: 'code', proficiency: 90 },
  { name: 'Dart/Flutter', category: 'frontend', icon: 'code', proficiency: 85 },
  
  // Backend
  { name: 'Node.js', category: 'backend', icon: 'server', proficiency: 88 },
  { name: 'Express.js', category: 'backend', icon: 'route', proficiency: 90 },
  { name: 'Python', category: 'backend', icon: 'server', proficiency: 85 },
  { name: 'Flask', category: 'backend', icon: 'server', proficiency: 82 },
  { name: 'Fast API', category: 'backend', icon: 'route', proficiency: 80 },
  { name: 'PHP', category: 'backend', icon: 'server', proficiency: 75 },
  
  // Database
  { name: 'MongoDB', category: 'database', icon: 'database', proficiency: 90 },
  { name: 'Firebase', category: 'database', icon: 'flame', proficiency: 92 },
  { name: 'Supabase', category: 'database', icon: 'database', proficiency: 88 },
  { name: 'MySQL', category: 'database', icon: 'database', proficiency: 85 },
  { name: 'SQLite', category: 'database', icon: 'database', proficiency: 82 },
  
  // Cloud & DevOps
  { name: 'AWS (EC2, S3)', category: 'cloud', icon: 'cloud', proficiency: 80 },
  { name: 'Google Cloud', category: 'cloud', icon: 'cloud', proficiency: 78 },
  { name: 'Cloudinary', category: 'cloud', icon: 'cloud', proficiency: 90 },
  { name: 'Docker', category: 'cloud', icon: 'container', proficiency: 82 },
  
  // Tools
  { name: 'Git/GitHub', category: 'tools', icon: 'git-branch', proficiency: 95 },
  { name: 'Postman', category: 'tools', icon: 'code', proficiency: 90 },
  { name: 'Figma', category: 'tools', icon: 'palette', proficiency: 85 },
  { name: 'Adobe XD', category: 'tools', icon: 'palette', proficiency: 80 }
];

export const buildLog: BuildLogEntry[] = [
  {
    _id: '1',
    date: '2022-10-20',
    date: '2022-12-01',
>>>>>>> 167262af9b447d2e9d5be4e8b43ec7704f5947c5
    title: 'Started B.Tech in Computer Engineering',
    description: 'Began my undergraduate journey at BITW, Wardha',
    milestone: true
  },
  {
    _id: '2',
    date: '2023-05-01',
    title: 'First AI Project - License Plate Detection',
    description: 'Built YOLO-based license plate recognition system with Gemini API integration',
    milestone: true
  },
  {
    _id: '3',
    date: '2024-08-01',
    title: 'Technical Lead at GDG On Campus',
<<<<<<< HEAD
    description: 'Leading 10-member team, organizing Cloud Sprints and Flutter workshops',
=======
    description: 'Leading 48-member team, organizing Cloud Sprints and Flutter workshops',
>>>>>>> 167262af9b447d2e9d5be4e8b43ec7704f5947c5
    milestone: true
  },
  {
    _id: '4',
    date: '2024-10-01',
<<<<<<< HEAD
    title: '1st Place at NetworkBIT Chess Competition',
=======
    title: '1st Place at Devhouse Hackathon',
>>>>>>> 167262af9b447d2e9d5be4e8b43ec7704f5947c5
    description: 'Won first place competing against top developers',
    milestone: true
  },
  {
    _id: '5',
    date: '2024-12-01',
<<<<<<< HEAD
    title: 'Readers Club Core Team Member',
=======
    title: 'HeadsUp Club Core Team Member',
>>>>>>> 167262af9b447d2e9d5be4e8b43ec7704f5947c5
    description: 'Organizing 80+ events on fintech and data challenges',
    milestone: false
  },
  {
    _id: '6',
    date: '2025-01-01',
<<<<<<< HEAD
    title: 'Top 15 at YCCE Smackthon',
    description: 'Built LLM-powered query system for finance at YCCE Smackthon 2025',
=======
    title: 'Top 15 at VCET Hackathon',
    description: 'Built LLM-powered query system for finance at VCET Hackathon 2025',
>>>>>>> 167262af9b447d2e9d5be4e8b43ec7704f5947c5
    milestone: true
  },
  {
    _id: '7',
    date: '2025-04-01',
    title: 'Launched GapShap Chat App',
    description: 'Deployed Flutter-based real-time messaging app with Firebase',
    milestone: true
  },
  {
    _id: '8',
    date: '2025-05-01',
<<<<<<< HEAD
    title: 'Frontend Developer Intern at RetalorXpert',
    description: 'Led redesign increasing user engagement by 70%',
=======
    title: 'Frontend Developer Intern at RatalaXpert',
    description: 'Led redesign increasing user engagement by 70%, mentoring 3,000+ students monthly',
>>>>>>> 167262af9b447d2e9d5be4e8b43ec7704f5947c5
    milestone: true
  },
  {
    _id: '9',
    date: '2025-06-01',
    title: 'Built AI-Driven HR Platform',
    description: 'Developed comprehensive HR management system with AI predictive analytics',
    milestone: true
  },
  {
    _id: '10',
    date: '2025-07-01',
<<<<<<< HEAD
    title: 'CodeCraft MLops Runner-Up',
    description: '1st Runner-Up at Bajaj Institute of Technology Competition',
=======
    title: 'CodeCraft XL Runner-Up',
    description: '1st Runner-Up at Baja Institute of Technology Competition',
>>>>>>> 167262af9b447d2e9d5be4e8b43ec7704f5947c5
    milestone: false
  }
];
