const mongoose = require('mongoose');
const url = "mongodb+srv://saurabh:Rapp1234@cluster0.1gyi6qz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('MongoDB Connected...');
    }).catch((err)=>{
        console.log('Error while creating MongoDB connection ',err);
    })