import React, { useState, useEffect } from 'react';
import "./styles.css"
const WebsiteViewer = () => {
  const [websiteContent1, setWebsiteContent1] = useState('');
  const [websiteContent2, setWebsiteContent2] = useState('');

  useEffect(() => {
    const fetchWebsiteContent = async (url, setContent) => {
      try {
        const response = await fetch(url);
        const htmlContent = await response.text();
        setContent(htmlContent);
      } catch (error) {
        console.error('Error fetching website content:', error);
      }
    };

    fetchWebsiteContent('https://cors-anywhere.herokuapp.com/https://manjeshprasad.com/Assignment1', setWebsiteContent1);
    fetchWebsiteContent('https://cors-anywhere.herokuapp.com/https://marlonhh.com/', setWebsiteContent2);
  }, []);

  return (
    <div className="website-container">
      <div className="card">
        <h1>Coffee Espresso</h1>
        <div dangerouslySetInnerHTML={{ __html: websiteContent1 }} />
      </div>
      <div className="card">
        <h1>Resturant</h1>
        <div dangerouslySetInnerHTML={{ __html: websiteContent2 }} />
      </div>
    </div>
  );
};

export default WebsiteViewer;
