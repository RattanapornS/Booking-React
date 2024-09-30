import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #003580;
  font-size: 28px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #003580;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00224f;
  }
`;

function BookingPage() {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedDate = searchParams.get('date');

  const [hotel, setHotel] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: selectedDate ? new Date(selectedDate).toISOString().split('T')[0] : '',
    checkOut: '',
    guests: '1',
    roomType: 'standard',
  });

  useEffect(() => {
    // Fetch hotel data based on the ID
    // For now, we'll use mock data
    const mockHotel = {
      id: 1,
      name: 'The Nai Harn Phuket',
      price: 8000,
    };
    setHotel(mockHotel);
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, hotelId: id });
    // Here you would typically send the data to your backend
  };

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer>
      <Title>จองห้องพัก - {hotel.name}</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">ชื่อ-นามสกุล</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">อีเมล</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="checkIn">วันที่เช็คอิน</Label>
          <Input type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="checkOut">วันที่เช็คเอาท์</Label>
          <Input type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="guests">จำนวนผู้เข้าพัก</Label>
          <Select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
            {[1, 2, 3, 4].map(num => (
              <option key={num} value={num}>{num} ท่าน</option>
            ))}
          </Select>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="roomType">ประเภทห้องพัก</Label>
          <Select id="roomType" name="roomType" value={formData.roomType} onChange={handleChange}>
            <option value="standard">ห้องมาตรฐาน</option>
            <option value="deluxe">ห้องดีลักซ์</option>
            <option value="suite">ห้องสวีท</option>
          </Select>
        </InputGroup>
        <p>ราคา: ฿{hotel.price.toLocaleString()} / คืน</p>
        <Button type="submit">ยืนยันการจอง</Button>
      </Form>
    </PageContainer>
  );
}

export default BookingPage;