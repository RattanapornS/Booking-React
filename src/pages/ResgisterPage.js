import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

// สร้าง class ให้กับ Container ที่ใช้สำหรับออกแบบใหม่
const StyledContainer = styled(Container)`
  background-color: #f0f4f8;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 5rem auto;
`;

const StyledButton = styled(Button)`
  background-color: #0071c2;
  color: #fff;
  &:hover {
    background-color: #005999;
  }
`;

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/register', formData);
      console.log('Registration successful:', response.data);
      // นำทางไปยังหน้า login หรือหน้าหลักหลังจากลงทะเบียนสำเร็จ
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <>
      <StyledContainer>
        <Typography variant="h4" gutterBottom align="center" style={{ color: '#003580' }}>
          Create an Account
        </Typography>
        <Typography variant="body1" align="center" gutterBottom style={{ color: '#555' }}>
          Join us today! Fill in the form below to get started.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={formData.username}
            onChange={handleChange}
            variant="outlined"
            sx={{ marginBottom: '1.5rem' }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            autoComplete="new-password"
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
            Register
          </StyledButton>
        </Box>
      </StyledContainer>
    </>
  );
};

export default RegisterPage;
