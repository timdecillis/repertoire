const { Configuration, OpenAIApi } = require("openai");

const {
  getSongs,
  saveSong,
  deleteSong,
  updateSong,
  updateNotes,
  createUser,
} = require("./models.js");

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = {
  findBand: async (req, res) => {
    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message:
            "OpenAI API key not configured, please follow instructions in README.md",
        },
      });
      return;
    }
    const { band } = req.body;
    const { instrument } = req.body;
    const { difficulty } = req.body;
    if (band.trim().length === 0) {
      res.status(400).json({
        error: {
          message: "Please enter a valid band",
        },
      });
      return;
    }
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: generatePrompt(band, instrument, difficulty),
          },
        ],
        temperature: 0,
      });
      res
        .status(200)
        .json(JSON.parse(completion.data.choices[0].message.content));
    } catch (error) {
      if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
          error: {
            message: "An error occurred during your request.",
          },
        });
      }
    }
  },
  createUser: (req, res) => {
    let { email, password } = req.body;
    createUser(email, password)
      .then(() => {
        res.status(201).send();
      })
      .catch((err) => {
        console.log("Error adding user:", err);
      });
  },
  getSongs: (req, res) => {
    let { email } = req.query;
    getSongs(email)
      .then((user) => {
        if (user) {
          const { songs } = user;
          res.status(200).send(songs);
        } else {
          console.log('controller user not found');
          res.status(200).send();
        }
      })
      .catch((err) => {
        console.log("Error retrieving songs:", err);
      });
  },
  addSong: (req, res) => {
    saveSong(req.body)
      .then((songs) => {
        res.status(201).send(songs);
      })
      .catch((err) => {
        console.log("Error adding song:", err);
      });
  },
  deleteSong: (req, res) => {
    deleteSong(req.body.email, req.body.song, req.body.artist)
      .then((songs) => {
        res.status(203).send(songs);
      })
      .catch((err) => {
        console.log("Error deleting song:", err);
      });
  },
  updateSong: (req, res) => {
    updateSong(
      req.body.email,
      req.body.song,
      req.body.artist,
      req.body.completed
    )
      .then((songs) => {
        res.status(202).send(songs);
      })
      .catch((err) => {
        console.log("Error updating song:", err);
      });
  },
  updateNotes: (req, res) => {
    updateNotes(req.body.email, req.body.song, req.body.artist, req.body.notes)
      .then((notes) => {
        res.status(202).send(notes);
      })
      .catch((err) => {
        console.log("Error updating notes:", err);
      });
  },
};

const generatePrompt = (
  band,
  instrument = "guitar",
  difficulty = "beginner"
) => {
  const capitalizedBand = band[0].toUpperCase() + band.slice(1).toLowerCase();
  return `You are an expert music teacher. You have been asked to provide 3 songs by ${band} for a ${difficulty}-level player to learn on the ${instrument}. Take into consideration tempo, song complexity, and technical difficulty. Return only a JSON object, with this format: {artist: ${band}, songs: ['song 1', 'song 2', 'song 3']}.`;
};
