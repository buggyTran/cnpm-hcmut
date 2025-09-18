
# 📚 TUTOR-SUPPORT-SYSTEM-GR4

A **Tutor Support System** designed to streamline communication and management between tutors and students.  
This project follows a **client–server architecture** with a **React + Vite frontend** and a **Node.js (Express) backend**.

---

## 🚀 Tech Stack

### Frontend (Client)
- ⚛️ React + Vite
- 🎨 MUI / styled-components for theming
- 🗂 Redux Toolkit for state management
- 🔗 Axios for API calls

### Backend (Server)
- 🟢 Node.js + Express
- 🔒 Middleware for authentication & error handling
- 🗄 Models (supports ORM like Prisma / Sequelize)
- 📡 RESTful APIs

---

## 📂 Project Structure

```
TUTOR-SUPPORT-SYSTEM-GR4/
├─ client/                     # Frontend (React + Vite)
│  ├─ public/                  # Static files
│  └─ src/
│     ├─ api/                  # Axios config, API clients
│     ├─ assets/               # Images, icons, fonts
│     ├─ components/           # Reusable UI components
│     ├─ hooks/                # Custom React hooks
│     ├─ pages/                # Page-level components (routes)
│     ├─ redux/                # Redux slices, reducers
│     ├─ services/             # Business logic (API calls, data processing)
│     ├─ store/                # Redux store setup
│     ├─ utils/                # Helpers (format, validation, etc.)
│     ├─ App.jsx               # Root App
│     ├─ main.jsx              # Entry point
│     └─ theme.js              # Theme config
│
├─ server/                     # Backend (Express API)
│  ├─ src/
│  │  ├─ routes/               # API routes
│  │  ├─ controllers/          # Request handlers
│  │  ├─ middlewares/          # Middleware (auth, error handler)
│  │  ├─ services/             # Business logic for API
│  │  ├─ models/               # Database models
│  │  └─ index.js              # Server entry
│  └─ package.json
│
├─ README.md
└─ package.json                # Root config
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/TUTOR-SUPPORT-SYSTEM-GR4.git
cd TUTOR-SUPPORT-SYSTEM-GR4
```

---
Perfect 👍 I see you’ve extended the Git workflow section with a **conflict resolution guide** — that’s a great addition for team collaboration!  

Here’s the updated and polished **README.md** with your new content integrated smoothly:  

```markdown
# 🎓 Tutor Support System - GR4

A system designed to support tutors in managing classes, tasks, and student interactions.  
This project follows a clear Git workflow to ensure stability, scalability, and collaboration. 🚀

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/TUTOR-SUPPORT-SYSTEM-GR4.git
cd TUTOR-SUPPORT-SYSTEM-GR4
```

---

## 🌿 Git Workflow (Simplified)

```scss
(main)    o---------o--------o-----------o
             \              / 
              \            /   (PR) → merge to main
(feature)      o----o----o
```

---

### 🔑 Main Branches
- **`main`** → Production branch, always stable.  
- **`feature/*`** → Feature branches created from `main`.

---

### 🛠️ Workflow Steps

#### 1. Update `main` with the latest changes
```bash
git checkout main
git pull origin main
```

#### 2. Create a new feature branch for your task
```bash
git checkout -b feature/ISSUE-xxx-task-name
```

#### 3. Commit & push code
```bash
git add .
git commit -m "feat: implement login form (#123)"
git push origin feature/ISSUE-xxx-task-name  
```

#### 4. Open a Pull Request (PR)
- **Source**: `feature/*`  
- **Target**: `main`  
- Request a review before merging ✅  

---

### 🔧 Handling Conflicts

If you hit conflicts while updating your feature branch (after merging/rebasing with `main`), follow this flow to keep history clean:

1) Ensure you’re on your feature branch:
```bash
git checkout feature/ISSUE-xxx-task-name
```

2) Resolve conflicts in the files:
```bash
git add .
```

3) Amend the previous commit (reuse the existing message):
```bash
git commit --amend --no-edit
```

4) Force push the updated commit to your branch (the PR will update automatically):
```bash
git push origin feature/ISSUE-xxx-task-name -f
```

---

## 📌 Guidelines

