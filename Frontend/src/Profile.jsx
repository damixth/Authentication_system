import React, { Component, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {
            userData: ""
        }

    }

    componentDidMount(){
        fetch("http://localhost:5000/profile", {
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                token:window.localStorage.getItem("token"),
            }),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userData")
            this.setState({ userData: data.data })
        })
    }

    render() {
        return (
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Full Name
                </Typography>
                <Typography variant="h5" component="div">
                {this.state.userData.fullname}
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Email
                </Typography>
                <Typography variant="h5" component="div">
                {this.state.userData.email}
                </Typography>
               
                
            </CardContent>
            </Card>
        );
    }
}