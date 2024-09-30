import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultPage from './pages/SearchResultPage';
import ResgisterPage from './pages/ResgisterPage';
import LoginPage from './pages/LoginPage';
import HotelsPage from './pages/HotelsPage';
import BookingPage from './pages/BookingPage';
import ReviewPage from './pages/ReviewPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resgister" element={<ResgisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;