const express = require('express');
const axios = require('axios');

const app = express();
const port = 8000;

// Enable CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Proxy the requests to the Google Places API
app.get('/api/google-ratings', async (req, res) => {
  try {
    const { name, address } = req.query;
    const apiKey = 'AIzaSyArh2ZyriFjYKhSCOo4Rbr2AM8YGIbZuRs'; // Replace with your Google Places API key

    const encodedName = encodeURIComponent(name);
    const encodedAddress = encodeURIComponent(address);

    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodedName}&inputtype=textquery&fields=rating&locationbias=point:${encodedAddress}&key=${apiKey}`;

    const response = await axios.get(url);
    const data = response.data;
    const rating = data.candidates?.[0]?.rating;

    res.json({ rating });
  } catch (error) {
    console.error('Error fetching Google rating:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
