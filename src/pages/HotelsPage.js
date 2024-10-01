// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const PageContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const Title = styled.h1`
//   color: #003580;
//   font-size: 32px;
//   margin-bottom: 20px;
//   text-align: center;
//   font-weight: 600;
//   font-family: 'Prompt', sans-serif;
// `;

// const HotelGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 20px;
// `;

// const HotelCard = styled.div`
//   border: 1px solid #e0e0e0;
//   border-radius: 12px;
//   overflow: hidden;
//   transition: box-shadow 0.3s ease;
//   background-color: #f9f9f9;

//   &:hover {
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
//     transform: scale(1.02);
//   }
// `;

// const HotelImage = styled.img`
//   width: 100%;
//   height: 220px;
//   object-fit: cover;
//   border-bottom: 1px solid #e0e0e0;
// `;

// const HotelInfo = styled.div`
//   padding: 20px;
//   text-align: center; /* Center the button */
// `;

// const HotelName = styled.h3`
//   margin: 0 0 10px 0;
//   color: #003580;
//   font-size: 22px;
//   font-weight: bold;
// `;

// const HotelPrice = styled.p`
//   font-weight: bold;
//   color: #008009;
//   font-size: 16px;
// `;

// const Button = styled.button`
//   padding: 12px 24px;
//   background-color: #0071c2;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   font-size: 16px;
//   transition: background-color 0.3s ease;
//   margin-top: 10px;

//   &:hover {
//     background-color: #005999;
//   }

//   &::before {
//     content: "🛒 ";
//   }
// `;

// const BackButton = styled.button`
//   background: none;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   color: #0071c2;

//   &:hover {
//     color: #005999;
//   }

//   &::before {
//     content: "← ";
//   }
// `;

// const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 12px;
//   max-width: 500px;
//   width: 100%;
//   position: relative;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Pagination = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const PageButton = styled.button`
//   padding: 10px 20px;
//   margin: 0 5px;
//   background-color: ${({ isActive }) => (isActive ? '#0071c2' : '#f9f9f9')};
//   color: ${({ isActive }) => (isActive ? 'white' : '#0071c2')};
//   border: 1px solid #e0e0e0;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #005999;
//     color: white;
//   }
// `;

// export const hotels = [
//   { id: 1, name: 'The Nai Harn Phuket', price: 8000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'ภูเก็ต' },
//   { id: 2, name: 'Rayavadee Krabi', price: 15000, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'กระบี่' },
//   { id: 3, name: 'Banyan Tree Samui', price: 25000, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'สุราษฎร์ธานี' },
//   { id: 4, name: 'Sri Panwa Phuket', price: 30000, image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'สงขลา' },
//   { id: 5, name: 'Anantara Hua Hin Resort', price: 12000, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'นครศรีธรรมราช' },
//   { id: 6, name: 'Aonang Villa Resort', price: 5000, image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'ตรัง' },
//   { id: 7, name: 'Patthalung Hotel', price: 7000, image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'พัทลุง' },
//   { id: 8, name: 'Satun Beach Resort', price: 6000, image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'สตูล' },
//   { id: 9, name: 'Pattani Paradise Hotel', price: 4500, image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'ปัตตานี' },
//   { id: 10, name: 'Yala Dream Hotel', price: 5500, image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'ยะลา' },
//   { id: 11, name: 'Narathiwat Hotel', price: 6000, image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'นราธิวาส' },
//   { id: 12, name: 'Chumphon Grand Hotel', price: 5000, image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'ชุมพร' },
//   { id: 13, name: 'Ranong Cliff Resort', price: 9500, image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'ระนอง' },
//   { id: 14, name: 'Phang Nga Bay Resort', price: 11000, image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', province: 'พังงา' },
// ];

// function HotelsPage() {
//   const [selectedHotel, setSelectedHotel] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const openModal = (hotel) => {
//     setSelectedHotel(hotel);
//   };

//   const closeModal = () => {
//     setSelectedHotel(null);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentHotels = hotels.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(hotels.length / itemsPerPage);

