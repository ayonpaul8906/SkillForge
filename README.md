# ⚡ SkillForge - Online Course Platform

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

SkillForge is a modern, responsive single-page application (SPA) built with React. It simulates a premium online learning marketplace where users can browse courses, manage their profiles, and enroll in classes using a persistent shopping cart system.

The project demonstrates advanced React patterns including **global state management**, **protected routing**, **custom hooks**, and **component animations**.

## 🚀 Features

### Core Functionality
- **Authentication System**: Secure-feel login/logout flow with `localStorage` persistence.
- **Dynamic Course Filtering**: Real-time search and category filtering (Development, Design, Marketing, etc.).
- **Shopping Cart**: Add/remove courses with instant UI updates and toast notifications.
- **Responsive Design**: Fully optimized for Mobile (414px) to Large Desktop (1600px).

### UI/UX Enhancements
- **Skeleton Loading**: Shimmer effects while data is fetching to improve perceived performance.
- **Glassmorphism UI**: Modern frosted glass effects on cards and navigation.
- **Animations**: Smooth page transitions and hover effects using `framer-motion`.
- **Toast Notifications**: Interactive feedback for user actions (e.g., "Added to Cart").
- **API Integration**: Fetches daily inspirational quotes from external public APIs to simulate dynamic content.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (via Vite)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Styling**: Plain CSS with CSS Variables & Flexbox/Grid
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 📂 Project Structure

```text
src/
├── components/
│   ├── CourseCard.jsx     # Individual course item with interactions
│   ├── Hero.jsx           # Landing page hero section with API quote
│   ├── Login.jsx          # Authentication form
│   ├── Navbar.jsx         # Responsive navigation with dropdowns
│   └── SkeletonCard.jsx   # Loading state placeholder
├── lib/
│   └── data.js            # Mock data for courses
├── pages/
│   ├── Cart.jsx           # Shopping cart page logic
│   ├── LandingPage.jsx    # Public marketing page
│   ├── Mentors.jsx        # Static mentors grid page
│   └── Profile.jsx        # User settings form
├── App.css                # Global styles and variables
├── App.jsx                # Main routing and state logic
├── index.css              # Base Tailwind or global resets (if used)
└── main.jsx               # Entry point
```

## ⚡ Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

* **Node.js** (v14 or higher)
* **npm** (v6 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/skillforge.git](https://github.com/yourusername/skillforge.git)
    cd skillforge
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the app.

---

## 📖 Usage Guide

1.  **Landing Page**: When you first load the app, you will see the public landing page.
2.  **Login**: Click "Get Started" or "Sign In".
    > **Note:** Since this is a frontend demo, you can enter *any* email/password to log in.
3.  **Dashboard**: Once logged in, you gain access to the **Explore**, **Mentors**, **Profile**, and **Cart** pages.
4.  **Enroll**: Click "Enroll" on any course card to add it to your cart.
5.  **Search**: Type in the search bar (e.g., "Python") to instantly filter the course grid. Press `Enter` to auto-scroll to results.

---

## 🔮 Future Improvements

- [ ] Backend integration (Node.js/Express) for real authentication.
- [ ] Stripe integration for actual payment processing.
- [ ] User specific course progress tracking.
- [ ] Dark mode toggle.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

