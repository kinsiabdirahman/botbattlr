// App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './styles.css';



const App = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots data', error));
  }, []);

  const handleAddToArmy = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const handleReleaseFromArmy = (botId) => {
    const updatedEnlistedBots = enlistedBots.filter((bot) => bot.id !== botId);
    setEnlistedBots(updatedEnlistedBots);
  };

  const handleDischarge = (botId) => {
    // Send a DELETE request to the server to delete the bot
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the bot from the enlistedBots state
        const updatedEnlistedBots = enlistedBots.filter((bot) => bot.id !== botId);
        setEnlistedBots(updatedEnlistedBots);
      })
      .catch((error) => console.error('Error discharging bot', error));
  };

  return (
    <div>
      <BotCollection bots={bots} onAddToArmy={handleAddToArmy} />
      <YourBotArmy
        enlistedBots={enlistedBots}
        onReleaseFromArmy={handleReleaseFromArmy}
        onDischarge={handleDischarge}
      />
    </div>
  );
};

export default App;
