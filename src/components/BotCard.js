// BotCard.js
import React, { useState } from 'react';
import BotSpecs from './BotSpecs';

const BotCard = ({ bot, onAddToArmy }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h4>{bot.name}</h4>
      <img src={bot.avatar_url} alt={`${bot.name} Avatar`} style={{ width: '100px', height: '100px' }} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Bot Class: {bot.bot_class}</p>

      {showDetails ? (
        <div>
          <BotSpecs bot={bot} />
          <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
          <button onClick={handleClick}>Hide Details</button>
        </div>
      ) : (
        <button onClick={handleClick}>Show Details</button>
      )}
    </div>
  );
};

export default BotCard;
