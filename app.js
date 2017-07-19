console.log("Starting Bot");

const Twitter = require('twit'),
      config = require('./config.js'),
      generateAff = require('./generateAffirmation'),
      T = new Twitter(config);

var stream = T.stream('user');

stream.on('tweet', replyAffirmation);

//Replies with makeTweet containint pickAffirmation result
function replyAffirmation(data){
  const replyTo = data.in_reply_to_screen_name;
  const text = data.text;
  const from = data.user.screen_name;
  const aff = generateAff.pickAffirmation();
  const message = '@' + from +" "+ aff;
  console.log(replyTo + ' ' + from);
  if(replyTo === 'AffirmationBorg'){
    postTweet(message);
    console.log(message);
  }
}
//Post a status
function postTweet(txt){
  const tweet = {
    status:txt
  }
  T.post('statuses/update', tweet, tweeted);
}
//Callback function for posting statuses
function tweeted(err,data,response) {
  if(!err){
    console.log("Great success!");
  }else{
    console.log('Something bad');
  }
}
