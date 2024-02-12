
import React from 'react';

const BotSpecs = ({ bot }) => {
  return (
    <div>
      <h4>Extra Info</h4>
      <p>Catchphrase: {bot.catchphrase}</p>
    </div>
  );
};

export default BotSpecs;
