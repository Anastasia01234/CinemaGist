const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose =  require('mongoose');
const cors = require('cors');

app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended:false}));

const conn_str = 'mongodb+srv://CanonJ:CanonPW@cluster0.0yqxgvb.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str)
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Succeeded...')
})
.catch(err => {
    console.log('Error in DB Connection ${err}');
});

const items = require('./routes/api/items');
app.use('/', items);

const users = require('./routes/api/users');
app.use('/api/users', users);