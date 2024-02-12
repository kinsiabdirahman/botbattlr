
import React from 'react';

const EnlistedBot = ({ bot, onReleaseFromArmy, onDischarge }) => {
  return (
    <div>
      <h4>{bot.name}</h4>
      <img src={bot.avatar_url} alt={`${bot.name} Avatar`} style={{ width: '100px', height: '100px' }} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Bot Class: {bot.bot_class}</p>
      <button onClick={() => onReleaseFromArmy(bot.id)}>Release from Army</button>
      <button onClick={() => onDischarge(bot.id)}>Discharge (Delete)</button>
    </div>
  );
};

export default EnlistedBot;
