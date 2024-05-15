import React, { useEffect, useState } from "react";
import "./Review.css"; 
// Review Card Component
function ReviewCard({ review }) {
  return (
    <div className = "card">
      <h3>{review.Name}</h3>
      <p>{review.Review}</p>
    </div>
  );
}

// Review History Component
export default function ReviewHistory() {
  const [prevReviews, setPrevReviews] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const reviews = await response.json();
        setPrevReviews(reviews);
      } catch (error) {
        console.error('Error fetching website content:', error);
      }
    };

    fetchData('http://localhost:80?api=second');
  }, []);

  return (
    <div>
      <h1>Previous Reviews</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {prevReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
}
