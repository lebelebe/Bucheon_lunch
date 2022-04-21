var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send('default page')
})

var api = require("./api/dbconnect");
app.use('/api', api);

app.listen(8080, () => {
    console.log("서버 구동 성공")
})