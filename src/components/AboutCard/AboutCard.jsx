import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function CardList() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi-store-server.onrender.com/api/products/"
        );
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchData();
  }, []);
  const handleCardClick = (cardId) => {
    navigate(`/cards/${cardId}`);
  };
  return (
    <div>
      <h2>Cards</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <Link to={`/cards/${cardId}`}>{card.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CardList;
