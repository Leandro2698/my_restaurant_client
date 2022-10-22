import { Outlet } from "react-router-dom";

// ==============================|| MINIMAL LAYOUT ||============================== //

function MinimalLayout() {
  return (
    <>
      <h1>MINIMAL LAYOU Outlet</h1>
      <Outlet />
    </>
  );
}

export default MinimalLayout;
