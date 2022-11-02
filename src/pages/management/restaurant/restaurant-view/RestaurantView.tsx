import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ONE_RESTAURANT } from "../../../../graphql/queries/user/restaurants/restaurant";

export default function RestaurantView() {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_ONE_RESTAURANT, {
    variables: { restaurantId: params.id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return <p>{data.restaurant.name}</p>;
}
