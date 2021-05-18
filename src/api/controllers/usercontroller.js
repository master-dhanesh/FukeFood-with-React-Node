const {
    HomepageServices,
    SignupServices,
    SigninServices
} = require('../services/userservices');

exports.HomepageController = (req, res, next) => {
    HomepageServices
        .then( response => res.status(200).json({message: response}))
}

exports.SignupController = (req, res, next) => {
    SignupServices(req.body)
        .then(user => res.status(201).json({message: 'successfully registered',user}))
        .catch(error => res.status(501).json({message: 'Something went wrong',error}))
}

exports.SigninController = (req, res, next) => {
    SigninServices(req, req.body)
        .then(user => res.status(200).json({message: 'User logged in',token: user}))
        .catch(error => res.status(501).json({message: 'Something went wrong',error}))
}