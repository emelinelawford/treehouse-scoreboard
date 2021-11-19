const players = [
  {
    name: "Emeline",
    score: 50,
    id: 1,
  },
  {
    name: "James",
    score: 60,
    id: 2,
  },
  {
    name: "Emily",
    score: 25,
    id: 3,
  },
  {
    name: "Cat",
    score: 35,
    id: 4,
  },
];

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>
      <Counter score={props.score} />
    </div>
  );
};

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
      {/* Players list */}
      {props.initialPlayers.map((player) => (
        <Player name={player.name} score={player.score} key={player.id} />
      ))}
    </div>
  );
};

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);
