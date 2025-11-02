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
    github: 'https://github.com/Bhavikpim123/staff-sphere-ai',
    featured: true,
    category: 'fullstack',
    createdAt: '2025-06-15'
  },
 /* {
    _id: '2',
    title: 'Parkify',
    description: 'Real-time parking management with license plate recognition',
    longDescription: 'Developed a SAP-integrated license plate detection system using YOLO for real-time recognition. The system processes entry/exit data, uses LicensePlate number and Gemini API for ANPR analysis, and stores results in SQL database. Designed for campus/parking management with automated vehicle tracking and reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=800&h=600&fit=crop',
    technologies: ['YOLO', 'Python', 'Gemini API', 'SQL', 'OpenCV', 'Flask'],
    github: 'https://github.com/rajat-hawke/license-plate',
    featured: true,
    category: 'ai',
    createdAt: '2023-05-20'
  },*/
  {
    _id: '3',
    title: 'GapShap - Real-time Messaging App',
    description: 'Flutter-based chat app with one-on-one and group messaging',
    longDescription: 'A real-time chat application built with Flutter and Firebase. Features include one-on-one messaging, group chats, push notifications using FCM, Google Cloud Storage for media files, and Firestore for real-time data synchronization. Integrated user authentication with Firebase Auth and optimized for both iOS and Android platforms.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
    technologies: ['Flutter', 'Firebase', 'Firestore', 'Google Cloud Storage', 'FCM', 'Dart'],
    github: 'https://github.com/Bhavikpim123/GapShap',
    demo: 'https://play.google.com/store/apps/details?id=com.GapShap.GapShap&pcampaignid=web_share',
    featured: true,
    category: 'mobile',
    createdAt: '2025-04-01'
  },
  {
    _id: '4',
    title: 'LLM-Powered Intelligent Document Query & Retrieval System | Bajaj HackRx',
    description: 'LLM-Powered Intelligent Document Query & Retrieval System',
    longDescription: 'Developed NLP-powered query system using LangChain and Gemini API, FAISS enabling semantic search over large datasets. Created a preprocessing pipeline for ingestion, chunking, and embedding generation. Designed a responsive web interface for real-time query input and retrieval results.',
    image: 'https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/08/26051537/Advanced-RAG.png',
    technologies: ['Node.js', 'Gemini API', 'WebSocket.io', 'Express.js', 'FAISS', 'NLP'],
    github: 'https://github.com/Bhavikpim123/LLM-Powered-Intelligent-Document-Query-Retrieval-System',
    featured: true,
    category: 'ai',
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
    title: 'LLM-Powered Intelligent Document Query & Retrieval System | Bajaj HackRx',
    excerpt: 'LLM-Powered Intelligent Document Query & Retrieval System',
    content: `# LLM-Powered Intelligent Document Query & Retrieval System | Bajaj HackRx

## Introduction

Developed an intelligent document query and retrieval system for HackRx using LangChain, Gemini API, and FAISS to enable semantic search over large datasets.

## Architecture

- **LLM Integration**: Gemini API for natural language understanding and response generation
- **Framework**: LangChain for chaining prompts and managing query flow
- **Vector Store**: FAISS for efficient semantic search and document embedding
- **Frontend**: React-based responsive web interface
- **Backend**: Node.js server for query routing and API orchestration

## Implementation Highlights

- Built a preprocessing pipeline for document ingestion, chunking, and embedding generation
- Enabled real-time query input and retrieval with contextual relevance
- Designed a clean UI for seamless user interaction and result display
- Optimized search latency and accuracy for large-scale document sets

## Results

Achieved 95%+ accuracy in document query and retrieval with sub-second processing times, significantly improving knowledge accessibility and efficiency.`,
    author: 'Bhavik Pimpalkar',
    publishedAt: '2025-06-10',
    tags: ['RAG', 'python', 'GeminiAPI', 'ai', 'flask', 'hackathon', 'llm', 'semantics', 'search', 'NLP', 'FAISS'],
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
    description: 'Leading 10-member team, organizing Cloud Sprints and Flutter workshops',
    milestone: true
  },
  {
    _id: '4',
    date: '2024-10-01',
    title: '1st Place at NetworkBIT Chess Competition',
    description: 'Won first place competing against top developers',
    milestone: true
  },
  {
    _id: '5',
    date: '2024-12-01',
    title: 'Readers Club Core Team Member',
    description: 'Organizing 80+ events on fintech and data challenges',
    milestone: false
  },
  {
    _id: '6',
    date: '2025-01-01',
    title: 'Top 15 at YCCE Smackthon',
    description: 'Built LLM-powered query system for finance at YCCE Smackthon 2025',
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
    title: 'Frontend Developer Intern at RetalorXpert',
    description: 'Led redesign increasing user engagement by 70%',
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
    title: 'CodeCraft MLops Runner-Up',
    description: '1st Runner-Up at Bajaj Institute of Technology Competition',
    milestone: false
  }
];