//   return (
//     <PageContainer>
//       <Title>โรงแรมยอดนิยมในภาคใต้</Title>
//       <HotelGrid>
//         {currentHotels.map((hotel) => (
//           <HotelCard key={hotel.id}>
//             <HotelImage src={hotel.image} alt={hotel.name} />
//             <HotelInfo>
//               <HotelName>{hotel.name}</HotelName>
//               <HotelPrice>฿{hotel.price.toLocaleString()} / คืน</HotelPrice>
//               <Button onClick={() => openModal(hotel)}>ดูราคาและจอง</Button>
//             </HotelInfo>
//           </HotelCard>
//         ))}
//       </HotelGrid>

//       {/* Pagination */}
//       <Pagination>
//         {[...Array(totalPages)].map((_, index) => (
//           <PageButton
//             key={index}
//             isActive={index + 1 === currentPage}
//             onClick={() => setCurrentPage(index + 1)}
//           >
//             {index + 1}
//           </PageButton>
//         ))}
//       </Pagination>

//       {selectedHotel && (
//         <Modal>
//           <ModalContent>
//             <BackButton onClick={closeModal} />
//             <h2>{selectedHotel.name}</h2>
//             <Calendar
//               onChange={handleDateChange}
//               value={selectedDate}
//               minDate={new Date()}
//             />
//             <p>ราคาสำหรับวันที่ {selectedDate.toLocaleDateString()}: ฿{selectedHotel.price.toLocaleString()}</p>
//             <Link to={`/booking/${selectedHotel.id}?date=${selectedDate.toISOString()}`}>
//               <Button>จองเลย</Button>
//             </Link>
//           </ModalContent>
//         </Modal>
//       )}
//     </PageContainer>
//   );
// }

// export default HotelsPage;
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
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
  font-family: 'Prompt', sans-serif;
`;

const HotelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const HotelCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  background-color: #f9f9f9;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-bottom: 1px solid #e0e0e0;
`;

const HotelInfo = styled.div`
  padding: 20px;
  text-align: center;
`;

const HotelName = styled.h3`
  margin: 0 0 10px 0;
  color: #003580;
  font-size: 22px;
  font-weight: bold;
`;

const HotelPrice = styled.p`
  font-weight: bold;
  color: #008009;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #0071c2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #005999;
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
    content: "← ";
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
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: ${({ isActive }) => (isActive ? '#0071c2' : '#f9f9f9')};
  color: ${({ isActive }) => (isActive ? 'white' : '#0071c2')};
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005999;
    color: white;
  }
`;

