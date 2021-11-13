import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Explore from '../Explore/Explore';
import Navber from '../../Shared/Navber/Navber';
import Footer from '../../Home/Footer/Footer';

const Explores = () => {
    const [explore, setExplore] = useState([]);

    useEffect(() => {
        fetch('https://dry-wildwood-45412.herokuapp.com/explores')
            .then(res => res.json())
            .then(data => setExplore(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navber />
            <Typography sx={{ color: 'info.main', m: 3 }} gutterBottom variant="h6" component="div">
                OUR PRODUCTS
            </Typography>
            <Typography sx={{ fontWeight: '600', color: 'success.main' }} gutterBottom variant="h4" component="div">
                PRODUCTS WE PROVIDE
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    explore.map(explore => <Explore
                        key={explore._id}
                        explore={explore}
                    ></Explore>)
                }
                <Footer />
            </Grid>
        </Box>
    );
};

export default Explores;