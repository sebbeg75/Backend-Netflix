const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/users');
const movieRoutes = require('./routes/movie');
const orderRoutes = require('./routes/orders');

app.use(express.json());
app.use(cors());
app.use('/users',userRoutes);
app.use('/movie',movieRoutes);
app.use('./orders',orderRoutes);

app.listen(PORT,()=> console.log('server running on port' + PORT));