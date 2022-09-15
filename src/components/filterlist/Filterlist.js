import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { locationOptions, PriceOptions, PropertyTypeOptions, monthOptions } from '../../Data'
import Boxes from '../cards/Boxes'
import { AllData } from '../../Data'

const Filterlist = () => {

    const [filteredData, setFilteredData] = useState(AllData);
    // setFilteredData(AllData);
    const [location, setLocation] = useState('');
    const [month, setMonth] = useState('');
    const [Price, setPrice] = useState('');
    const [PropertyType, setPropertyType] = useState('');

    const [isSubmit,setIsSubmit]=useState(true);

    useEffect(() => {
       
        setFilteredData(AllData.filter((lo) => lo.location === location&&lo.month.range===month&& lo.Price.range === Price&&lo.PropertyType === PropertyType))
        console.log(filteredData);
        setIsSubmit(false)
    }, [location,month,Price,PropertyType])

    // useEffect(() => {
       
    //     setFilteredData(filteredData.filter((lo) => lo.location === location))
    //     console.log(filteredData);
    //     setIsSubmit(false)
    // }, [location])

    // useEffect(() => {
    //     setFilteredData(filteredData.filter((lo) => lo.month.range===month))
    //     console.log(filteredData);
    //     setIsSubmit(false)
    // }, [month])

    // useEffect(() => {
    //     setFilteredData(filteredData.filter((lo) => lo.Price.range === Price))
    //     console.log(filteredData);
    //     setIsSubmit(false)
    // }, [Price])

    // useEffect(() => {
    //     setFilteredData(filteredData.filter((lo) => lo.PropertyType === PropertyType))
    //     console.log(filteredData);
    //     setIsSubmit(false)
    // }, [PropertyType])
  
    
    return (
        <Box sx={{display:'flex',flexDirection:'column', width:'98vw',overflowX:'hidden',}}>
            <Box sx={{mb:'6rem', overflowX:'hidden'}} >

                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '3rem',}} mt='4rem' >
                    <Typography color='rgba(0,0,0,1)' marginLeft='3rem' fontWeight='600' variant='h3'>Search Properties For Rent</Typography>
                    <TextField  label='Search With Search Bar' sx={{ width: '20vw'}} />
                </Box>


                <Card sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2rem', width: '80vw', height: '10vh', marginLeft: '7rem', alignItems: 'center',backgroundColor:'white' }}>


                    <Box>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-filled-label">location</InputLabel>
                            <Select
                                // labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                style={{ width: 150 }}
                            >
                                {
                                    locationOptions?.map((lo) => {
                                        return <MenuItem key={lo.id} value={lo.name}>{lo.name}</MenuItem>
                                    })
                                }

                            </Select>
                        </FormControl>
                    </Box>


                    <Box>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-filled-label">Month</InputLabel>
                            <Select
                                // labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                style={{ width: 150 }}
                            >
                                {
                                    monthOptions?.map((lo) => {
                                        return <MenuItem key={lo.id} value={lo.name}>{lo.name}</MenuItem>
                                    })
                                }

                            </Select>
                        </FormControl>
                    </Box>


                    <Box>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-filled-label">Price</InputLabel>
                            <Select
                                // labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={Price}
                                onChange={(e) => setPrice(e.target.value)}
                                style={{ width: 150 }}
                            >
                                {
                                    PriceOptions?.map((lo) => {
                                        return <MenuItem key={lo.id} value={lo.name}>{lo.name}</MenuItem>
                                    })
                                }

                            </Select>
                        </FormControl>
                    </Box>


                    <Box>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-filled-label">PropertyType</InputLabel>
                            <Select
                                // labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={PropertyType}
                                onChange={(e) => setPropertyType(e.target.value)}
                                style={{ width: 150 }}
                            >
                                {
                                    PropertyTypeOptions?.map((lo) => {
                                        return <MenuItem key={lo.id} value={lo.name}>{lo.name}</MenuItem>
                                    })
                                }

                            </Select>
                        </FormControl>
                    </Box>

                    <Button variant='contained' onClick={()=>setIsSubmit(true)} >Search</Button>

                </Card>
            </Box>
            <Box display='flex' marginLeft='4rem' padding='4rem' width='100vw'>
                {
                   isSubmit&& <Boxes data={filteredData}/>
                }
              
            </Box>
        </Box>
    )
}

export default Filterlist

