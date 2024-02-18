import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';




import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"
import { ProfilePage } from './pages/ProfilePage';
import { SellerPage } from './pages/SellerPage';
import Admin from './pages/Admin/Admin';
import CustomerAdmin from './components/CustomerAnalytics';
import SellerAdmin from './components/SellerAnalytics';
import AnalyticsAdmin from './components/AnalyticsAdmin';
import CustomerAnalytics from './components/CustomerAnalytics';
import SellerAnalytics from './components/SellerAnalytics';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


const root = ReactDOM.createRoot(document.getElementById('root'));
//const persistor = persistStore(store);
root.render(
 
  <BrowserRouter>
 
    <Provider store={store}>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/seller" element={<SellerPage/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="admin/customeranalytics" element={<CustomerAnalytics/>}></Route>
        <Route path="admin/selleranalytics" element={<SellerAnalytics/>}></Route>
        <Route path="admin/adminanalytics" element={<AnalyticsAdmin/>}></Route>

        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer/>
    

    </Provider>
  </BrowserRouter>
);


