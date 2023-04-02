import "./App.css";
import "./index.css";
// import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Container from "react-bootstrap/Container";
import CartScreen from "./screens/CartScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./screens/ProductDetails";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import AdminDashboard from "./screens/admin/AdminDashboard";
import { useSelector } from "react-redux";
import Pagenotfound from "./screens/PagenotFound";
import CretaeCategory from "./screens/admin/CretaeCategory";
import CreateProduct from "./screens/admin/CreateProduct";
import User from "./screens/admin/User";
import Products from "./screens/admin/Products";
function App() {
  const userLogin = useSelector((state) => state.userLogin);
    const {userInfo } = userLogin;
    var isAdmin = false;
    if(userInfo && userInfo.isAdmin) isAdmin=true;
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          <Routes>
           <Route path="/" element={<HomeScreen />} exact />

            <Route  path="/login" element={<LoginScreen/>} /> 
            <Route  path="/payment" element={<PaymentScreen/>} /> 
            <Route  path="/order/:id" element={<OrderScreen/>} /> 
            <Route  path="/placeorder" element={<PlaceOrderScreen/>} /> 
            <Route  path="/register" element={<RegisterScreen/>} /> 
            <Route  path="/product/:id" element={<ProductDetails/>} /> 
            <Route  path="/cart/:id?" element={<CartScreen/>} /> 
            <Route  path="/shipping" element={<ShippingScreen/>} /> 
            <Route  path="/dashboard" element={isAdmin ? <AdminDashboard/> : <ProfileScreen/>} /> 
            <Route  path="/dashboard/admin/create-category" element={<CretaeCategory/>} /> 
            <Route  path="/dashboard/admin/create-product" element={<CreateProduct/>} /> 
            <Route  path="/dashboard/admin/users" element={<User/>} /> 
            <Route  path="/dashboard/admin/products" element={<Products/>} /> 
            <Route  path="*" element={<Pagenotfound/>} /> 
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>         
  );
}
export default App;
