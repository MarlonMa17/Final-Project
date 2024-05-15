import React, { useState, useEffect } from "react";
import './Review.css';

export default function Review() {
    // const [reviews, setReviews] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        comment: ''
    });

    // useEffect(() => {
    //     const fetchWebsiteContent = async (url, setContent) => {
    //         try {
    //             const response = await fetch(url);
    //             const htmlContent = await response.text();
    //             setContent(htmlContent);
    //         } catch (error) {
    //             console.error('Error fetching website content:', error);
    //         }
    //     };

    //     fetchWebsiteContent('https://cors-anywhere.herokuapp.com/https://manjeshprasad.com/DBMS/', setReviews);

    // }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
     
        

        try {
            const response = await fetch('https://manjeshprasad.com/DBMS/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit review');
            }

            setFormData({
                name: '',
                comment: ''
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
        <div className = "container">
          

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
                    name="comment"
                    placeholder="Your comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                ></textarea>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
}
