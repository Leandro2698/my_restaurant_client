/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Avatar, Box, Card, CardContent, Grid, Typography,
} from '@mui/material';
import { ArrowDownward, Money } from '@mui/icons-material';
import { PropTypes } from 'prop-types';

function MainCard(props) {
  const { sx } = props;
  return (
    <Card sx={sx}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              BUDGET
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              $24k
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'error.main',
                height: 56,
                width: 56,
              }}
            >
              <Money />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ArrowDownward color="error" />
          <Typography
            color="error"
            sx={{
              mr: 1,
            }}
            variant="body2"
          >
            12%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
MainCard.propTypes = {
  sx: PropTypes.object,

};

MainCard.defaultProps = {
  sx: {},
};
export default MainCard;
