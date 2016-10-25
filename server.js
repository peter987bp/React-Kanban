const express = require('express');
const app = express();
const db = require('./models');
const Card = db.Card;
const api = require('./routes/api.js');
const bp = require('body-parser');

app.use(bp.urlencoded({extended : true}));


app.use(express.static('./public'));
app.use('/api',api);




app.listen(8080, function() {
  console.log('server started');
  db.sequelize.sync();
});
module.exports = app;