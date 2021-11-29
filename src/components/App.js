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

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
    console.log("index " + index, "delta " + delta);
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
        <AddPlayerForm />
      </div>
    );
  }
}

export default App;
