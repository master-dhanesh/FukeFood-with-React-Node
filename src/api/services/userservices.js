const User = require('../models/userschema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.HomepageServices = new Promise( (resolve, reject) => {
    resolve('This is Homepage for testing purpose');
})

exports.SignupServices = (body) => {
   const  { name, username, password, email } = body;
   const newUser = new User({ name, username, password, email });

    return new Promise( (resolve, reject) => {
        User.findOne({username})
            .then( user => {
                if(user) return reject('User already exists');
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(newUser.password, salt, function(err, hash) {
                        newUser.password = hash;
                        newUser.save()
                        .then(userCreated => resolve(userCreated))
                        .catch(err => reject(err));
                    });
                });
            }).catch(err => reject(err));
    });
}

exports.SigninServices = (req, body) => {
    const  { username, password } = body;
 
     return new Promise( (resolve, reject) => {
        User.findOne({username})
        .then( user => {
            if(!user) return reject('User not found');  

            bcrypt.compare(password, user.password)
                .then((isMatch) => {
                    if(!isMatch) return reject('Incorrect passowrd');
                    
                    const token = jwt.sign({user}, process.env.SECRET_KEY_JWT, { expiresIn: 60 * 60 });
                    req.header('auth-token', token);
                    resolve(token);
            });
            
        }).catch(err => reject(err));
     });
 }