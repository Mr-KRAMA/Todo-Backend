const express = require('express');

const app = express(); 
app.use(express.json());

const user = [];
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}


app.post('/signup', function (req, res) {

    const username = req.body.username;
    const password = req.body.password;

    user.push({
        username: username,
        password: password
    });

    res.json({
        msg: 'User created successfully',
    });
console.log(user);
});


app.post('/signin', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;


    let foundUser = null;
    for (let i = 0; i < user.length; i++) {
        if (user[i].username == username && user[i].password == password) {
            foundUser = user[i];

        }
    }
    if (foundUser) {
        const token = generateToken();
        foundUser.token = token;
        res.json({
            token: token
        });

    }
    else {
        res.json({
            msg: 'Invalid username or password'
        });

    }
console.log(user);
});


app.listen(3000);
