import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://dry-wildwood-45412.herokuapp.com/explores')
            .then(res => res.json())
            .then(data => {
                const sliceData = data.slice(0, 6)
                setProducts(sliceData)
            })
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'primary.main', m: 3 }} gutterBottom variant="h6" component="div">
                    OUR PRODUCTS
                </Typography>
                <Typography sx={{ fontWeight: '600', color: 'success.main' }} gutterBottom variant="h4" component="div">
                    PRODUCTS WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;