import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="body2" color="text.secondary" align="center">
      © 2024 Booking.com Clone. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;