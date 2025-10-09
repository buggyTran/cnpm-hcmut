# 📋 Hướng dẫn tái cấu trúc dự án đơn giản

## 🎯 Cấu trúc hiện tại (Phức tạp)

```
client/
├── src/
│   ├── main.jsx
│   ├── api/
│   ├── app/
│   │   ├── App.jsx
│   │   └── router/
│   │       └── AppRouter.jsx
│   ├── assets/
│   ├── features/
│   ├── hooks/
│   ├── public/
│   ├── redux/
│   ├── services/
│   ├── shared/
│   │   ├── components/
│   │   │   ├── form/
│   │   │   │   ├── Divider.jsx
│   │   │   │   └── FormInput.jsx
│   │   │   └── ui/
│   │   │       ├── Footer.jsx
│   │   │       ├── Header.jsx
│   │   │       ├── index.js
│   │   │       └── Logo.jsx
│   │   └── layouts/
│   │       ├── index.js
│   │       └── MainLayout.jsx
│   ├── styles/
│   └── utils/
```

## ✅ Cấu trúc mới (Đơn giản)

```
client/
├── public/                    # Static files (images, icons)
│   └── assets/
│       └── herosection.png
│
├── src/
│   ├── main.jsx              # Entry point
│   ├── App.jsx               # Main App component với routes
│   │
│   ├── components/           # Tất cả components
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Logo.jsx
│   │   │   └── MainLayout.jsx
│   │   │
│   │   └── common/          # Reusable components
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       └── Divider.jsx
│   │
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx
│   │   ├── ExplorePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   │
│   ├── styles/              # CSS files
│   │   └── index.css
│   │
│   └── utils/               # Helper functions
│       └── helpers.js
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🔄 Các bước di chuyển thư mục

### Bước 1: Di chuyển Layout Components
```
Di chuyển từ: src/shared/components/ui/
           → src/components/layout/

- Header.jsx
- Footer.jsx
- Logo.jsx

Di chuyển từ: src/shared/layouts/
           → src/components/layout/

- MainLayout.jsx
```

### Bước 2: Di chuyển Common Components
```
Di chuyển từ: src/shared/components/form/
           → src/components/common/

- FormInput.jsx (đổi tên thành Input.jsx)
- Divider.jsx
```

### Bước 3: Di chuyển App.jsx
```
Di chuyển từ: src/app/App.jsx
           → src/App.jsx
```

### Bước 4: Tạo thư mục Pages
```
Tạo mới: src/pages/

Tạo các file trang:
- HomePage.jsx
- ExplorePage.jsx
- LoginPage.jsx
- RegisterPage.jsx
```

### Bước 5: Di chuyển Assets
```
Di chuyển từ: src/assets/
           → public/assets/
```

### Bước 6: Xóa các thư mục không cần thiết
```
Có thể xóa (nếu đang trống hoặc chưa dùng):
- src/app/
- src/shared/
- src/features/
- src/redux/
- src/api/ (giữ lại nếu đã có code)
- src/services/ (giữ lại nếu đã có code)
- src/hooks/ (giữ lại nếu đã có code)
```

## 📝 Cập nhật Import Paths

### Trong main.jsx:
```jsx
// Cũ
import App from './app/App'

// Mới
import App from './App'
```

### Trong App.jsx:
```jsx
// Cũ
import MainLayout from '../shared/layouts/MainLayout'

// Mới
import MainLayout from './components/layout/MainLayout'
```

### Trong các page components:
```jsx
// Cũ
import FormInput from '../shared/components/form/FormInput'

// Mới
import Input from '../components/common/Input'
```

### Trong MainLayout.jsx:
```jsx
// Cũ
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'

// Mới
import Header from './Header'
import Footer from './Footer'
```

## 💡 Lợi ích của cấu trúc mới

1. ✅ **Đơn giản hơn**: Ít thư mục lồng nhau, dễ tìm file
2. ✅ **Rõ ràng hơn**: Mỗi thư mục có mục đích cụ thể
3. ✅ **Dễ bảo trì**: Không cần nhớ nhiều tầng thư mục
4. ✅ **Dễ mở rộng**: Thêm page hoặc component mới dễ dàng
5. ✅ **Chuẩn convention**: Theo pattern phổ biến của React

## 🚀 Thứ tự thực hiện

1. Tạo các thư mục mới (`components/layout`, `components/common`, `pages`)
2. Di chuyển từng file một và cập nhật import paths
3. Test lại ứng dụng sau mỗi lần di chuyển
4. Xóa thư mục cũ khi đã chuyển xong

## ⚠️ Lưu ý

- Luôn commit code trước khi tái cấu trúc
- Di chuyển từng thư mục một để tránh lỗi
- Cập nhật import paths ngay sau khi di chuyển
- Test kỹ sau mỗi bước thay đổi
