
import { Box } from '@mui/material'
import React from 'react'
import Boxi from '../card/Boxi'

const Boxes = ({data}) => {
  return (
    <Box sx={{display:'flex', gap:'2rem',flexWrap:'wrap'}}>
      {
        data.map((item)=>{
          return <Boxi key={item.id} item={item}/>
        })
      }
    </Box>
  )
}
 export default Boxes;
   