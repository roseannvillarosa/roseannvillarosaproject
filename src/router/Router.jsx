import {Routes, Route} from 'react-router'
import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import MainLayouts from '../layouts/MainLayouts'
import ContactPage from '../pages/ContactPage'
import AboutPage from '../pages/AboutPage'
function Router() {
  return (
    <Routes>
        <Route element={<MainLayouts/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Route>
    </Routes>
  )
}

export default Router