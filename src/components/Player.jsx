import { useEffect, useState } from "react";

export default function Player() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer({ ...player, [name]: value, });
  };


  const handleScoreIncrement = () => {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      score: prevPlayer.score + 1,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(player);
  };

  useEffect(() => {
  }, [player]);


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Score: <b>{player.score}</b>{' '}
        <button type="button" onClick={handleScoreIncrement}>
          +1
        </button>
      </label>
      <br />
      <label>
        First name:
        <input
          name="firstName"
          value={player.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last name:
        <input
          name="lastName"
          value={player.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
