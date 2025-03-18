# Mr. Hyde Store

![Home Page](https://i.ibb.co/846q5QxT/mrhydestore-netlify-app.png)

A premium e-commerce platform featuring interactive 3D product visualization, Chrome Heart-inspired designs, and a seamless shopping experience built with React, Three.js, and Firebase.

[View Live Demo](https://mrhydestore.netlify.app/)

## 🎥 Interactive 3D Experience

The heart of Mr. Hyde Store lies in its immersive 3D experience. Watch how the homepage comes to life with dynamic 3D models and smooth transitions:

<div class="sp-embed-player" data-id="cTeF2KniiLs"><script src="https://go.screenpal.com/player/appearance/cTeF2KniiLs"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTeF2KniiLs?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>

Key features demonstrated:

- Dynamic spiral pattern animation with scroll-based movement
- Smooth camera transitions when clicking collection cards
- Responsive 3D elements that adapt to viewport changes
- Interactive collection pages with floating 3D models

## ✨ Core Features

### 🎨 Interactive 3D Models

- Custom 3D models modified in Blender and implemented with React Three Fiber
- Dynamic spiral pattern animation with scroll-based movement
- Smooth camera transitions on collection card clicks
- Responsive 3D elements that adapt to viewport changes

### 🎭 Neomorphic UI Design

- Modern, sleek interface with depth and dimension
- Smooth transitions between pages and states
- Dynamic content loading and state management
- Responsive layouts for all devices

### 🔐 User Experience

- Email/password and Google sign-in integration
- Real-time cart and favorites management
- Smooth page transitions with Framer Motion
- Mobile-first responsive design

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **3D Rendering**: Three.js with React Three Fiber & Drei
- **State Management**: React Context API
- **Authentication**: Firebase Auth with Google Sign-In
- **Database**: Firestore
- **Styling**: CSS Modules with Neomorphic design principles
- **Animation**: Framer Motion for UI transitions

## 🖼️ Visual Showcase

### Desktop Experience

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

## 🔍 Technical Implementation

### 3D Product Visualization

- Custom 3D models with interactive controls and animations
- Scroll-based spiral pattern animation using React Three Fiber
- Camera transitions with easing animations for collection navigation
- Responsive 3D scene management with viewport adaptation

### Scroll-Based Animations

- Parallax effects and scroll-triggered animations
- Dynamic font size scaling based on scroll position
- Smooth model rotation and movement

### Performance Optimization

- Code splitting and lazy loading
- Optimized 3D assets
- Efficient state management
- Responsive image loading

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Hyde-grey/Mr-Hyde-Store.git

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

## 🔮 Future Improvements

- [ ] Implement AR product visualization
- [ ] Add payment processing integration
- [ ] Develop admin dashboard for product management
- [ ] Implement user reviews and ratings
- [ ] Add internationalization support

## 👤 Author

**Hyde Grey**

- LinkedIn: [Hyde François Khamsing](https://www.linkedin.com/in/hyde-fran%C3%A7ois-khamsing/)

<p align="center">Made with &#x1F5A4; and Three.js</p>
