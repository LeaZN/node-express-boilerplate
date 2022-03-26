import express from 'express';
import bodyParser from 'body-parser';
import mongoose from  'mongoose';
import cors from  'cors';


import artistRoutes from './routes/artists.js';
import albumRoutes from './routes/albums.js';


const app = express();



app.use(bodyParser.json({ limit: "30mb", extended:  true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:  true }));
app.use(cors());


app.use('/artists', artistRoutes);
app.use('/albums', albumRoutes);


const CONNECTION_URL = 'mongodb+srv://trackthub1:trackthub123@cluster0.s6noa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));


//https://www.mongodb.com/cloud/atlas

