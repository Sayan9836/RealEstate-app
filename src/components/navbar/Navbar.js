import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assests/logo.png'
const Navbar = () => {
    return (
        <Card sx={{ width: '100vw'}}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", }}>
                <Box width='20vw' height='3vw'>
                    {/* <Typography color="blue" variant='h3'>Navbar</Typography> */}
                    <img width='100%'height='100%' src={logo} alt="logo" />
                </Box>
                <Box width='40vw' sx={{ display: "flex", alignItems: "center", gap: "3rem" }}>
                    <Button>Buy</Button>
                    <Button>Sell</Button>
                    <Button>Manage Properties</Button>
                    <Button>Resources</Button>
                </Box>

                <Box width='30vw'>
                    <Box marginLeft='10rem'>
                        <Button size='small' variant="outlined" sx={{ margin: '0 3rem', padding: '0.5rem',width:'6vw' }} >Sign Up</Button>
                        <Button size='small'  variant='contained' sx={{ padding: '0.5rem',width:'6vw' }} >Login</Button>
                    </Box>
                </Box>


            </Box>
        </Card>
    )
}

export default Navbar
