/* eslint-disable import/no-cycle */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayout";
import MinimalLayout from "../layouts/minimalLayout/MinimalLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RequireAuth from "../pages/auth/RequireAuth";
import Account from "../pages/general/Account/Account";
import Dashboard from "../pages/general/Dashboard/Dashboard";
import ListRestaurants from "../pages/management/restaurant/restaurants-list/ListRestaurants";
import RestaurantView from "../pages/management/restaurant/restaurant-view/RestaurantView";
import Page404 from "../pages/Page404";
import ListProducts from "../pages/management/products/products-list/ListProducts";
import ProductView from "../pages/management/products/product-view/ProductView";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/products/list" element={<ListProducts />} />
            <Route path="/restaurants/list" element={<ListRestaurants />} />
            <Route path="/restaurant/:id" element={<RestaurantView />} />
            <Route path="/product/:id" element={<ProductView />} />
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
