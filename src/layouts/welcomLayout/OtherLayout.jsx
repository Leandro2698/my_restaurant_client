import React from 'react';
import { Outlet } from 'react-router-dom';

// ==============================|| OTHER LAYOUT ||============================== //

function OtherLayout() {
  return (
    <>
      <h1>MINIMAL LAYOU Outlet</h1>
      <Outlet />
    </>
  );
}

export default OtherLayout;
