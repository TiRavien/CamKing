import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import { Rating, Typography } from '@mui/material';

const Review = (props) => {
    const [value, setValue] = React.useState(5);

    return (
        <div className="p-3">
            <div className="row bg-secondary text-white p-5">
                <div className="col-lg-6">
                    <h3><span className="text-primary">POPULAR</span> CAMERA</h3>
                    <hr />
                    <p>A camera is an optical instrument that captures a visual image. At a basic level, cameras are sealed boxes (the camera body) with a small hole (the aperture) that allows light through to capture an image on a light-sensitive surface (usually photographic film or a digital sensor).</p>
                </div>
                <div className="col-lg-6">
                    <img style={{ width: '200' }} src="https://i.ibb.co/Jcvp9Bf/great400x300.jpg" alt="" />
                </div>
            </div>
            <Typography sx={{ fontWeight: '600', p: 3, color: 'success.main' }} gutterBottom variant="h4" component="div">
                ClientReview
            </Typography>
            <CardGroup>
                <Card style={{ minWidth: 275, border: 0 }}>
                    <Card.Body>
                        <HowToRegIcon />
                        <Card.Title>Md Chowhury Ravien</Card.Title>
                        <Typography component="legend"></Typography>
                        <Rating name="read-only" value={value} readOnly />
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ minWidth: 275, border: 0 }}>
                    <Card.Body>
                        <AccountBoxIcon />
                        <Card.Title>Mr Tareq Imtiaz</Card.Title>
                        <Typography component="legend"></Typography>
                        <Rating name="read-only" value={value} readOnly />
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ minWidth: 275, border: 0 }}>
                    <Card.Body>
                        <PersonIcon />
                        <Card.Title>Mr Imtiaz Ahmed</Card.Title>
                        <Typography component="legend"></Typography>
                        <Rating name="read-only" value={value} readOnly />
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Review;