export const hotels = [
  {
    id: 1,
    name: 'The Nai Harn Phuket',
    province: 'ภูเก็ต',
    rooms: {
      standard: { price: 8000 },
      deluxe: { price: 12000 },
      suite: { price: 15000 }
    },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    name: 'Krabi Resort',
    province: 'กระบี่',
    rooms: {
      standard: { price: 6000 },
      deluxe: { price: 9000 },
      suite: { price: 12000 }
    },
    image: 'https://images.unsplash.com/photo-1542038784456-8986bad9451c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    name: 'Centara Grand Beach Resort Samui',
    province: 'สุราษฎร์ธานี',
    rooms: {
      standard: { price: 7500 },
      deluxe: { price: 10500 },
      suite: { price: 14000 }
    },
    image: 'https://images.unsplash.com/photo-1519821172141-b14e9d053049?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    name: 'Beyond Resort Khao Lak',
    province: 'พังงา',
    rooms: {
      standard: { price: 5000 },
      deluxe: { price: 8000 },
      suite: { price: 11000 }
    },
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 5,
    name: 'Le Meridien Chiang Mai',
    province: 'เชียงใหม่',
    rooms: {
      standard: { price: 6500 },
      deluxe: { price: 9500 },
      suite: { price: 12500 }
    },
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 6,
    name: 'Riverside Bangkok Hotel',
    province: 'กรุงเทพมหานคร',
    rooms: {
      standard: { price: 7000 },
      deluxe: { price: 10000 },
      suite: { price: 13000 }
    },
    image: 'https://images.unsplash.com/photo-1533560491483-8ac783b8e7cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 7,
    name: 'The Imperial Hua Hin Beach Resort',
    province: 'ประจวบคีรีขันธ์',
    rooms: {
      standard: { price: 5500 },
      deluxe: { price: 8500 },
      suite: { price: 11500 }
    },
    image: 'https://images.unsplash.com/photo-1519120126475-7a0984358238?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 8,
    name: 'Rayong Marriott Resort & Spa',
    province: 'ระยอง',
    rooms: {
      standard: { price: 6000 },
      deluxe: { price: 9000 },
      suite: { price: 12000 }
    },
    image: 'https://images.unsplash.com/photo-1520708323959-6925f831b21c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 9,
    name: 'Soneva Kiri',
    province: 'ตราด',
    rooms: {
      standard: { price: 9000 },
      deluxe: { price: 13000 },
      suite: { price: 16000 }
    },
    image: 'https://images.unsplash.com/photo-1534313316516-7482db01f1ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 10,
    name: 'Anantara Chiang Rai Resort',
    province: 'เชียงราย',
    rooms: {
      standard: { price: 5500 },
      deluxe: { price: 8500 },
      suite: { price: 12000 }
    },
    image: 'https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 11,
    name: 'Novotel Phuket Resort',
    province: 'ภูเก็ต',
    rooms: {
      standard: { price: 7000 },
      deluxe: { price: 10000 },
      suite: { price: 14000 }
    },
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 12,
    name: 'Banyan Tree Krabi',
    province: 'กระบี่',
    rooms: {
      standard: { price: 8000 },
      deluxe: { price: 11000 },
      suite: { price: 14000 }
    },
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 13,
    name: 'The Slate Phuket',
    province: 'ภูเก็ต',
    rooms: {
      standard: { price: 8500 },
      deluxe: { price: 12000 },
      suite: { price: 15000 }
    },
    image: 'https://images.unsplash.com/photo-1520708323959-6925f831b21c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 14,
    name: 'Cape Panwa Hotel',
    province: 'ภูเก็ต',
    rooms: {
      standard: { price: 9000 },
      deluxe: { price: 13000 },
      suite: { price: 17000 }
    },
    image: 'https://images.unsplash.com/photo-1534313316516-7482db01f1ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  }
];


function HotelsPage() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const [roomType, setRoomType] = useState('standard');
  const itemsPerPage = 6;

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRoomTypeChange = (event) => {
    setRoomType(event.target.value);
  };

  const openModal = (hotel) => {
    setSelectedHotel(hotel);
  };

  const closeModal = () => {
    setSelectedHotel(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHotels = hotels.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(hotels.length / itemsPerPage);

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 6 || day === 0;
  };

  const getPrice = (hotel, roomType, date) => {
    let price = hotel.rooms[roomType].price;
    if (isWeekend(date)) {
      price += 2000; // เพิ่มราคาสำหรับวันหยุดเสาร์อาทิตย์
    }
    return price;
  };

  return (
    <PageContainer>
      <Title>โรงแรมยอดนิยมในภาคใต้</Title>
      <HotelGrid>
        {currentHotels.map((hotel) => (
          <HotelCard key={hotel.id}>
            <HotelImage src={hotel.image} alt={hotel.name} />
            <HotelInfo>
              <HotelName>{hotel.name}</HotelName>
              <HotelPrice>฿{getPrice(hotel, roomType, selectedDate).toLocaleString()} / คืน</HotelPrice>
              <Button onClick={() => openModal(hotel)}>ดูราคาและจอง</Button>
            </HotelInfo>
          </HotelCard>
        ))}
      </HotelGrid>

      {/* Pagination */}
      <Pagination>
        {[...Array(totalPages)].map((_, index) => (
          <PageButton
            key={index}
            isActive={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>

      {selectedHotel && (
        <Modal>
          <ModalContent>
            <BackButton onClick={closeModal} />
            <h2>{selectedHotel.name}</h2>
            <label htmlFor="roomType">ประเภทห้องพัก:</label>
            <select id="roomType" value={roomType} onChange={handleRoomTypeChange}>
              <option value="standard">ห้องมาตรฐาน</option>
              <option value="deluxe">ห้องดีลักซ์</option>
              <option value="suite">ห้องสวีท</option>
            </select>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              minDate={new Date()}
            />
            <p>
              ราคาสำหรับวันที่ {selectedDate.toLocaleDateString()}: ฿{getPrice(selectedHotel, roomType, selectedDate).toLocaleString()}
            </p>
            <Link to={`/booking/${selectedHotel.id}?date=${selectedDate.toISOString()}&roomType=${roomType}`}>
              <Button>จองเลย</Button>
            </Link>
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
}

export default HotelsPage;