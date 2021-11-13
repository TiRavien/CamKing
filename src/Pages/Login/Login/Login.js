import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [data, setData] = useState({});
    const { user, loginUser, isLoading, error } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, data);
        const newData = { ...data };
        newData[field] = value;
        setData(newData);
    }

    const handleLogin = e => {
        loginUser(data.email, data.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={12}>
                    <Typography variant="h6" gutterBottom component="div">
                        Login
                    </Typography>
                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            id="standard-basic"
                            label="Email"
                            type="email"
                            name="email"
                            onBlur={handleBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleBlur}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button sx={{ width: '50%', m: 2 }} type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button sx={{ width: '50%', m: 2 }} size="medium">New user? Go to Register</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login Successfull!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;