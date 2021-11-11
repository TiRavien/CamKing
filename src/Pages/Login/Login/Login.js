import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({});

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, data);
        const newData = { ...data };
        newData[field] = value;
        setData(newData);
    }

    const handleLogin = e => {
        alert("submit")
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={12}>
                    <Typography variant="h6" gutterBottom component="div">
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            id="standard-basic"
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button sx={{ width: '50%', m: 2 }} type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button sx={{ width: '50%', m: 2 }} size="medium">New user? Go to Register</Button>
                        </NavLink>
                    </form>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;