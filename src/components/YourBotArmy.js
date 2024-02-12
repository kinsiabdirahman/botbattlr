
import React from 'react';
import EnlistedBot from './EnlistedBot';

const YourBotArmy = ({ enlistedBots, onReleaseFromArmy, onDischarge }) => {
  return (
    <div>
      <h2>Selected Bot Army</h2>
      {enlistedBots.map((bot) => (
        <EnlistedBot
          key={bot.id}
          bot={bot}
          onReleaseFromArmy={onReleaseFromArmy}
          onDischarge={onDischarge}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;
