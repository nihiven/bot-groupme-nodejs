var HTTPS = require('https');
var botID = process.env.BOT_ID;

var quotes = [
  '"Asher! Guess what we did!" - Ghost',
  '"From the unbearable racket! My head!" - Asher Mir',
  '"We\'re great at this! Good thing we already have a day job, huh?" - Ghost',
  '"No Vex can vex us, no Taken can take us down." - Ghost',
  '"You know what I say about you Guardian? You do things big and you do them with style." - Devrim Kay',
  '"It\'s that falcon again. Is it following us, or are we following it?" - Ghost',
  '"Do you feel it? Hold on to your helmet! Do you feel it? The light is back!" - Ghost',
  '"Rawwwr, I\'m a big scary monster!" Not when the ghost and his guardian are around! "Oh no, you have defeated me! Ahhh!" - Ghost',
  '"If information is power, then we just got a whole lot more... of... the... you know, I can\'t even finish it." - Ghost',
  '"Woah wait wait wait wait, I\'m not ready! I had a whole thing for this... I had a charts and pictures, knew it, one time I did it all the... jeeze forget it! You know what, just forget it." - Cayde-6',
  '"Oh Failsafe, Cayde, we cleared out your baddies and did it with style." - Ghost',
  '"Ghost and guardian collection agency, that\'s us!" - Ghost',
  '"And that\'s a good haul. Go us!" - Ghost',
  '"Close the page on that guy. Are you hungry? I could eat." - Ghost',
  '"Oh look! Look! It\'s a Vex milk waterfall! Can we stop and... awww." - Ghost',
  '"I\'m so glad I can hear myself in the feed again. *Dooooo. Do re me fa so la ti dooooo!*" - Cayde-6',
  '"The translation software I have here is a bit rusty, but I believe they\'re saying some extremely rude things about your mother." - Devrim Kay',
  '"I used a pretty nasty word to describe Ghaul. I don\'t want to repeat it here." - Ghost',
  '"Does that fallen look like a transmat thieving thief to you? He looks like a transmat theieving thief to me." - Ghost',
  '"That one. That one\'s gotta be a transmat thieving thief. He looks even thiefier than the first one." - Ghost',
  '"Only my captain can access those memories. And he\'s super dead." - Failsafe',
  '"Got em! We got their spire. You should have seen us, we were amazing!" - Ghost',
  '"Stay in the shadows. THE SHADOWS!" - Ghost',
  '"And that\'s a good haul. GO US!" - Ghost',
  '"Dear Failsafe and Cayde, we got your stuff and we are awesome. Signed Ghost" - Ghost'
]

function respond() {
  var request = JSON.parse(this.req.chunks[0]);

  var hype1 = /^!hype1/im.test(request.text),
      hype2 = /^!hype2/im.test(request.text),
      hype3 = /^!hype3/im.test(request.text),
      rip = /^!rip/im.test(request.text),
      bird = /^!bird/im.test(request.text),
      nope = /^!nope/im.test(request.text),
      quote = /^!quote/im.test(request.text),
      help = /^!help/im.test(request.text),
      clap = /^!clap/im.test(request.text),
      twab = /^!twab/im.test(request.text),
      kujay = /^!kujay/im.test(request.text),
      yep = /^!yep/im.test(request.text),
      goose = /^!goose/im.test(request.text),
      dinklebot = /^!dinklebot/im.test(request.text),
      doom = /^!doom/im.test(request.text),
      gloom = /^!gloom/im.test(request.text),
      hype = /!hype$/im.test(request.text);

  // she goes for the badboy type
  this.res.writeHead(200);
  if (request.text) {
    if (hype) {
      var rn = Math.floor(Math.random() * Math.floor(3));
      postEmojis(rn);
    } else if (hype1) {
      postEmojis(0);
    } else if (hype2) {
      postEmojis(1);
    } else if (hype3) {
      postEmojis(2);
    } else if (rip) {
      postEmojis(3);
    } else if (bird) {
      postMessage('http://www.reactiongifs.com/wp-content/uploads/2013/07/finger.gif');
    } else if (nope) {
      postMessage('http://gif-finder.com/wp-content/uploads/2017/04/Danny-DeVito-Nope.gif');
    } else if (quote) {
      postQuote();
    } else if (help) {
      postHelp();
    } else if (clap) {
      postMessage('https://i.groupme.com/450x234.gif.b81338002ff74cd289b9b58e6ded81f1.large');
    } else if (goose) {
      postMessage('https://i.groupme.com/327x266.gif.1214f9ea0a9045dd99fbe6d8b757838f.large');
    } else if (twab) {
      postMessage('http://vaporl.ink/twab');
    } else if (kujay) {
      postMessage('https://static-cdn.jtvnw.net/previews-ttv/live_user_kujay-640x360.jpg');
    } else if (yep) {
      postMessage('http://nvn.io/img/yep.gif');
    } else if (dinklebot) {
      postMessage('https://www.youtube.com/watch?v=ycBWgfAZT3U');
    } else if (doom || gloom) {
      postMessage('https://www.reactiongifs.com/r/suitm.gif');
    } else {
      console.log("don't care");
    }
  }
  this.res.end();
}
function postMessage(message) {
  var options, body, botReq;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : message
  };

  console.log('sending ' + message + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if (res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });

  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });

  botReq.end(JSON.stringify(body));
}

