import React, { useRef, useState } from 'react';
import "./ImageGenrater.css"
import default_image from "../Assets/default_image.svg";

const ImageGenrater = () => {
    const [image_url, setImage_url] = useState("/");
    const inputref = useRef(null);

    const imageGenerator = async () => {
        if (inputref.current.value === "") {
            return 0;
        }
        try {
            const response = await fetch(`URL_TO_FETCH_IMAGE_FROM`);
            if (response.ok) {
                const data = await response.json(); // assuming the response is JSON
                setImage_url(data.image_url); // assuming there's a field called image_url in the response
            } else {
                console.error('Failed to fetch image');
            }
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    return (
        <div className='ai-image-generator'>
            <div className="header">Ai image <span>generator</span></div>
            <div className="img-loading">
                <div className="image"><img src={image_url === "/" ? default_image : image_url} alt="" /></div>
            </div>
            <div className='search-box'>
                <input type="text" ref={inputref} className='search-input' placeholder='Describe what to see' />
                <div className="generate-btn" onClick={imageGenerator}>Generate</div>
            </div>
        </div>
    );
};

export default ImageGenrater;
