import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [data, setData] = useState({});

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        // console.log(value, field, newData);
        setData(newData);
    }

    const handleLogin = e => {
        // alert("submit");
        if (data.password !== data.repassword) {
            alert("Sorry! password didn't match")
            return 
        }
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={12}>
                    <Typography variant="h6" gutterBottom component="div">
                        Register
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            id="standard-basic"
                            label="Enter Email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            id="standard-password-input"
                            label="Enter Password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            id="standard-password-input"
                            label="Enter same-Password"
                            type="password"
                            name="repassword"
                            onChange={handleChange}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button sx={{ width: '50%', m: 2 }} type="submit" variant="contained">Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button sx={{ width: '50%', m: 2 }} size="medium">Already Registered? Go to Login</Button>
                        </NavLink>
                    </form>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Register;