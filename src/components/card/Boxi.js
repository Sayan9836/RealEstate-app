
import { DomainAddOutlined } from '@mui/icons-material'
import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Boxi = ({ item }) => {
  return (
    <Card sx={{ width: '25vw', height: '60vh' }}>
      <CardMedia

        component="img"
        height="250"
        image={item.img}
        alt="Paella dish"
      />
      <Box width='98%' height='42%'  display='flex' >
        <Box marginLeft='1rem' flex='3'>
          < Box marginBottom='0.1rem'>
            <Typography color='rgba(0,100,255,1)' fontWeight='600' variant='h5'>{item.Price.amount}/month</Typography>
          </Box>
          <Box>
            <Typography color='rgba(0,0,0,1)' variant='h4' fontWeight='700'>{item.name}</Typography> 
          </Box>
          <Box>
            <Typography variant='h5' >{item.PropertyType}</Typography> 
          </Box>
          <Box>
            <Typography variant='h5' >{item.month.name}</Typography> 
          </Box>
          <Box>
            <Typography sx={{opacity:'0.6'}} >{item.address}</Typography>  
          </Box>
        </Box>
        <Box flex='1.5' display='flex'  justifyContent='center' mt='2rem'>
          <DomainAddOutlined sx={{fontSize:'3vw'}}/>
        </Box>
      </Box>

    </Card>
  )
}

export default Boxi
