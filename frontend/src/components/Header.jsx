import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = ({ title, NextPageBtn, PreviousPageBtn }) => {
  return (
    <Box mt={4} mb={2} display="flex" justifyContent="space-between" alignItems="center">
      {PreviousPageBtn}
      <Typography variant="h4">{title}</Typography>
      {NextPageBtn}
    </Box>
  );
};

export default Header;
