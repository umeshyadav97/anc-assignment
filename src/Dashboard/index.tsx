import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardList from "./DashboardList";

interface Player {
  id: string;
  name: string;
  age: number | string;
}

interface Team {
  id: string;
  team_name: string;
  players: Player[];
}

export interface Sport {
  id: string;
  game: string;
  teams: Team[];
}

const Dashboard: React.FC = () => {
  // State to store sports data
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get("https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e")
      .then((response) => setSports(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handler function to add a new player
  const handleAddPlayer = (
    sportIndex: number,
    teamIndex: number,
    playerName: string,
    playerAge: number | string
  ) => {
    const updatedSports = [...sports];
    const newPlayer = {
      id: Date.now().toString(),
      name: playerName,
      age: playerAge,
    };
    updatedSports[sportIndex].teams[teamIndex].players.unshift(newPlayer);
    setSports(updatedSports);
  };
  // Handler function to edit a player's information
  const handleEditPlayer = (
    gameIndex: number,
    teamIndex: number,
    playerIndex: number,
    newName: string,
    newAge: number | string
  ) => {
    const updatedSports = [...sports];
    updatedSports[gameIndex].teams[teamIndex].players[playerIndex].name =
      newName;
    updatedSports[gameIndex].teams[teamIndex].players[playerIndex].age = newAge;
    setSports(updatedSports);
  };

  return (
    <div>
      {/* Render the DashboardList component with sports data and handler functions */}
      <DashboardList
        sports={sports}
        handleAddPlayer={handleAddPlayer}
        handleEditPlayer={handleEditPlayer}
      />
    </div>
  );
};

export default Dashboard;
