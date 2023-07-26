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
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: generatePrompt(band),
      temperature: .7,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
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

const generatePrompt = (band) => {
  const capitalizedBand =
    band[0].toUpperCase() + band.slice(1).toLowerCase();
  return `Give me an answer of just the song name to this prompt: What is the easiest song to play on the drums by ${band}?`;
};

module.exports = findBand;



