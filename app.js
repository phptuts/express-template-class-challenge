const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userNames = [];

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Home' });

});

app.post('/add-user', (req, res) => {
    console.log(req.body);
    if (req.body.username) {
        userNames.push(req.body.username);
    }

    return res.redirect('users');
});

app.get('/users', (req, res) => {
    console.log(userNames);
    res.render('users', { usernames: userNames, pageTitle: 'User Entered' });
});

app.listen(3000, () => console.log('working'));