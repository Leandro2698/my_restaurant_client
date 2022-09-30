/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------
function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg
        xmlns="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 58 58"
        xmlSpace="preserve"
      >
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path fill="url(#BG1)" d="M31,26.962h26.924C56.94,12.541,45.421,1.022,31,0.038V26.962z" />
          <path fill="url(#BG2)" d="M50.386,48.615c4.343-4.71,7.151-10.858,7.614-17.653H32.733L50.386,48.615z" />
          <path fill="url(#BG3)" d="M27,28.134V0.038C11.918,1.067,0,13.619,0,28.962C0,36.25,2.695,42.905,7.134,48L27,28.134z" />
          <path
            fill="url(#BG3)"
            d="M28.414,32.376L9.962,50.828c5.095,4.439,11.75,7.134,19.038,7.134c6.99,0,13.396-2.479,18.401-6.599L28.414,32.376z"
          />
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
export default Logo;
Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

Logo.defaultProps = { disabledLink: undefined, sx: undefined };
