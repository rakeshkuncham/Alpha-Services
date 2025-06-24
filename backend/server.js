const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(require('cors')());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
