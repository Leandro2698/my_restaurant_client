import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import MinimalLayout from '../layouts/minimalLayout/MinimalLayout';
import WelcomLayout from '../layouts/welcomLayout/OtherLayout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import RequireAuth from './requireRoutes/RequireAuth';
import RequireRestaurant from './requireRoutes/RequireRestaurant';
import Account from '../pages/general/Account';
import Overview from '../pages/general/Overview';
import Product from '../pages/management';
import Page404 from '../pages/Page404';
import Welcom from '../pages/welcom/Index';

function Router() {
  return (

    <BrowserRouter>

      <Routes>
        {/* for user with restaurants */}
        <Route element={<RequireRestaurant />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Overview />} />
            <Route path="acount" element={<Account />} />
            <Route path="/product" element={<Product />} />
          </Route>
        </Route>
        {/* for user register */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<WelcomLayout />}>
            <Route path="/welcom" element={<Welcom />} />
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
