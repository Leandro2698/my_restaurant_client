import { Container, styled } from '@mui/material';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import Logo from '../../../components/Logo';
import { AuthContext } from '../../../context/authContext';

// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));
// ----------------------------------------------------------------------

function CreateRestaurant() {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  if (!user.restaurants || user.restaurants.length < 1) {
    return (
      <RootStyle>

        <Container maxWidth="sm">
          <ContentStyle>

            create

          </ContentStyle>
        </Container>
      </RootStyle>
    );
  }
  return <Navigate to="/" state={{ from: location }} replace />;
}

export default CreateRestaurant;
