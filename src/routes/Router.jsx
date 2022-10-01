import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MainLayout from '../layouts/mainLayout/MainLayout';
import MinimalLayout from '../layouts/minimalLayout/MinimalLayout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import RequireAuth from '../pages/auth/RequireAuth';
import Account from '../pages/general/Account/Account';
import Overview from '../pages/general/Overview/Overview';
import Product from '../pages/management/Product';
import Page404 from '../pages/Page404';

function Router() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          {/* we want to protect these routes */}
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Overview />} />
            <Route path="acount" element={<Account />} />
            <Route path="/product" element={<Product />} />
          </Route>
        </Route>
        {/* public routes */}
        <Route path="/" element={<MinimalLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
