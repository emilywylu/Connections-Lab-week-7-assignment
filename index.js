let express = require('express');
let app = express();

app.use(express.json());

// app.get('/', (req,res)=>{
//     res.send('main page tada');
// })


let allAdjectives =[];



// add route on server that is listening for post request
app.post('/adjectiveSubmission', (req,res)=>{
    console.log(req.body);
    let newAdjective = req.body;
    newAdjective.time = Date();
    allAdjectives.push(newAdjective);
    console.log(allAdjectives);
    res.json({task:"success"});
})

app.use('/', express.static('public'));

app.listen(3000,()=>{
    console.log('listening at localhost:3000');
})

//add route for all adjectives
app.get('/getAdj', (req,res)=>{
    let obj = {data: allAdjectives};
    res.json(obj);
})