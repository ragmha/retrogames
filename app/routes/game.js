import Game from '../models/game';

// Get all the Games sorted by postDate
const getGames = (req, res) => {
  // Query the DB, if no errors send all the games to the client
  Game.find(null, null, { sort: { postDate: 1 } }, (err, games) => {
    if (err) res.send(err);
    res.json(games);
  });
};

// Gat a single Game filtered by ID
const getGame = (req, res) => {
  const { id } = req.params;
  // Query the DB for a single game, if no errors send it to the client
  Game.findById(id, (err, game) => {
    if (err) res.send(err);
    res.json(game); // Game sent as json
  });
};

// Get the body data and create a new Game
const postGame = (req, res) => {
  // Assign the game info to an empty game and send a message back if no errors
  let game = Object.assign(new Game(), req.body);

  // Save it into DB
  game.save(err => {
    if (err) res.send(err);
    res.json({ message: 'Game created!' }); // a JSON response to inform the client
  });
};

// Delete a game by the given ID
const deleteGame = (req, res) => {
  // Remove the game by the given id and send a message back in no errors
  const { id } = req.params;
  Game.remove(
    {
      _id: id,
    },
    err => {
      if (err) res.send(err);
      res.json({ message: 'Successfully Deleted!' }); // Simple JSON respon to client
    }
  );
};

export { getGame, getGames, postGame, deleteGame };
