import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';
import ContactUsPage from './pages/ContactUsPage';
import Layout from "./layouts/Layout";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
      </Routes>
    </Layout>
  )
}

export default App
