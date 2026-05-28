const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'Node.js App Running Successfully 🚀'
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Prince',
      role: 'DevOps Engineer'
    },
    {
      id: 2,
      name: 'Rahul',
      role: 'Backend Developer'
    }
  ]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});