
import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, onAddToArmy }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onAddToArmy={onAddToArmy} />
      ))}
    </div>
  );
};

export default BotCollection;
