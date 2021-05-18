const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_URL,{
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => console.log('Database Connected!'))
.catch(err => console.log(err));