# BrainTEL Pakistan – Business IT & Telecom Platform

A modern full-stack corporate website developed for **BrainTEL Pakistan**, showcasing a comprehensive range of business IT and telecommunications solutions. The platform features services including business internet, cloud infrastructure, SMS solutions, VoIP, managed IT support, and custom software development.

Built using **React, TypeScript, TanStack Start, Node.js, Express.js, and MySQL**.

🌐 **Live Website:** https://brain.net.pk/

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Available Scripts](#available-scripts)
- [Backend Architecture](#backend-architecture)
- [Key Services](#key-services)
- [Deployment](#deployment)
- [Author](#author)

---

## Overview

BrainTEL Pakistan provides business-focused IT and telecommunications solutions through a modern and responsive web platform.

The website presents the company's services, solutions, and business offerings while allowing visitors to explore services and submit inquiries through integrated forms.

The project consists of two main applications:

- **Frontend:** A responsive corporate website built with React, TypeScript, and TanStack Start.
- **Backend:** A RESTful API built with Node.js, Express.js, and MySQL for handling application requests and form submissions.

---

## Features

### Corporate Website
- Modern, responsive, and user-friendly interface
- Structured navigation and service-based routing
- Dynamic page layouts and reusable UI components
- Company information, industry solutions, and FAQ sections
- Responsive layouts for desktop, tablet, and mobile devices

### Internet & Connectivity
- Business fiber internet services
- Internet plans and connectivity solutions
- Coverage and service information

### Cloud Infrastructure
- Cloud hosting solutions
- VPS and dedicated server services
- Data center infrastructure solutions

### SMS & Communication
- Bulk SMS services
- Branded SMS and OTP solutions
- SMS campaign services
- VoIP and business telephony solutions

### Software & IT Solutions
- Custom software development
- ERP solutions
- AI-powered business solutions
- Web and mobile application development
- Managed IT support

### Backend & API Integration
- RESTful API integration with the frontend
- MySQL database connectivity using Sequelize ORM
- Backend handling of contact, inquiry, referral, and service request forms
- Email functionality using Nodemailer
- File upload handling using Multer

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 19 | UI development |
| TypeScript | Static type checking |
| TanStack Start | Full-stack React framework |
| TanStack Router | File-based routing |
| Vite | Development and build tooling |
| Tailwind CSS | Styling |
| Radix UI | Accessible UI primitives |
| Framer Motion | Animations and transitions |
| React Query | Server state management |
| Lucide React | Icons |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js 5 | REST API development |
| MySQL | Relational database |
| Sequelize | ORM and database management |
| Nodemailer | Email functionality |
| Multer | File uploads |

---

## Project Structure

```text
BrainTEL/
│
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── config/           # Application configuration
│   │   ├── routes/           # File-based application routes
│   │   ├── pages/            # Page components
│   │   └── ...
│   │
│   ├── public/               # Static assets
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── config/               # Database configuration
│   ├── server.js             # Backend entry point
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MySQL Server
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd BrainTEL
```

### 2. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server using the development script configured in `package.json`:

```bash
npm run dev
```

### 3. Backend Setup

Open another terminal and navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Configure your database credentials and other required environment variables in the backend `.env` file.

Start the backend using its configured development script:

```bash
npm run dev
```

**Note:** The frontend and backend must be configured to communicate through the appropriate API URL. The MySQL server must also be running.

---

## Environment Configuration

The backend requires database configuration and any additional environment variables used by the application.

Create a `.env` file inside the `backend/` directory.

Configure the following according to your backend configuration:

- MySQL database name
- Database username
- Database password
- Database host and port
- Application server port
- Email/SMTP credentials (if required)

**Important:** Never commit `.env` files, database credentials, or other sensitive configuration values to GitHub.

For exact variable names, refer to the backend configuration and environment variable references in the source code.

---

## Available Scripts

Run the following command inside the frontend or backend directory to see the scripts available in that application's `package.json`:

```bash
npm run
```

Common development and production commands depend on the scripts configured for each application.

---

## Backend Architecture

The backend uses a RESTful architecture to process frontend requests and communicate with the MySQL database.

**Request Flow:**

```text
Frontend
   |
   v
API Request
   |
   v
Express.js Server
   |
   v
API Routes & Handlers
   |
   v
Sequelize ORM
   |
   v
MySQL Database
   |
   v
API Response
   |
   v
Frontend UI
```

---

## Key Services

BrainTEL's platform showcases several business-oriented technology services:

- Business Internet & Fiber Connectivity
- Cloud Hosting & Infrastructure
- Virtual Private Servers (VPS)
- Dedicated Servers & Data Centers
- Bulk & Branded SMS
- OTP Messaging Solutions
- VoIP & Business Telephony
- Custom Software & ERP Development
- AI & Digital Solutions
- Managed IT Services

---

## Deployment

The live website is available at:

**https://brain.net.pk/**

The frontend and backend have separate application configurations and deployment requirements. Refer to their respective deployment configurations when setting up a production environment.

---

## Author

**Hamza**  
Full-Stack Developer

- GitHub: https://github.com/Hamza-dev84

