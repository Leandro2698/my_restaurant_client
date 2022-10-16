/* eslint-disable import/no-cycle */
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import MinimalLayout from '../layouts/minimalLayout/MinimalLayout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import RequireAuth from '../pages/auth/RequireAuth';
import Account from '../pages/general/Account';
import Overview from '../pages/general/Overview';
import Product from '../pages/management';
import CreateRestaurant from '../pages/management/restaurant/CreateRestaurant';
import Restaurants from '../pages/management/restaurant/Restaurants';
import Page404 from '../pages/Page404';

function Router() {
  return (

    <BrowserRouter>

      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/create-restaurant" element={<CreateRestaurant />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Overview />} />
            <Route path="/acount" element={<Account />} />
            <Route path="/product" element={<Product />} />
            <Route path="/restaurants" element={<Restaurants />} />
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
