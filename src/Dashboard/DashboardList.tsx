import React, { useState } from "react";
import { Sport } from "./index";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import InputField from "./Inputfield";

interface DashboardListProps {
  sports: Sport[];
  handleAddPlayer: (
    sportIndex: number,
    teamIndex: number,
    playerName: string,
    playerAge: number | string
  ) => void;
  handleEditPlayer: (
    gameIndex: number,
    teamIndex: number,
    playerIndex: number,
    newName: string,
    newAge: number | string
  ) => void;
}

const DashboardList: React.FC<DashboardListProps> = ({
  sports,
  handleEditPlayer,
  handleAddPlayer,
}) => {
  const styles = useStyles();
  const [isEdit, setIsEdit] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedAge, setEditedAge] = useState("");
  const [editedPlayerIndex, setEditedPlayerIndex] = useState<number | null>(
    null
  );
  const [editedPlayer, setEditedPlayer] = useState({
    gameIndex: -1,
    teamIndex: -1,
    playerIndex: -1,
    name: "",
    age: "",
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedAge(event.target.value);
  };

  const handleSavePlayer = () => {
    if (
      editedPlayer.gameIndex !== -1 &&
      editedPlayer.teamIndex !== -1 &&
      editedPlayer.playerIndex !== -1
    ) {
      handleEditPlayer(
        editedPlayer.gameIndex,
        editedPlayer.teamIndex,
        editedPlayer.playerIndex,
        editedName,
        editedAge
      );
      setEditedPlayer({
        gameIndex: -1,
        teamIndex: -1,
        playerIndex: -1,
        name: "",
        age: "",
      });
      setEditedName("");
      setEditedAge("");
      setIsEdit(false);
    }
  };

  const handleAddPlayerClick = (gameIndex: number, teamIndex: number) => {
    handleAddPlayer(gameIndex, teamIndex, "", "");
    setIsEdit(true);
  };

  const handleClick = (
    gameIndex: number,
    teamIndex: number,
    playerIndex: number,
    player: any
  ) => {
    setEditedPlayerIndex(playerIndex);
    setEditedPlayer({
      gameIndex,
      teamIndex,
      playerIndex,
      name: player.name,
      age: player.age,
    });
    setIsEdit(true);
  };

  return (
    <React.Fragment>
      <Grid container spacing={5} p={2}>
        {sports?.map((sport, gameIndex) => (
          <Grid item xs={6} key={sport.id}>
            <Grid item sx={styles.itemData}>
              <Grid item sx={styles.background}>
                <Typography sx={styles.headingText}>{sport.game}</Typography>
              </Grid>
              {sport?.teams?.map((teams, teamIndex) => (
                <>
                  <Grid item p={2}>
                    <Grid container pb={2}>
                      <Grid item xs={6}>
                        <Typography sx={styles.teamName}>
                          {teams?.team_name}({teams.players.length})
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="contained"
                          sx={{ padding: "7px 10px" }}
                          onClick={() =>
                            handleAddPlayerClick(gameIndex, teamIndex)
                          }
                        >
                          Add Player
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid>
                      <Grid item py={2}>
                        {teams?.players?.map((player: any, playerIndex) => (
                          <Grid item key={player.id}>
                            <Grid container spacing={1} pb={2}>
                              <Grid item xs={8} pb={1}>
                                <InputField
                                  id="name"
                                  placeholder="Name"
                                  variant="filled"
                                  type="text"
                                  fullWidth
                                  inputProps={{ maxLength: 20 }}
                                  value={
                                    editedPlayer?.gameIndex === gameIndex &&
                                    editedPlayer?.teamIndex === teamIndex &&
                                    editedPlayer?.playerIndex === playerIndex
                                      ? editedName
                                      : player?.name
                                  }
                                  onChange={handleNameChange}
                                  onClick={() =>
                                    handleClick(
                                      gameIndex,
                                      teamIndex,
                                      playerIndex,
                                      player
                                    )
                                  }
                                />
                              </Grid>
                              <Grid item xs={2}>
                                <InputField
                                  id="age"
                                  placeholder="Age"
                                  variant="filled"
                                  type="number"
                                  fullWidth
                                  inputProps={{ maxLength: 20 }}
                                  value={
                                    editedPlayer?.gameIndex === gameIndex &&
                                    editedPlayer?.teamIndex === teamIndex &&
                                    editedPlayer?.playerIndex === playerIndex
                                      ? editedAge.toString()
                                      : player?.age.toString()
                                  }
                                  onChange={handleAgeChange}
                                  onClick={() =>
                                    handleClick(
                                      gameIndex,
                                      teamIndex,
                                      playerIndex,
                                      player
                                    )
                                  }
                                />
                              </Grid>
                              <Grid item xs={2} pb={1}>
                                <Button
                                  variant="contained"
                                  sx={{ padding: "10px 15px" }}
                                  onClick={() => handleSavePlayer()}
                                >
                                  Save
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                      {teamIndex < sport?.teams.length - 1 && <Divider />}
                    </Grid>
                  </Grid>
                </>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default DashboardList;
