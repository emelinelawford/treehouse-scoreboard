import React from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends React.Component {
  state = {
    players: [
      {
        name: "Emeline",
        score: 0,
        id: 1,
      },
      {
        name: "James",
        score: 0,
        id: 2,
      },
      {
        name: "Emily",
        score: 0,
        id: 3,
      },
      {
        name: "Cat",
        score: 0,
        id: 4,
      },
    ],
  };

  //player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
    console.log("index " + index, "delta " + delta);
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          { name, score: 0, id: (this.prevPlayerId += 1) },
        ],
      };
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  render() {
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            isHighScore={highScore === player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
