import React, { useState } from 'react';
import { Container, Typography, Grid, Pagination } from '@mui/material';
import SearchForm from '../components/SearchForm';
import DestinationCard from '../components/DestinationCard';
import axios from 'axios';

const allDestinations = [
  { name: 'ภูเก็ต', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'กระบี่', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'สุราษฎร์ธานี', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'สงขลา', image: 'https://images.unsplash.com/photo-1607355739828-0bf365440db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'นครศรีธรรมราช', image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'ตรัง', image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'พัทลุง', image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'สตูล', image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'ปัตตานี', image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'ยะลา', image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'นราธิวาส', image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'ชุมพร', image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'ระนอง', image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { name: 'พังงา', image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' }
];

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastDestination = currentPage * itemsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - itemsPerPage;
  const currentDestinations = allDestinations.slice(indexOfFirstDestination, indexOfLastDestination);

  const handleSearch = async (searchData) => {
    try {
      const response = await axios.post('http://localhost:8080/api/search', searchData);
      console.log('Search results:', response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        ท่องเที่ยวภาคใต้
      </Typography>
      <SearchForm onSearch={handleSearch} />
      <Typography variant="h5" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
        จังหวัดยอดนิยมในภาคใต้
      </Typography>
      <Grid container spacing={3}>
        {currentDestinations.map((dest, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <DestinationCard name={dest.name} image={dest.image} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(allDestinations.length / itemsPerPage)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        variant="outlined"
        color="primary"
        style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
};

export default HomePage;