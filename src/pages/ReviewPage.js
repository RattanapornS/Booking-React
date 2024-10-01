import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff; // เพิ่มพื้นหลังให้กับหน้า
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); // เพิ่มเงาให้กับกล่อง
  border-radius: 8px; // มุมโค้ง
`;

const Title = styled.h1`
  color: #003580;
  font-size: 32px; // ขนาดฟอนต์เพิ่มขึ้น
  margin-bottom: 20px;
  text-align: center; // จัดกลาง
`;

const ReviewList = styled.div`
  display: grid;
  gap: 20px;
`;

const ReviewCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  background-color: #f8f8f8;
  margin-top: 10px; // เพิ่มระยะห่างด้านบน
  transition: transform 0.2s; // เพิ่มการเคลื่อนไหวเมื่อชี้เมาส์

  &:hover {
    transform: scale(1.02); // ขยายเมื่อชี้เมาส์
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ReviewerName = styled.h3`
  margin: 0;
  color: #003580;
  font-weight: bold; // ตัวหนา
`;

const ReviewDate = styled.span`
  color: #666;
  font-size: 14px; // ขนาดฟอนต์เล็กลง
`;

const ReviewRating = styled.div`
  color: #febb02;
  font-size: 18px;
  margin-bottom: 10px;
`;

const ReviewText = styled.p`
  margin: 0;
  color: #333;
  line-height: 1.5; // ระยะห่างระหว่างบรรทัด
`;

const Form = styled.form`
  margin-top: 30px;
  display: grid;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px; // ขนาดฟอนต์
  transition: border-color 0.3s;

  &:focus {
    border-color: #003580; // เปลี่ยนสีกรอบเมื่อชี้
    outline: none; // ไม่แสดงกรอบการเลือก
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  font-size: 16px;

  &:focus {
    border-color: #003580;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #003580;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s;

  &:hover {
    background-color: #00224f;
    transform: translateY(-2px); // เลื่อนขึ้นเล็กน้อยเมื่อชี้
  }
`;

function ReviewPage() {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'John Doe', date: '2023-09-15', rating: 4, text: 'Great hotel with excellent service!' },
    { id: 2, name: 'Jane Smith', date: '2023-09-10', rating: 5, text: 'Amazing experience, will definitely come back!' },
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });

  const handleInputChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: reviews.length + 1,
      ...newReview,
      date: new Date().toISOString().split('T')[0],
    };
    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 5, text: '' });
  };

  return (
    <PageContainer>
      <Title>รีวิวจากผู้เข้าพัก</Title>
      <ReviewList>
        {reviews.map((review) => (
          <ReviewCard key={review.id}>
            <ReviewHeader>
              <ReviewerName>{review.name}</ReviewerName>
              <ReviewDate>{review.date}</ReviewDate>
            </ReviewHeader>
            <ReviewRating>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</ReviewRating>
            <ReviewText>{review.text}</ReviewText>
          </ReviewCard>
        ))}
      </ReviewList>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="ชื่อของคุณ"
          value={newReview.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={newReview.rating}
          onChange={handleInputChange}
          required
        />
        <Textarea
          name="text"
          placeholder="เขียนรีวิวของคุณ"
          value={newReview.text}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">ส่งรีวิว</Button>
      </Form>
    </PageContainer>
  );
}

export default ReviewPage;
