const express = require('express');
const connectDB = require('./config/db');
const app = express();
const bodyParser = require('body-parser');
//Connect Database
connectDB();
// Initialize middleware
app.use(express.json({ extended: false }));
//test out endpoint
app.get('/', (req, res) => res.send('API Running'));

//Define the routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
