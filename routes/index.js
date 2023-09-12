var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*POST form data*/
router.post('/story', function (req, res, next){
  let body = req.body;
  let newStory = getStory(body)
  res.render('story',{
    newStory: newStory
  })
})

module.exports = router;

function getStory(formData){
  if (formData.storyChoice === "1"){
    return generateStory1(formData);
  } else if (formData.storyChoice === "2"){
    return generateStory2(formData);
  } else if (formData.storyChoice === "3"){
    return generateStory3(formData);
  } else {
    return "invalid"
  }
}

function generateStory1(formData){
  return `Today was Ami's birthday, but it wasn't an ordinary birthday.
This year, Ami's friends brought many ${formData.adjective1} gifts. Her first
gift came from her brother Liam. He was very happy for Ami,
his gift was her favorite thing in the world: ${formData.noun1}. She
was so overjoyed when she got it. Her best friend Sam was
worried her gift may not be better than Liam's. ${formData.adverb},
Sam gave her gift to Ami. Ami opened it: ${formData.noun2}. Ami
${formData.verbPast} with joy. Sam was so surpised Ami loved the gift,
she wanted to ${formData.verb1}! Instead, she started ${formData.verbing}.
Ami didn't tell them that the best gift was coming from her parents: ${formData.plrnoun}.`
}
function generateStory2(formData){
  return `Twas a dark and stormy ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}!`
}
function generateStory3(formData){
  return `Twas a dark and stormy ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}!`
}