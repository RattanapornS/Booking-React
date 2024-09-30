// DestinationCard.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const DestinationCard = ({ name, image }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"  // เปลี่ยนความสูงเป็น 300px
        image={image}
        alt={name}
        style={{ objectFit: 'cover' }} // ปรับให้รูปภาพเต็มกรอบ
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
