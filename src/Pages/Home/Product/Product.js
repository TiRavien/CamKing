import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, name, describe, img } = props.product || {};
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {describe}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/explores/${_id}`}>
                        Purchase
                    </Link>
                </CardActions>

            </Card>
        </Grid>
    );
};

export default Product;