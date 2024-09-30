import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import tlLogo from '../images/logo192.png';  // นำเข้าโลโก้จากโฟลเดอร์ images

const Header = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      {/* โลโก้และชื่อแบรนด์ */}
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img src={tlLogo} alt="TravelTheLiz" style={{ height: '50px', marginRight: '10px' }} />
        <Typography variant="h6" component="div" style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Prata' }}></Typography>
      </Link>

      {/* ปุ่ม Hotels, Booking, Review */}
      <Box style={{ display: 'flex', marginLeft: '20px' }}>  {/* เพิ่ม marginLeft ตรงนี้เพื่อเว้นระยะห่างระหว่างโลโก้กับปุ่ม */}
      <Button color="inherit" component={Link} to="/" style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}>Home</Button>
        <Button color="inherit" component={Link} to="/hotels" style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}>Hotels</Button>
        <Button color="inherit" component={Link} to="/booking" style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}>Booking</Button>
        <Button color="inherit" component={Link} to="/review" style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}>Review</Button>
      </Box>

      {/* ปุ่ม Sign In และ Create Account */}
      <Box style={{ marginLeft: 'auto' }}> {/* ใช้ marginLeft: 'auto' เพื่อดันปุ่ม Sign In และ Create Account ไปด้านขวา */}
        <Button color="inherit" component={Link} to="/login" style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffcc00' }}>Sign In</Button>
        <Button 
          color="inherit" 
          component={Link} to="/resgister" 
          style={{ 
            fontSize: '16px', 
            fontWeight: 'bold', 
            color: '#ffcc00', 
            border: '2px solid #ffcc00', 
            borderRadius: '5px', 
            marginLeft: '10px' 
          }}>
          Create Account
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
