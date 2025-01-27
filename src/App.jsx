import { Route, Routes, Navigate } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './components/pages/Home.jsx'
import RegisterPage from './components/pages/Register.jsx'
import LoginPage from './components/pages/Login.jsx'
import Cart from './components/pages/Cart.jsx'
import Pizza from './components/pages/Pizza.jsx'
import Profile from './components/pages/Profile.jsx'
import NotFound from './components/pages/NotFound.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/pizza/p001"
          element={<Pizza />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/404"
          element={<NotFound />}
        />

        <Route
        path="*"
        element={<Navigate to="/404" replace />}
        />

      </Routes>
      <Footer />
    </>
  )
}

export default App
