import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import Footer from '../components/Footer';

const SearchResultPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลผลการค้นหาจาก API
    // ตัวอย่างข้อมูลจำลอง:
    setResults([
      { id: 1, name: 'โรงแรม A', price: 1500 },
      { id: 2, name: 'โรงแรม B', price: 2000 },
      { id: 3, name: 'โรงแรม C', price: 1800 },
    ]);
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <SearchForm onSearch={console.log} />
        <Typography variant="h5" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
          ผลการค้นหา
        </Typography>
        <Grid container spacing={3}>
          {results.map((hotel) => (
            <Grid item xs={12} sm={4} key={hotel.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{hotel.name}</Typography>
                  <Typography>ราคา: {hotel.price} บาท / คืน</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default SearchResultPage;