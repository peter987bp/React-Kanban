const express = require('express');
const router = express.Router();
const db = require('../models');
const Card = db.Card;



router.get('/api', (req,res)=>{
  Card.findAll({
    limit:20
  })
  .then((cards) => {
    res.json({
      sucess: true,
      cards: cards
    });
  });
});


router.post('/api',(req, res) =>{
  Card.create(
  {
    title: req.body.title,
    piority_selection: req.body.piority_selection,
    status: req.body.status,
    created_by: req.body.created_by,
    assign_to: req.body.assign_to
  })
  .then((card) => {
    res.json({
      cardposted: card
    });
  });
});


router.put('/api',(req,res) =>{
  console.log('req.body: ', req.body);
  console.log('req.body.id: ', req.body.id);
  Card.update(
    {
      title: req.body.title, piority_selection: req.body.piority_selection, status: req.body.status,
      created_by: req.body.created_by, assign_to: req.body.assign_to}, {where: {id: req.body.id}
    })
  .then((foo)=> {
    res.json({
      sucess: true
    });
  });
});

router.delete('/api', (req,res)=>{
  console.log('req.body: ', req.body.id);
  Card.destroy({where: {id: req.body.id} })
  .then((deleted)=> {
    res.json({
      deleted: deleted
    });
  });
});

module.exports = router;