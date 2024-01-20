import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { abstract } = req.body;
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: abstract,
        max_tokens: 60
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      });
      res.status(200).json({ data: response.data.choices[0].text });
    } catch (error) {
      res.status(500).json({ error: 'Error calling OpenAI API' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
