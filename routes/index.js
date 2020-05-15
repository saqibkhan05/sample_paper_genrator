var express = require('express');
var router = express.Router();
const bcs011 = require('./../models/bcs011');

/* GET home page. */

router.get('/',(req,res)=>{
  res.render('index');
});

router.get('/chart',(req,res)=>{
  res.render('charts/chart');
});

router.get('/newbcs011',(req,res)=>{
  res.render('bcs011_n');
});

router.post('/', async (req, res)=> {
  let data = new bcs011({
    time_zone:  req.body.time_zone,
    Question_no:  req.body.ques_no,
    Question_part:  req.body.ques_part,
    Marks:  req.body.marks,
    Block_no: req.body.blok_no,
    Unit_no:  req.body.unit_no,
    tag:  req.body.tag,
    Question: req.body.Questionmsg,
  })
  try {
    console.log(data);
    data = await data.save();
    res.redirect('/newbcs011');
  } 
  catch (error) {
    console.log(error);
    res.redirect('/')
  }
});

router.get('/showbcs011', async (req,res)=>{
  const p_data = await bcs011.find();
  res.render('bcs011_s',{p_data:p_data});
})



module.exports = router;
