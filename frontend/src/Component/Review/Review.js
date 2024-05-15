import React, { useState } from "react";
import './Review.css';
import ReviewHistory from "./ReviewHistory";
export default function Review() {


        // THE Form will be send in a way of json
    const [formData, setFormData] = useState({
        name: '',
        review: '' 
    });


    const [responseMessage, setResponseMessage] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();                             // prevent the page from refreshing

        try {
            const response = await fetch('http://localhost:80?api=second', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit review');
            }

            const responseData = await response.json();
            setResponseMessage(responseData.message);

            setFormData({
                name: '',
                review: ''
            });
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
        <ReviewHistory />
        <div className="container">
            <h1>Add A Review</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <textarea
                    name="review" // Change 'comment' to 'review'
                    placeholder="Your review" // Change 'comment' to 'review'
                    value={formData.review} // Change 'comment' to 'review'
                    onChange={handleInputChange}
                ></textarea>
                <button type="submit">Submit Review</button>
            </form>
            {responseMessage && <div className="response-message">{responseMessage}</div>}
        </div>

        </>
    );
}