- ❌ Do **not** commit directly to `main`.  
- 🌱 Each feature = one `feature/*` branch.  
- 🔍 All merges go through **Pull Requests** for review and CI checks.  
- 📝 Follow [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat: ...` → new feature  
  - `fix: ...` → bug fix  
  - `docs: ...` → documentation updates  
  - `chore: ...` → maintenance tasks  

---

## 📖 Contribution

1. Pick or create an issue 🎯  
2. Follow the Git workflow 🌿  
3. Open a PR and request review 👥  

We welcome contributions from everyone! ✨  

---

## 📜 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute with attribution. 👐
```

---

Would you like me to also add a **section with common Git commands (quick reference cheatsheet)** at the end of the README? That could make it even more beginner-friendly for new contributors.

## 📌 Guidelines

- ❌ Do **not** commit directly to `main`.  
- 🌱 Each feature = one `feature/*` branch.  
- 🔍 All merges go through **Pull Requests** for review and CI checks.  
- 📝 Follow [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat: ...` → new feature  
  - `fix: ...` → bug fix  
  - `docs: ...` → documentation updates  
  - `chore: ...` → maintenance tasks  

---

## 📖 Contribution

1. Pick or create an issue 🎯  
2. Follow the Git workflow 🌿  
3. Open a PR and request review 👥  

We welcome contributions from everyone! ✨  

---

## 📜 License
## 📚 Tutor Support System – GR4

Hệ thống hỗ trợ gia sư – sinh viên. Hiện tại dự án đã có phần Frontend (React + Vite); thư mục backend đang để trống và sẽ được bổ sung sau.

---

## 🚀 Công nghệ sử dụng

- Frontend: React 19 + Vite 7
- UI: MUI v7 (Material UI) với Emotion (`@emotion/react`, `@emotion/styled`)
- Công cụ: ESLint 9

Lưu ý: Trong `client/src` đã chuẩn bị sẵn các thư mục như `api/`, `redux/`, `services/`, `utils/` để dễ mở rộng (chưa cài đặt Redux Toolkit/axios trong `package.json`).

---

## � Cấu trúc thư mục

```
Tutor-Support-System-GR4/
├─ client/                   # Ứng dụng React + Vite
│  ├─ public/                # Tài nguyên tĩnh
│  └─ src/
│     ├─ api/
│     ├─ assets/
│     ├─ components/
│     ├─ hooks/
│     ├─ pages/
│     ├─ redux/
│     ├─ services/
│     ├─ utils/
│     ├─ App.jsx
│     ├─ main.jsx
│     └─ theme.js
│
├─ sever/                    # (đang trống) – đề xuất đổi tên thành "server/"
└─ README.md
```

---

## 🧰 Yêu cầu hệ thống

- Node.js 18+ (khuyến nghị LTS)
- npm 9+ hoặc pnpm/yarn (ví dụ dưới dùng npm)

---

## ▶️ Chạy nhanh (Frontend)

1) Cài dependencies

```powershell
cd client
npm install
```

2) Chạy chế độ phát triển

```powershell
npm run dev
```

Vite sẽ hiển thị địa chỉ truy cập (mặc định http://localhost:5173).

---

## 🏗️ Build & Preview

- Build sản phẩm:

```powershell
npm run build
```

- Xem trước bản build:

```powershell
npm run preview
```

---

## 🧹 Kiểm tra mã nguồn (Lint)

```powershell
npm run lint
```

---

## � Ghi chú về Backend

- Thư mục hiện tại là `sever/` và đang trống. Nên đổi tên thành `server/` và thêm mã nguồn backend (ví dụ: Node.js + Express) khi bắt đầu phát triển API.
- Khi bổ sung backend, cập nhật README với hướng dẫn chạy máy chủ API và các biến môi trường cần thiết.

---

## 🤝 Đóng góp

- Tạo nhánh tính năng từ `main` (ví dụ: `feature/ten-tinh-nang`) và mở Pull Request để review trước khi merge.
- Khuyến khích dùng Conventional Commits: `feat: ...`, `fix: ...`, `docs: ...`, `chore: ...`.

---

## 📜 Giấy phép

Đề xuất dùng MIT. Nếu áp dụng, hãy thêm file `LICENSE` ở thư mục gốc.

---

© 2025 – Nhóm 4



