const express = require('express');
const app = express();
const db = require('../models');
const Card = db.Card;



app.get('/', (req,res)=>{
  Card.findAll({
    limit:8
  })
  .then((cards) => {
    res.json({
      sucess: true,
      cards: cards
    });
  });
});

//Works
app.post('/',(req, res) =>{
  Card.create({
    title: req.body.title,
    piority_selection: req.body.piority_selection,
    status: req.body.status,
    created_by: req.body.created_by,
    assign_to: req.body.assign_to
  })
  .then((card) => {
    res.json({
      sucess: true
    });
  });

app.put('/',(req,res)=>{
  Card.update({title: req.body.title, pirority_selection: req.body.pirority_selection, status: req.body.status,
    created_by: req.body.created_by, assign_to: req.body.assign_to}, {where: {id: req.body.id} });

  })
  .then(()=> {
    res.json({
      sucess: true
    });
});

app.delete('/', (req,res)=>{
  console.log('req.body: ', req.body);
  Card.destory({where: {id: req.body.id} })
  .then(()=> {
    res.json({
      sucess: true
    });
  });

});
});

module.exports = app;