const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const scienceRoutes = require('./routes/science');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(scienceRoutes);

async function start() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/journal');

        app.listen(PORT, () => {
            console.log('Server has been startes...');
        });
    } catch (error) {
        console.log(error);
    }
}

start();