function postEmojis(emojiSet) {
  var options, body, botReq, emojis;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  emojis = {
    0: [
      [18, 21], // 100
      [9, 20], // shaka brah
      [9, 21], // make it rain
      [9, 33], // rainbow flag
      [18, 21], // 100
      [9, 20], // shaka brah
      [9, 21], // make it rain
      [9, 33], // rainbow flag
      [18, 21], // 100
      [9, 20], // shaka brah
      [9, 21], // make it rain
      [9, 33], // rainbow flag
      [18, 21], // 100
      [9, 20], // shaka brah
      [9, 21], // make it rain
      [9, 33] // rainbow flag
    ],
    1: [
        [3, 11],
        [3, 83],
        [3, 96],
        [3, 93],
        [3, 81],
        [3, 11],
        [3, 83],
        [3, 96],
        [3, 93],
        [3, 81],
        [3, 11],
        [3, 83],
        [3, 96],
        [3, 93],
        [3, 81],
        [3, 11]
    ],
    2: [
        [1, 64], // 100
        [9, 10], // mind blown
        [1, 64], // 100
        [9, 10], // mind blown
        [1, 64], // 100
        [9, 10], // mind blown
        [1, 64], // 100
        [9, 10], // mind blown
        [1, 64], // 100
        [9, 10], // mind blown
        [1, 64], // 100
        [9, 10], // mind blown
        [1, 64], // 100
        [9, 10], // mind blown
        [1, 64], // 100
        [9, 10] // mind blown
    ],
    3: [
        [4, 36], // lots of rips
        [4, 36],
        [4, 36],
        [4, 36],
        [4, 36],
        [4, 36],
        [4, 36],
        [4, 36],
        [4, 36],
        [4, 36],
        [4, 36],
        [4, 36],
        [4, 36],
        [4, 36],
        [4, 36],
        [4, 36]
      ],
  };

  body = {
    "bot_id" : botID,
    "text" : '☃☃☃☃☃☃☃☃☃☃☃☃☃☃☃☃',
    "attachments": [{
      "type": "emoji",
      "placeholder": '☃',
      "charmap": emojis[emojiSet]
    }]
  };

  console.log('sending emojis to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if (res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });

  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });

  botReq.end(JSON.stringify(body));
}

function postQuote() {
  var i = quotes.length;
  var x = Math.floor(Math.random() * i);

  postMessage(quotes[x]);
}

function postHelp() {
  var msg;
  msg = 'Deej Help\n!hype: Post random hype message!\n!hype1, !hype2, !hype3: Post a specific hype message!\n!quote: Post one of ' + quotes.length +' awesome Destiny 2 quotes!\n!bird: Jacky boy!\n!nope: Nope, nope...\n!yep: YEP\n!rip: riiiiip\n!clap: Applause!\n!twab: This Week at Bungie link\n!kujay: Live picture of THE MAN HIMSELF\n!goose: goose is ANGRY\n!dinklebot: Link the Dinklebot SUPERCUT.\n!doom or !gloom: The season is fucking over...';
  postMessage(msg);
}

exports.respond = respond;
