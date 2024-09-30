import React, { useState } from 'react';
import { Paper, TextField, Button, Grid, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const SearchForm = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ destination, checkIn, checkOut, guests });
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>Find Your Perfect Stay</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </Grid>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid item xs={12} sm={3}>
              <DatePicker
                label="Check-in"
                value={checkIn}
                onChange={(newValue) => setCheckIn(newValue)}
                components={{
                  TextField: (params) => <TextField {...params} fullWidth />
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <DatePicker
                label="Check-out"
                value={checkOut}
                onChange={(newValue) => setCheckOut(newValue)}
                components={{
                  TextField: (params) => <TextField {...params} fullWidth />
                }}
              />
            </Grid>
          </LocalizationProvider>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Guests"
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ height: '100%' }}>
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default SearchForm;
