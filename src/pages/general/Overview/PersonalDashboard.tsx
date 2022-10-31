/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { useReactiveVar } from "@apollo/client";
import { Button } from "@mui/material";
import AddVisualisationOverview from "./AddVisualisationOverview";
import { visualVar } from "../../../ApolloProvider";

function PersonalDashboard() {
  const visualisations = useReactiveVar(visualVar);

  const deleteVisual = (id: number) => {
    const filteredVisual = visualisations.filter((e: any) => e.id !== id);
    visualVar(filteredVisual);
  };

  return (
    <>
      {visualisations.map(e => (
        <>
          <Button onClick={() => deleteVisual(e.id)}>Delete</Button>
          <p>{e.name}</p>
          <p>{e.id}</p>
        </>
      ))}
      <AddVisualisationOverview />
    </>
  );
}
export default PersonalDashboard;
