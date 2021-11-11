import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';

const products = [
    {
        id: 1,
        name: 'Cannon EOS 90D',
        description: 'The Canon EOS 90D camera features a powerful 32.5 Megapixel CMOS (APS-C) sensor that can capture high-resolution images. Utilizing a sophisticated light-capturing design, it provides high sensitivity for high ISO capture with reduced noise, delivering clear.',
        img: "https://i.ibb.co/FVQwY3p/cannon-1.jpg"
    },
    {
        id: 2,
        name: 'Cannon EOS 6D',
        description: 'The EOS 6D features a newly developed Canon Full-Frame 20.2 Megapixel CMOS sensor for high resolution, perfectly detailed images delivered with incredible speed and performance. A 35.8mm x 23.9mm sensor captures images of 5472 x 3648 pixels with a pixel size of 6.55 µm.',
        img: "https://i.ibb.co/dQhdTSv/canon6d.jpg"
    },
    {
        id: 3,
        name: 'Sony a30',
        description: 'Launched in September 2011 , Sony SLT-A35 is a 16.0MP Entry-Level DSLR camera with a APS-C (23.5 x 15.6 mm ) sized CMOS sensor, built-in Image Stabilization and Sony/Minolta Alpha lens mount. Sony replaced the older Sony A33 with this model and later A30 was.',
        img: "https://i.ibb.co/jMjgTfL/sony-1.jpg"
    },
    {
        id: 4,
        name: 'Sony HD',
        description: 'Handycam is a Sony brand used to market its camcorder range. It was launched in 1985 as the name of the first Video8 camcorder, replacing Sonys previous line of Betamax-based models, and the name was intended to emphasize the "handy" palm size nature of the camera.',
        img: "https://i.ibb.co/rtCwy12/Lausanne-Switzerland-January-4-2013-Sony-hdr-cx730-camcorder-isolated-on-white-background-this-camco.jpg"
    },
    {
        id: 5,
        name: 'Nikon D2',
        description: 'For generations, Nikon cameras have been trusted by photographers and picture takers of every caliber for their enduring performance and outstanding image quality, empowering them to capture the essence of the moment.Choose from DSLR-style super zooms.',
        img: "https://i.ibb.co/zV3SzQV/nikon-1.jpg"
    },
    {
        id: 6,
        name: 'Nikon D3500',
        description: 'You dont need to be a photographer to know a great photo when you see one. And you dont need to be a photographer to take a great photo—you just need the D3500. Its as easy to use as a point-and-shoot, but it takes beautiful DSLR photos and videos that get noticed.',
        img: "https://i.ibb.co/nctq3dS/Nikon2.jpg"
    }
]


const Products = () => {
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