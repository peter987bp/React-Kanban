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
      cardPosted: card
    });
  });
});


router.put('/api',(req,res) =>{
  Card.update(
    {
      title: req.body.title, piority_selection: req.body.piority_selection, status: req.body.status,
      created_by: req.body.created_by, assign_to: req.body.assign_to}, {where: {id: req.body.id}
    })
  .then(()=> {
    Card.findById(req.body.id)
    .then((serverUpdatedCard) => {
    res.json({
      sucess: true,
      serverUpatedCard: serverUpdatedCard.dataValues
    });
    })
  });
});

router.delete('/api', (req,res)=>{
  console.log('req.body: ', req.body.id);
  Card.findById(req.body.id)
    .then((deleted)=> {
      Card.destroy({where: {id: req.body.id} })
      .then(()=>{
      console.log('deleted: ', deleted);
      res.json({
        deleted: deleted.dataValues
      });
    });
  });

});

module.exports = router;