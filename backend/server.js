const express = require('express');
const dotenv = require('dotenv');
const videoRoutes = require('./routes/videoRoutes');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'],allowedHeaders: ['Content-Type', 'Authorization']  }));


app.use('/api/videos', videoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
