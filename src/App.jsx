import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import RegisterPage from './components/Register.jsx'
import LoginPage from './components/Login.jsx'
import Cart from './components/Cart.jsx'
import Pizza from './components/Pizza.jsx'


function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/*<RegisterPage />*/}
      {/*<LoginPage />*/}
      {/* <Cart/> */}
      <Pizza />
      <Footer />
    </>
  )
}

export default App
