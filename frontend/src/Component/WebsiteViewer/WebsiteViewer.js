import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const WebsiteViewer = () => {
  const [visitedWebsites, setVisitedWebsite] = useState("Try visiting these Websites")
  const [websiteContent1, setWebsiteContent1] = useState('');
  const [websiteContent2, setWebsiteContent2] = useState('');
  const [websiteContent3, setWebsiteContent3] = useState('');
  
  const containerRef = useRef(null);

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
    fetchWebsiteContent('https://cors-anywhere.herokuapp.com/lilbunny.org', setWebsiteContent3);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      containerRef.current.scrollLeft += 2; // Adjust the scrolling speed here
    }, 50); // Adjust the interval duration here (milliseconds)

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>{visitedWebsites}</h1>
      <div className="website-container" ref={containerRef}>
        <a href='https://manjeshprasad.com/Assignment2/' target="_blank" rel="noopener noreferrer">
          <div className="card">
              <h1>Coffee Espresso</h1>
              <p>A small coffee delivery service that scours the entire internet to find the highest quality coffee for our customers.</p>
              <img src="https://t4.ftcdn.net/jpg/01/16/61/93/360_F_116619399_YA611bKNOW35ffK0OiyuaOcjAgXgKBui.jpg" />
            </div>
        </a>

        <a href='https://marlonhh.com/' target="_blank" rel="noopener noreferrer">
          <div className="card">
            <h1>MarLONG</h1>
            <div dangerouslySetInnerHTML={{ __html: websiteContent2 }} />
          </div>
        </a>

        <a href='https://lilbunny.org/' target="_blank" rel="noopener noreferrer">
          <div className="card">
            <h1>LilBunny</h1>
            <div dangerouslySetInnerHTML={{ __html: websiteContent3 }} />
          </div>
        </a>
      </div>
    </>
  );
};

export default WebsiteViewer;
