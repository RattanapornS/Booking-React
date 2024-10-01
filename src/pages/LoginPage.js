import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

// ออกแบบ Container ใหม่ให้มีสไตล์มากขึ้น
const StyledContainer = styled(Container)`
  background-color: #f9f9f9;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 5rem auto;
`;

// ออกแบบปุ่มให้ดูทันสมัย
const StyledButton = styled(Button)`
  background-color: #0071c2;
  color: #fff;
  &:hover {
    background-color: #005999;
  }
`;

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', formData);
      console.log('Login successful:', response.data);
      // จัดการ token และนำทางไปยังหน้าหลักหลังจาก login สำเร็จ
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <StyledContainer>
        <Typography variant="h4" gutterBottom align="center" style={{ color: '#003580' }}>
          Sign In
        </Typography>
        <Typography variant="body1" align="center" gutterBottom style={{ color: '#555' }}>
          Welcome back! Please login to your account.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            sx={{ marginBottom: '1.5rem' }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            sx={{ marginBottom: '1.5rem' }}
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            Sign In
          </StyledButton>
        </Box>
      </StyledContainer>
    </>
  );
};

export default LoginPage;
