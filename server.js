import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

// Models & Routes
import Game from './app/models/game';
import { getGames, getGame, postGame, deleteGame } from './app/routes/game';

require('dotenv').config();
const app = express();
app.set('port', process.env.PORT || 8080);

// Options for DB connection
const options = {
  server: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000,
    },
  },
  replset: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000,
    },
  },
};

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Body parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Location of our static assets
app.use(express.static(__dirname + '/client/dist'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// API routes
app
  .route('/games')
  .post(postGame) // create a Game
  .get(getGames); // get all Games

app
  .route('/games/:id')
  .get(getGame) // get a single Game
  .delete(deleteGame); // delete a single Game

// For all other request.. return back Homepage
app.route('*').get((req, res) => {
  res.sendFile('client/dist/index.html', { root: __dirname });
});

const server = app.listen(app.get('port'), () =>
  console.log(`App running on PORT ${server.address().port}`)
);
