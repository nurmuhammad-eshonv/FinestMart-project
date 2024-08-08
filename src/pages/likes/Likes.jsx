import React from 'react';
import { useLocation } from 'react-router-dom';

function Likes() {
  const location = useLocation();
  const likedCards = location.state?.likedCards || [];

  return (
    <div className="likes-container">
      {likedCards.length > 0 ? (
        likedCards.map((card, index) => (
          <div key={index} className="card">
            <div className="image_container">
              <img src={card.url} alt={card.name} />
            </div>
            <div className="title">
              <span>{card.name}</span>
            </div>
            <div className="price">
              <span>PRICE : {card.price}$</span>
            </div>
          </div>
        ))
      ) : (
        <p>No liked cards.</p>
      )}
    </div>
  );
}

export default Likes;
