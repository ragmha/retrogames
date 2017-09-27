const axios = require('axios');
const uri = 'http://localhost:7777/games';

// Helper function
export const catchErrors = fn => (req, res, next) =>
  fn(req, res, next).catch(next);

export const getGames = async () => {
  try {
    const response = await axios.get(uri);
    return await response.data;
  } catch (error) {
    console.error(`⛔ getGames ${error}`);
  }
};

export const deleteGame = async id => {
  try {
    const response = await axios.delete(`${uri}/${id}`);
    return await response.data;
  } catch (error) {
    console.error(`⛔ deleteGame ${error}`);
  }
};

export const submitGame = async body => {
  try {
    console.log(body);
    const response = await axios.post(uri, body);
    return await response.data;
  } catch (error) {
    console.error(`⛔ submitGame ${error}`);
  }
};

export const uploadPicture = () => {
  return new Promise((resolve, reject) => {
    filepicker.pick(
      {
        mimetype: 'image/*',
        container: 'modal',
        services: [
          'COMPUTER',
          'FACEBOOK',
          'INSTAGRAM',
          'URL',
          'IMGUR',
          'PICASA',
        ],
        openTo: 'COMPUTER',
      },
      function(Blob) {
        console.log(JSON.stringify(Blob));
        const handler = Blob.url;
        resolve(handler);
      },
      function(error) {
        console.error(error.toString());
        reject(error.toString());
      }
    );
  });
};
