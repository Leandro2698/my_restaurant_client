/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { RestaurantProvider } from "../../context/RestaurantContext";
import { GET_ALL_RESTAURANTS } from "../../graphql/queries/user/restaurants/restaurant";

function RequireAuth() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [restaurants, setRestaurants] = useState([]);
  console.log(`user`, user);
  if (user) {
    const { loading, data } = useQuery(GET_ALL_RESTAURANTS, {
      variables: { userId: user.id },
    });

    useEffect(() => {
      if (data) {
        setRestaurants(data.getUser.restaurants);
      }
    }, [data, loading]);
  }
  console.log(`restaurants requireAuth`, restaurants);

  if (user) {
    return (
      <RestaurantProvider userRestaurants={restaurants}>
        <Outlet />
      </RestaurantProvider>
    );
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}
export default RequireAuth;
