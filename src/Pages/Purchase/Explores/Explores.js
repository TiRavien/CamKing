import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Explore from '../Explore/Explore';


const explores = [
    {
        id: 1,
        name: 'Cannon EOS 90D',
        price: '৳80k',
        describe: 'The Canon EOS 90D camera features a powerful 32.5 Megapixel CMOS (APS-C) sensor that can capture high-resolution images. Utilizing a sophisticated light-capturing design, it provides high sensitivity for high ISO capture with reduced noise, delivering clear, detailed results even in low light.',
        img: "https://i.ibb.co/FVQwY3p/cannon-1.jpg"
    },
    {
        id: 2,
        name: 'Cannon EOS 6D',
        price: '৳89k',
        describe: 'The EOS 6D features a newly developed Canon Full-Frame 20.2 Megapixel CMOS sensor for high resolution, perfectly detailed images delivered with incredible speed and performance. A 35.8mm x 23.9mm sensor captures images of 5472 x 3648 pixels with a pixel size of 6.55 µm square for fantastic detail.',
        img: "https://i.ibb.co/dQhdTSv/canon6d.jpg"
    },
    {
        id: 3,
        name: 'Sony a30',
        price: '৳92k',
        describe: 'Launched in September 2011 , Sony SLT-A35 is a 16.0MP Entry-Level DSLR camera with a APS-C (23.5 x 15.6 mm ) sized CMOS sensor, built-in Image Stabilization and Sony/Minolta Alpha lens mount. Sony replaced the older Sony A33 with this model and later A30 was replaced with Sony A37. Follow the links.',
        img: "https://i.ibb.co/jMjgTfL/sony-1.jpg"
    },
    {
        id: 4,
        name: 'Sony HD',
        price: '৳79k',
        describe: 'Handycam is a Sony brand used to market its camcorder range. It was launched in 1985 as the name of the first Video8 camcorder, replacing Sonys previous line of Betamax-based models, and the name was intended to emphasize the "handy" palm size nature of the camera, made possible by format.',
        img: "https://i.ibb.co/rtCwy12/Lausanne-Switzerland-January-4-2013-Sony-hdr-cx730-camcorder-isolated-on-white-background-this-camco.jpg"
    },
    {
        id: 5,
        name: 'Nikon D2',
        price: '৳72k',
        describe: 'For generations, Nikon cameras have been trusted by photographers and picture takers of every caliber for their enduring performance and outstanding image quality, empowering them to capture the essence of the moment.Choose from DSLR-style super zooms, high-end slim zooms.',
        img: "https://i.ibb.co/zV3SzQV/nikon-1.jpg"
    },
    {
        id: 6,
        name: 'Nikon D3500',
        price: '৳100k',
        describe: 'You dont need to be a photographer to know a great photo when you see one. And you dont need to be a photographer to take a great photo—you just need the D3500. Its as easy to use as a point-and-shoot, but it takes beautiful DSLR photos and videos that get noticed. It feels outstanding in your hands.',
        img: "https://i.ibb.co/nctq3dS/Nikon2.jpg"
    },
    {
        id: 7,
        name: 'Fujifilm D3500',
        price: '৳88k',
        describe: 'You dont need to be a photographer to know a great photo when you see one. And you dont need to be a photographer to take a great photo—you just need the D3500. Its as easy to use as a point-and-shoot, but it takes beautiful DSLR photos and videos that get noticed. It feels outstanding in your hands.',
        img: "https://i.ibb.co/9sZYzRh/Fujifilm2x.jpg"
    },
    {
        id: 8,
        name: 'Fujifilm',
        price: '৳123k',
        describe: 'You dont need to be a photographer to know a great photo when you see one. And you dont need to be a photographer to take a great photo—you just need the D3500. Its as easy to use as a point-and-shoot, but it takes beautiful DSLR photos and videos that get noticed. It feels outstanding in your hands.',
        img: "https://i.ibb.co/tBjpz3D/Fujifilm.jpg"
    },
    {
        id: 9,
        name: 'Panasonic Lumix',
        price: '৳98k',
        describe: 'You dont need to be a photographer to know a great photo when you see one. And you dont need to be a photographer to take a great photo—you just need the D3500. Its as easy to use as a point-and-shoot, but it takes beautiful DSLR photos and videos that get noticed. It feels outstanding in your hands.',
        img: "https://i.ibb.co/XZXXDN8/panasonic-lumix1.jpg"
    },
    {
        id: 10,
        name: 'Panasonic Lumix D3500',
        price: '৳139k',
        describe: 'Lumix cameras also come in compact form, with fixed lenses. These include long-zoom travel cameras, bridge cameras and high-end compact cameras for enthusiasts. These are fantastic for those who prefer an all-in-one package, as opposed to the fuss and expense of swapping lenses. If youre a newbie. ',
        img: "https://i.ibb.co/yyrrbg7/panasonic-lumix.jpg"
    }
]

const Explores = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ color: 'info.main', m: 3 }} gutterBottom variant="h6" component="div">
                OUR PRODUCTS
            </Typography>
            <Typography sx={{ fontWeight: '600', color: 'success.main' }} gutterBottom variant="h4" component="div">
                PRODUCTS WE PROVIDE
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    explores.map(explore => <Explore
                        key={explore.id}
                        explore={explore}
                    ></Explore>)
                }
            </Grid>
        </Box>
    );
};

export default Explores;