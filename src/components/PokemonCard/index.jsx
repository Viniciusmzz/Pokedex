import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { typeHandler } from '../../utius';


export default function PokemonCard({ name, image, types }) {
  
  return (
    <Card sx={{ maxWidth: 400,  backgroundColor: "#8fbbaf" }}>
      <CardActionArea>
        <CardMedia
          
          component="img"
          height="180"
          image={ image }
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          <Typography gutterBottom variant="h7" component="div">
            {typeHandler(types)}

          </Typography>
    
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}
