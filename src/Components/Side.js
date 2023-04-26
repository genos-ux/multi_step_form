import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
        <div className='child'>
            <Box sx={{ flexGrow: 1 }} style={{paddingLeft: '10%'}}>
            
            <Grid container spacing={8}>
                
                <Grid xs={3} className='grid'>


                
                </Grid>
                <Grid xs={6} style={{position:'relative',paddingLeft:'20px',marginLeft:'50px'}}>

                    <div style={{textAlign:'justify'}}>
                        <h2 className='info'>Personal info</h2>
                        <p className='info'>Please provide your name, email address and phone number.</p>
                        <Box
                                component="form"
                                
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                                >
                                <div style={{marginBottom:'14px'}}>
                                    
                                    <TextField
                                    id="outlined-textarea"
                                    label="Name"
                                    placeholder="eg.Stephen King"
                                    multiline
                                    style={{width:'100%'}}
                                    />
                                    
                                </div>
                                <div style={{marginBottom:'14px'}}>
                                    
                                    <TextField
                                    id="outlined-textarea"
                                    label="Email address"
                                    placeholder="eg.stephenking@gmail.com"
                                    multiline
                                    style={{width:'100%'}}
                                    />
                                    
                                </div>
                                <div>
                                    
                                    <TextField
                                    id="outlined-textarea"
                                    label="Phone Number"
                                    placeholder="eg. +1 234 567 890"
                                    multiline
                                    style={{width:'100%'}}
                                    />
                                    
                                </div>


                                <div>
                                <Box sx={{ '& button': { m: 1 } }}>
                                    
                                    <div style={{position:'absolute',bottom:'0px',right:'10px'}}>
                                        
                                        <Button variant="contained" size="medium">
                                        Next
                                        </Button>
                                        
                                    </div>
                                    </Box>
                                </div>
                                
                               
                        </Box>

                    </div>
                
                   
                
                </Grid>
            </Grid>
            </Box>
        </div>
  );
}