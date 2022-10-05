import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MinimalLayout from '../layouts/minimalLayout/MinimalLayout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import RequireAuth from '../pages/auth/RequireAuth';
import Account from '../pages/general/Account';
import Overview from '../pages/general/Overview';
import Product from '../pages/management';
import FirstRestaurant from '../pages/management/restaurant/FirstRestaurant';
import Page404 from '../pages/Page404';

const MainLayout = lazy(() => import('../layouts/mainLayout'));

function Router() {
  return (

    <BrowserRouter>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          <Route element={<RequireAuth />}>
            <Route path="/first-restaurant" element={<FirstRestaurant />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Overview />} />
              <Route path="/acount" element={<Account />} />
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
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
