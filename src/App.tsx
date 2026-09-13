import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import AvailableProducts from './components/AvailableProducts'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Nav/>
      <Banner/>
      <AvailableProducts />
      <Footer/>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
