const { Configuration, OpenAIApi } = require ('openai');
const {get, post} = require('./models.js');


const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const findBand = async (req, res) => {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: 'OpenAI API key not configured, please follow instructions in README.md',
      }
    });
    return;
  }
  const band = req.body.band || '';
  if (band.trim().length === 0) {
    res.status(400).json({
      error: {
        message: 'Please enter a valid band',
      }
    });
    return;
  }

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: generatePrompt(band) },
      ],
      temperature: 0
    });
    res.status(200).json(JSON.parse(completion.data.choices[0].message.content));
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
};

const generatePrompt = (band, level = 'beginner', instrument = 'drums') => {
  const capitalizedBand =
    band[0].toUpperCase() + band.slice(1).toLowerCase();
  return `I would like 3 songs by ${band} for a ${level}-level player to learn on the ${instrument}. Return only a JSON object, with this format: {artist: ${band}, songs: ['song 1', 'song 2', 'song 3']}.`;
};

module.exports = findBand;



