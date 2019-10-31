const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.listen(3100, ()=>{
    console.log('server running on port 3100');
})

const movieCountList = { };

app.post('/', (req,res,next)=>{
    if (req.body.title in movieCountList){
        movieCountList[req.body.title]++;
    } else {
        movieCountList[req.body.title] = 1;
    }
    res.send("post successful");
});

app.get('/',(req,res,next)=>{
    res.json(movieCountList);
})