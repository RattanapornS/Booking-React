import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material'; // Import CardActionArea

const DestinationCard = ({ name, image, onClick }) => {  // onClick passed as a prop
  return (
    <Card>
      <CardActionArea onClick={onClick}>  {/* Ensure onClick is provided as a prop */}
        <CardMedia
          component="img"
          height="300"  // Set height to 300px
          image={image}
          alt={name}
          style={{ objectFit: 'cover' }} // Adjust image to fit cover
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DestinationCard;
