# Mr. Hyde Store

![Home Page](https://i.ibb.co/846q5QxT/mrhydestore-netlify-app.png)

A premium e-commerce platform featuring interactive 3D product visualization, Chrome Heart-inspired designs, and a seamless shopping experience built with React, Three.js, and Firebase.

[View Live Demo](https://mrhydestore.netlify.app/)

## ✨ Features

- **Interactive 3D Models**: Interactive 3D models and animations
- **Neomorphic UI Design**: Modern, sleek interface with depth and dimension
- **Responsive Design**: Optimized experience across desktop, tablet, and mobile devices
- **User Authentication**: Email/password and Google sign-in integration
- **Real-time Updates**: Instant cart and favorites management

## 🖼️ Screenshots

<div align="center">
  <img src="https://i.ibb.co/20QyCpYX/mrhydestore-netlify-app-chrome-Heart.png" width="48%" alt="Chrome Heart Collection">
  <img src="https://i.ibb.co/5xgXn3hF/mrhydestore-netlify-app-chrome-Heart-Products.png" width="48%" alt="Product Collection View">
  <img src="https://i.ibb.co/wFQQ3Zxt/mrhydestore-netlify-app-shopping-Cart.png" width="48%" alt="Shopping Cart">
  <img src="https://i.ibb.co/Z1wn0hRS/mrhydestore-netlify-app-login.png" width="48%" alt="Authentication Page">
</div>

### Mobile Experience

<div align="center">
  <img src="https://i.ibb.co/q3VnpXkQ/mrhydestore-netlify-app-i-Phone-12-Pro.png" width="24%" alt="Mobile Home">
  <img src="https://i.ibb.co/8LwzG5Wg/mrhydestore-netlify-app-i-Phone-12-Pro-chrome-Heart.png" width="24%" alt="Mobile Collection">
  <img src="https://i.ibb.co/bM3shypV/mrhydestore-netlify-app-i-Phone-12-Pro-menu.png" width="24%" alt="Mobile Menu">
  <img src="https://i.ibb.co/YBfG132B/mrhydestore-netlify-app-i-Phone-12-Pro-cart.png" width="24%" alt="Mobile Cart">
</div>

## 🛠️ Technologies

- **Frontend**: React 18, TypeScript, Vite
- **3D Rendering**: Three.js with React Three Fiber & Drei
- **State Management**: React Context API
- **Authentication**: Firebase Auth with Google Sign-In
- **Database**: Firestore
- **Styling**: CSS Modules with Neomorphic design principles

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Hyde-R/Mr-Hyde-Store.git

# Navigate to the project directory
cd Mr-Hyde-Store

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 📂 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── models/        # 3D model components
│   ├── authentication/ # Login and signup components
│   ├── forms/         # Form components
│   └── layout/        # Layout components
├── contexts/          # React contexts for state management
├── hooks/             # Custom React hooks
├── pages/             # Page components
│   ├── home/          # Home page with 3D showcase
│   ├── collections/   # Collection pages
│   └── shop/          # Shop pages
├── firebase/          # Firebase configuration and utilities
└── utils/             # Helper functions and utilities
```

## 🔍 Key Implementation Details

- **3D Product Visualization**: Custom 3D models with interactive controls and animations
- **Scroll-Based Animations**: Parallax effects and scroll-triggered animations
- **Authentication Flow**: Secure login/signup with Google integration and error handling
- **Responsive Design**: Adaptive layouts with mobile-specific optimizations
- **Performance Optimization**: Code splitting, lazy loading, and optimized 3D assets

## 🔮 Future Improvements

- [ ] Implement AR product visualization
- [ ] Add payment processing integration
- [ ] Develop admin dashboard for product management
- [ ] Implement user reviews and ratings
- [ ] Add internationalization support

## 👤 Author

**Hyde Grey**

- LinkedIn: [Hyde François Khamsing](https://www.linkedin.com/in/hyde-fran%C3%A7ois-khamsing/)
- GitHub: [Hyde-R](https://github.com/Hyde-R)

## 📝 License

This project is [MIT](LICENSE) licensed.

---

<p align="center">Made with &#x1F5A4; and Three.js</p>
