import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Grid, Typography, Container} from '@mui/material';
import {Link} from 'react-router-dom';

const Explore = (props) => {
    const { _id, name, img, describe, price } = props.explore || {};
    return (
        <Grid item xs={4} sm={4} md={6}>
            <Container>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        backgroundColor="primary"
                        component="img"
                        height="300"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" component="div">
                            {price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {describe}
                        </Typography>
                    </CardContent>
                    
                        <Link to={`/explores/${_id}`}>
                            Purchase Now...
                        </Link>
                    
                </Card>
            </Container>
        </Grid>
    );
};

export default Explore;