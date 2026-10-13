# 💸 Expense Tracker App

A full-stack Expense and Budget Management application built with **Node.js, Express, MongoDB, and React (Vite)**. It helps users manage budgets, categorize spending, log purchases, and track expenses with real-time analytics.

---

## 🚀 Features

- **🔐 User Authentication**: Secure user registration, login, and cookie-based JWT session authorization.
- **📊 Interactive Dashboard**: Visual summary of total budgets, recent spending, and budget utilization.
- **💰 Budget Management**: Create, view, update, and manage budgets across custom categories.
- **🏷️ Category Tracking**: Categorize expenses to see exactly where money goes.
- **🛒 Purchase Logging**: Record purchases with itemized amounts, dates, and category tags.
- **🛡️ Protected Routes & API Interceptors**: Secure client-side routing with automatic token handling.

---

## 🛠️ Tech Stack

### Backend
- **Node.js** & **Express 5**
- **MongoDB** & **Mongoose**
- **JWT (JSON Web Tokens)** & **Bcrypt**
- **Cookie-Parser** & **CORS**

### Frontend
- **React 19**
- **Vite**
- **React Router v7**
- **Axios**
- **Lucide Icons**
- **Lottie React**

---

## 📁 Project Structure

```text
├── api/
│   ├── config/            # Database configuration
│   ├── controllers/       # Auth, Budget, Category, Dashboard, Purchase controllers
│   ├── models/            # Mongoose schemas (User, Budget, Category, Purchase)
│   ├── routes/            # Express route handlers
│   └── middlewares/       # Auth middleware & token verification
├── frontend/              # React + Vite frontend
│   ├── src/
│   │   ├── ApiClient/     # Axios client & interceptors
│   │   ├── common/        # Shared components (Navbar, Footer, Layout)
│   │   ├── context/       # Auth context & state management
│   │   ├── pages/         # Dashboard, Budget, CreateBudget, Auth pages
│   │   └── utils/         # Protected routes & helpers
├── app.js                 # Express app setup & middleware
├── server.js              # Server entry point
├── .env.example           # Environment template
└── package.json           # Backend dependencies & scripts
```

---

## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/ManjitKaur2003/vercel-backend-project.git
cd vercel-backend-project
```

### 2. Backend Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment variables:
   Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/expense_tracker?retryWrites=true&w=majority
   JWT_SECRET_KEY=your_jwt_secret_key
   FRONTEND_URL=http://localhost:5173
   ```
3. Start the backend development server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   npm install
   ```
2. Start the Vite dev server:
   ```bash
   npm run dev
   ```

---

## 📝 License
This project is licensed under the ISC License.
