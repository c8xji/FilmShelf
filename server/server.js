// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());  // 啟用 CORS 來解決跨域問題

app.get('/api/movies', (req, res) => {
  res.json([
    { title: "Inception", genre: "Sci-Fi", platform: ["Netflix", "Amazon"] },
    { title: "The Matrix", genre: "Action", platform: ["HBO", "Amazon"] }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
