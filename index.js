const express = require('express');
const app = express();              
const port = 8080;                  


app.get('/', (req, res) => {       
    res.sendFile('index.html', {root: __dirname});      
                                                       
});

app.use("/static", express.static('./static/'));
app.use("/assets", express.static('./assets/'));

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});