# 🎓 Tutor Support System - Group 4

> 🚀 **Modern web application for connecting tutors and students**  
> Built with React, MUI, and cutting-edge technologies

---

## 📑 Table of Contents

- [🎯 Project Overview](#project-overview)
- [🛠️ Technology Stack](#technology-stack)
- [📂 Project Structure](#project-structure)
- [✅ Prerequisites](#prerequisites)
- [🚀 Quick Start](#quick-start)
- [⚙️ Development Commands](#development-commands)
- [📏 ESLint Rules & Code Standards](#eslint-rules--code-standards)
- [🌿 Git Workflow](#git-workflow)
  - [🔑 Main Branches](#main-branches)
  - [🛠️ Workflow Steps](#workflow-steps)
  - [🔧 Handling Conflicts](#handling-conflicts)
- [📋 Contributing Guidelines](#contributing-guidelines)
- [🔮 Development Roadmap](#development-roadmap)
- [📚 References & Documentation](#references--documentation)


---

## 🎯 Project Overview

The Tutor Support System is a web application designed to:
- 📝 Manage tutor and student information
- 💬 Facilitate communication and collaboration
- 📊 Track learning progress and performance
- 🔐 Provide authentication and user authorization

**Current Status:** Frontend completed, Backend in development.

---

## 🛠️ Technology Stack
### Frontend
- ⚛️ **React 19** - Modern UI library
- ⚡ **Vite 7** - Fast build tool
- 🎨 **MUI v7** - Material Design components
- 🎭 **Emotion** - CSS-in-JS styling
- 🗂️ **Redux Toolkit** - State management
- 🛣️ **React Router** - Client-side routing
- 🔗 **Axios** - HTTP client for API calls
- 🧹 **ESLint 9** - Code quality assurance

### Backend *(in development)*
- 🟢 **Node.js + Express** - Server runtime
- 🗄️ **Database** - MongoDB/PostgreSQL
- 🔒 **Authentication** - JWT tokens
- 📡 **REST API** - RESTful architecture

---

## 📂 Project Structure

```
Tutor-Support-System-GR4/
├── 📁 client/                   # React Frontend Application
│   ├── 📁 public/               # Static assets
│   ├── 📁 src/
│   │   ├── 📁 api/              # API clients & config
│   │   ├── 📁 assets/           # Images, icons
│   │   ├── 📁 components/       # UI components
│   │   ├── 📁 hooks/            # Custom React hooks
│   │   ├── 📁 pages/            # Page components
│   │   ├── 📁 redux/            # State management
│   │   ├── 📁 services/         # Business logic
│   │   ├── 📁 utils/            # Utilities
│   │   ├── 📄 App.jsx           # Root component
│   │   ├── 📄 main.jsx          # Entry point
│   │   └── 📄 theme.js          # Theme config
│   └── 📄 package.json
├── 📁 sever/                    # Backend (empty)
└── 📄 README.md
```

---

## ✅ Prerequisites

- 🟢 **Node.js** v18+ ([Download](https://nodejs.org/))
- 📦 **npm** v9+ (or yarn/pnpm)
- 🔧 **Git** ([Download](https://git-scm.com/))
- 💻 **VS Code** + ESLint extension *(recommended)*

---

## 🚀 Quick Start

### 1️⃣ Clone repository

```powershell
git clone https://group4NM@dev.azure.com/group4NM/Tutor-Support-System-GR4/_git/Tutor-Support-System-GR4
cd TUTOR-SUPPORT-SYSTEM-GR4
```

### 2️⃣ Install & Run Frontend

```powershell
cd client
npm install
npm run dev
```



---

## ⚙️ Development Commands

### Frontend Commands

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check code style 
npm run lint
```

---

## 📏 ESLint Rules & Code Standards

The project uses ESLint with custom rules to maintain code quality and consistency:

### 🔧 Detailed Rules Explanation

### 🔹 **React-specific rules**

| Rule | Level | Description |
|------|-------|-------------|
| `react-refresh/only-export-components` | ⚠️ warn | Cảnh báo nếu export không phải component (giúp React Refresh hoạt động đúng) |
| `react-hooks/rules-of-hooks` | 🚫 error | Bắt buộc dùng hook đúng chỗ (chỉ trong function component, custom hook) |
| `react-hooks/exhaustive-deps` | ⚠️ warn | Cảnh báo nếu thiếu dependency trong useEffect, useCallback, useMemo |
| `react/prop-types` | ➖ off | Tắt kiểm tra PropTypes |
| `react/display-name` | ➖ off | Tắt rule bắt buộc đặt displayName cho component (cho linh hoạt) |

### 🔹 **Code quality rules**

| Rule | Level | Description |
|------|-------|-------------|
| `no-console` | ⚠️ warn | Cảnh báo khi có console.log |
| `no-lonely-if` | ⚠️ warn | Cảnh báo khi dùng if lẻ trong else → nên dùng else if |
| `no-unused-vars` | ⚠️ warn | Cảnh báo biến khai báo mà không dùng |
| `no-trailing-spaces` | ⚠️ warn | Cảnh báo khoảng trắng ở cuối dòng |
| `no-multi-spaces` | ⚠️ warn | Cảnh báo dùng nhiều hơn 1 space liên tiếp |
| `no-multiple-empty-lines` | ⚠️ warn | Cảnh báo có nhiều dòng trống liên tiếp |
| `no-unexpected-multiline` | ⚠️ warn | Ngăn lỗi do ASI (Automatic Semicolon Insertion) gây ra |

### 🔹 **Formatting rules**

| Rule | Level | Description |
|------|-------|-------------|
| `space-before-blocks` | 🚫 error | Luôn có 1 space trước dấu `{` |
| `object-curly-spacing` | ⚠️ warn | Luôn có space bên trong `{ ... }` |
| `indent` | ⚠️ warn | Thụt dòng 2 spaces |
| `semi` | ⚠️ warn | Không dùng dấu `;` |
| `quotes` | 🚫 error | Luôn dùng nháy đơn `'` |
| `array-bracket-spacing` | ⚠️ warn | Luôn có space trong `[ ... ]` |
| `linebreak-style` | ➖ off | Không ép buộc kiểu xuống dòng (LF/CRLF) |
| `keyword-spacing` | ⚠️ warn | Bắt buộc có space quanh từ khóa (`if (...)`, `for (...)`) |
| `comma-dangle` | ⚠️ warn | Cảnh báo về dấu phẩy cuối (theo mặc định rule ESLint) |
| `comma-spacing` | ⚠️ warn | Cảnh báo nếu thiếu space sau dấu phẩy |
| `arrow-spacing` | ⚠️ warn | Cảnh báo thiếu space quanh `=>` |

### 📋 Key Standards

#### ✅ **Required:**
- **Single quotes** for strings
- **2-space indentation**
- **No semicolons** (ASI style)
- **Space before blocks** `if () {`
- **Proper React hooks usage**

#### ⚠️ **Warnings:**
- Console statements (remove in production)
- Unused variables
- Multiple empty lines
- Inconsistent spacing

#### 🚫 **Errors:**
- React hooks violations
- Single quote violations
- Missing spaces before blocks

### 🛠️ Usage

```powershell
# Check all files
npm run lint

# Auto-fix fixable issues
npm run lint -- --fix

# Check specific file
npx eslint src/components/MyComponent.jsx
```

---

## 🌿 Git Workflow

### 🔑 Main Branches
- **`main`** → Production branch, always stable
- **`feature/*`** → Feature branches from `main`

```
┌─── Git Flow Diagram ───┐
                        
  (main)     ●────●───●───●───●───●─────●─────●─────●───●
             │    │                    ╱               / 
             |    │                   ╱               /
             |    │                  ╱  (merge)      /
 (feature/A) │    ●───●──●────●─────●               /
             │                ↑                    / (merge) 
             │                PR                  /
             │             (review)              /
             │                                  /  
 (feature/B) ●───●───●───●───●─●───●─●───●─●───●
                                           ↑
                                           PR
                                        (review)
                         


### 🛠️ Workflow Steps

#### 1. Update main branch
```bash
git checkout main
git pull origin main
```

#### 2. Create new feature branch
```bash
git checkout -b feature/ISSUE-xxx-feature-name
```

#### 3. Commit and push code
```bash
git add .
git commit -m "feat: add login form (#123)"
git push origin feature/ISSUE-xxx-feature-name
```

#### 4. Create Pull Request
- **Source:** `feature/*`
- **Target:** `main`
- **Requirement:** Review before merge ✅

---

### 🔧 Handling Conflicts

When conflicts occur during merge/rebase:

1) **Ensure you're on the correct branch:**
```bash
git checkout feature/ISSUE-xxx-feature-name
```

2) **Resolve conflicts** (look for `<<<<<<<`, `=======`, `>>>>>>>`) and stage:
```bash
git add -A
```

3) **Amend commit and force push:**
```bash
git commit --amend --no-edit
git push origin feature/ISSUE-xxx-feature-name -f
```

---

## 📋 Contributing Guidelines

### 🚫 Don't:
- Commit directly to `main`
- Force push to `main`
- Merge without PR review

### ✅ Do:
- Create issues before coding
- Follow [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat:` - New features
  - `fix:` - Bug fixes
  - `docs:` - Documentation updates
  - `style:` - Code formatting
  - `refactor:` - Code refactoring
  - `test:` - Add tests
  - `chore:` - Maintenance tasks

### 📝 Contribution Process:
1. 🎯 Create or pick an issue
2. 🌿 Follow Git workflow
3. 👥 Create PR and request review
4. ✅ Merge after approval

---

## 🔮 Development Roadmap

### Phase 1: ✅ Frontend Foundation
- [x] Setup React + Vite
- [x] MUI integration
- [x] Project structure
- [x] Development workflow

### Phase 2: 🚧 Backend Development
- [ ] Setup Express server
- [ ] Database design & models
- [ ] Authentication system
- [ ] REST API endpoints

### Phase 3: 🔄 Integration
- [ ] Frontend-Backend connection
- [ ] State management (Redux)
- [ ] Error handling
- [ ] Testing

### Phase 4: 🚀 Deployment
- [ ] Production build
- [ ] CI/CD pipeline
- [ ] Monitoring & logging
- [ ] Performance optimization

---

## 📚 References & Documentation

- [MUI](https://mui.com/material-ui/getting-started/)
- [Axios](https://axios-http.com/docs/intro)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [React Router](https://reactrouter.com/home)

---

