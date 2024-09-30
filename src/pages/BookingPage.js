import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #003580;
  font-size: 28px;
  margin-bottom: 20px;
`;

const HotelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const HotelCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const HotelInfo = styled.div`
  padding: 15px;
`;

const HotelName = styled.h3`
  margin: 0 0 10px 0;
  color: #003580;
`;

const HotelPrice = styled.p`
  font-weight: bold;
  color: #008009;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005999;
  }
  
  &::before {
    content: "🛒 "; /* เพิ่มอิโมจิในปุ่ม */
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  color: #0071c2;

  &:hover {
    color: #005999;
  }

  &::before {
    content: "← "; /* สัญลักษณ์ลูกศรย้อนกลับ */
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  position: relative;
`;

const hotels = [
  { 
    id: 1, 
    name: 'The Nai Harn Phuket', 
    price: 8000, 
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  { 
    id: 2, 
    name: 'Rayavadee Krabi', 
    price: 15000, 
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  { 
    id: 3, 
    name: 'Banyan Tree Samui', 
    price: 25000, 
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  { 
    id: 4, 
    name: 'Sri Panwa Phuket', 
    price: 30000, 
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  { 
    id: 5, 
    name: 'Anantara Hua Hin Resort', 
    price: 12000, 
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  { 
    id: 6, 
    name: 'Aonang Villa Resort', 
    price: 5000, 
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
];

function HotelsPage() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const openModal = (hotel) => {
    setSelectedHotel(hotel);
  };

  const closeModal = () => {
    setSelectedHotel(null);
  };

  return (
    <PageContainer>
      <Title>โรงแรมยอดนิยมในภาคใต้</Title>
      <HotelGrid>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id}>
            <HotelImage src={hotel.image} alt={hotel.name} />
            <HotelInfo>
              <HotelName>{hotel.name}</HotelName>
              <HotelPrice>฿{hotel.price.toLocaleString()} / คืน</HotelPrice>
              <Button onClick={() => openModal(hotel)}>ดูราคาและจอง</Button>
            </HotelInfo>
          </HotelCard>
        ))}
      </HotelGrid>
      {selectedHotel && (
        <Modal>
          <ModalContent>
            <BackButton onClick={closeModal} />
            <h2>{selectedHotel.name}</h2>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              minDate={new Date()}
            />
            <p>ราคาสำหรับวันที่ {selectedDate.toLocaleDateString()}: ฿{selectedHotel.price.toLocaleString()}</p>
            <Link to={`/booking/${selectedHotel.id}?date=${selectedDate.toISOString()}`}>
              <Button>จองเลย</Button>
            </Link>
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
}

export default HotelsPage;
