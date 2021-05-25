const { count } = require('console');
const { sign } = require('crypto');
const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity(`d.help | FLEXING 💪`, { type: 'PLAYING' });
 });

client.on('message', msg => {

  //Ping Command 
  if (msg.content === 'd.ping' || msg.content === 'D.ping') {
    msg.reply(`This bot's ping is ${client.ws.ping}ms`);
  }
  //Auto Respond
  
 //Tar Tar Command
 if(msg.content == 'tar tar' || msg.content == 'tar Tar' || msg.content == 'TAR TAR' || msg.content == 'Tar Tar' || msg.content == 'Tar tar') {
	msg.channel.send('Tar Tar!');
  }
 //Pri Pri Command
  else if(msg.content == 'pri pri' || msg.content == 'pri Pri' || msg.content == 'PRI PRI' || msg.content == 'Pri Pri' || msg.content == 'Pri pri') {
	msg.channel.send('Pri Pri!');
  }
 //Sri Sri Command
  else if(msg.content == 'sri sri' || msg.content == 'sri Sri' || msg.content == 'SRI SRI' || msg.content == 'Sri Sri' || msg.content == 'Sri Sri') {
	msg.channel.send('Sri Sri!');
  }

//Ah Yes
else if(msg.content === 'ah yes' || msg.content === 'Ah Yes' || msg.content === 'AH YES' || msg.content === 'Ah yes'){
	msg.channel.send('Ah Yes!');
}
//No U
else if(msg.content === 'No u' || msg.content === 'no u' || msg.content === 'No U' || msg.content === 'NO U'){
  msg.channel.send('No U!');
}
//Oof
else if(msg.content === 'Oof' || msg.content === 'oof' || msg.content === 'OOF' || msg.content === 'OoF' || msg.content === 'oOf' || msg.content === 'ooF'){
msg.channel.send('Oof!');
}
//... -> ok then
else if(msg.content === '...'){
msg.channel.send('Ok then');
}
//Oh -> Ok
if(msg.content === 'OH' || msg.content === 'oh' || msg.content === 'oH' || msg.content === 'Oh'){
msg.channel.send('Ok');
}
//Help
  else if (msg.content === 'd.help' || msg.content === 'D.help') {
    const settingsembed = new Discord.MessageEmbed()
    .setTitle('All Help!')  
    .setColor('#0099ff')
      .addFields(
        { name: 'Fun Help', value: '"d.helpfun" - Get all of the fun commands!', inline: false },
        { name: 'Moderation Help', value: '"d.helpmod" - Get all of the moderation commands!', inline: false },
        { name: 'Miscellaneous Help', value: '"d.helpmisc" - Get all of the miscellanous commands!', inline: false },
      );
      msg.channel.send(settingsembed);
  }
  //Time
  else if (msg.content === 'd.helpfun' || msg.content === 'D.helpfun') {
    const settingsembed = new Discord.MessageEmbed()
    .setTitle('Fun Help!')  
    .setColor('#0099ff')
      .addFields(
        { name: 'Rap', value: '"d.raps" - Use this to find the raps made by DJ FrappaCappe!', inline: false },
        { name: 'Random Number Generator', value: '"d.number" - Use this to generate a random number!', inline: false },
        { name: 'Flip a coin', value: '"d.flip" - Use this to flip a coin!', inline: false },
        { name: 'Meme', value: '"d.meme" - Use this to generate a meme!', inline: false },
	{ name: 'Bubble Wrap', value: '"d.bubblewrap" - Use this to pop a bubblewrap!', inline: false },
	{ name: 'Auto Respond', value: 'I also have neat auto respond functionality!', inline: false },
      );
    msg.channel.send(settingsembed);
  }
  //Mod Help
  else if (msg.content === 'd.helpmod' || msg.content === 'D.helpmod'){
    const settingsembedtwo = new Discord.MessageEmbed()
    .setTitle('Moderation Help!')
    .setDescription('These commands are light so they do not log')  
    .setColor('#0099ff')
      .addFields(
        { name: 'Clean Channel', value: '"d.clean" - Use delete all messages in a channel![Doesn\'t work on messages older than 2 weeks old]', inline: false },
        { name: 'Kick', value: '"d.kick" - Use this to kick someone out of your server!', inline: false },
        { name: 'Ban', value: '"d.ban" - Use this to ban someone in your server!', inline: false },
      );
    msg.channel.send(settingsembedtwo);
  }
  //Misc Help
  else if (msg.content === 'd.helpmisc' || msg.content === 'D.helpmisc'){
    const settingsembedthree = new Discord.MessageEmbed()
    .setTitle('Miscellaneous Help!')  
    .setColor('#0099ff')
      .addFields(
        { name: 'Statistics', value: '"d.stats" - Use this to get the bot\'s statistics!', inline: false },
        { name: 'Invite', value: '"d.invite" - Use this to invite my bot to your server!', inline: false },
        { name: 'Ping', value: '"d.ping" - Use this to see the response time for my bot!', inline: false },
        { name: 'Discord Server', value: '"d.server" - Use this to get the link to my creator\'s discord server!', inline: false },
        { name: 'Support Server', value: '"d.support" - Use this to get the link to my support server!', inline: false },
        { name: 'Top.gg Page', value: '"d.top.gg" - Use this to get the link to my top.gg page!', inline: false },
      );
    msg.channel.send(settingsembedthree);
  }
  //Invite Bot Link
  else if (msg.content === 'd.invite' || msg.content === 'D.invite') {
    const settingsembed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .addFields(
        { name: 'Link', value: 'The link to add my bot to your server is https://discord.com/oauth2/authorize?client_id=776522832648863775&permissions=8&scope=bot', inline: false },
      );
    msg.channel.send(settingsembed);
  }
  //Support Server Link
  else if (msg.content === 'd.support' || msg.content === 'D.support'){
    const settingsembed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .addFields(
        { name: 'Support Server', value: 'Here is the link to my support server: https://discord.com/invite/sEnNKfVEkh'},
      );
    msg.channel.send(settingsembed);
  }
  //Server Info
  else if (msg.content === 'd.serverinfo' || msg.content === 'D.serverinfo') {
    const settingsembed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .addFields(
        { name: 'Server Name', value: `${msg.guild.name}`},
        { name: 'Server Region', value: `${msg.guild.region}`},
        { name: 'User Count', value: `${msg.guild.memberCount}`},
        { name: 'Created Date', value: `${msg.guild.createdAt}`},
      );
    msg.channel.send(settingsembed);
  }
//Bubblewrap
  else if (msg.content === 'd.bubblewrap' || msg.content === 'D.bubblewrap'){
     msg.channel.send('||pop||||pop||||pop||||pop||||pop||\n||pop||||pop||||pop||||pop||||pop||\n||pop||||pop||||pop||||pop||||pop||\n||pop||||pop||||pop||||pop||||pop||\n||pop||||pop||||pop||||pop||||pop||');
  }
  //User Info
  else if (msg.content === 'd.userinfo' || msg.content === 'D.userinfo') {
    const settingsembed = new Discord.MessageEmbed()
      .setTitle('Info for' + `${msg.author.username}`)
      .setColor('#0099ff')
      .addFields(
        { name: 'User ID', value: `${msg.author.id}`},
        { name: 'User Account Creation', value: `${msg.author.createdAt}`},
      );
    msg.channel.send(settingsembed);
  }
  //Stats
  else if (msg.content === 'd.stats' || msg.content === 'D.stats'){
    var os = require('os');
    const fs = require('fs')
    var stats = fs.statSync('bot.js');
    var mtime = stats.mtime;
    var usedMemory = os.totalmem() - os.freemem(), totalMemory = os.totalmem();
    var getpercentage = ((usedMemory/totalMemory) * 100).toFixed(2) + '%';
	let totalSeconds = (client.uptime / 1000);
	let days = Math.floor(totalSeconds / 86400);
	totalSeconds %= 86400;
	let hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = Math.floor(totalSeconds % 60);
	let uptime = `${days} day\(s\), ${hours} hour\(s\), ${minutes} minute\(s\) and ${seconds} second\(s\)`; 
    const settingsembed = new Discord.MessageEmbed()  
    .setTitle('DeezGunz Bot Statistics | Blue Sage')
	.setDescription('View the statistics for the DeezGunz Bot here!')
      .setColor('#0099ff')
      .addFields(
	{ name: 'Library', value: 'discord.js', inline: true }, 
        { name: 'RAM Used', value: (usedMemory/Math.pow(1024, 3)).toFixed(2) + 'GB/16GB\n' + (getpercentage), inline: true },	
        { name: 'Ping', value:  `${client.ws.ping}ms`, inline: true },
        { name: 'Servers', value:  `${client.guilds.cache.size} servers!`, inline: true },
	{ name: 'Users', value:  `${client.users.cache.size} users!`, inline: true },
	{ name: 'Uptime', value: (uptime), inline: true },
      );
    msg.channel.send(settingsembed);
  }
  //Relaxation Realm Server Link
  else if (msg.content === 'd.server' || msg.content === 'D.server') {
    const settingsembed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .addFields(
        { name: 'Creator\'s Server', value: 'Join my creator\'s really cool discord server: https://discord.com/invite/KJh499Z', inline: true },
      );
    msg.channel.send(settingsembed);
  }
  //Top.gg Page Link
  else if (msg.content === 'd.top.gg' || msg.content === 'D.top.gg'){
    const settingsembed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .addFields(
        { name: 'Top.gg Page', value: 'Check out our cool Top.gg page: https://top.gg/bot/776522832648863775', inline: true },
      );
    msg.channel.send(settingsembed);
  }
  //Rap
  else if (msg.content === 'd.rap' || msg.content === 'D.rap' || msg.content === 'd.raps' || msg.content === 'D.raps') {
    const settingsembed = new Discord.MessageEmbed()
    .setTitle('Raps')
    .setDescription('All of these raps where made by DJ FrappaCappe. Some of the raps contain some explicit language.')
    .setColor('#0099ff')
      .addFields(
        { name: 'Rap 1 - Friend', value: '"d.rap1"', inline: false },
        { name: 'Rap 2 - Frappe or Cappe', value: '"d.rap2"', inline: false },
        { name: 'Rap 3 - What did you do - Parody of Bands out the Roof by Lil Mosey', value: '"d.rap3"', inline: false },
        { name: 'Rap 4 - Love you', value: '"d.rap4"', inline: false },
      );
    msg.channel.send(settingsembed);
  }
  //Rap 1
  else if (msg.content === 'd.rap1' || msg.content === 'D.rap1'){
    msg.channel.send('\nYeah, I was walking\nYeah, I was walking\nAll alone, by myself\nCuz I ain\'t got no friends yet\nI just need someone\nThat will stay\nBy my side til the end\nI wish I had a friend\nI wish I had a friend\nI\'m outside at night\nWith Me, Myself and I\nAnd I don\'t know why\nThese people don\'t like me\nDo you think I\'m high?\nTell me the truth don\'t lie\nIs it cuz I can\'t afford a home\nAnd I can\'t afford a bed\nAnd I can\'t afford some food\nAnd I can\'t afford good clothes\nYeah, I can\'t afford nothing\nI can\'t afford nothing\nBut God just give me one thing\n\n- A Friend');
  }
  //Rap 2
  else if (msg.content === 'd.rap2' || msg.content === 'D.rap2'){
    msg.channel.send('\nAyy, I just f###ed a b##ch,\nI f###ed her in Paris and left her in a ditch\nI left her in a ditch cuz she a f###ing snitch\nFound another girl, and I took her to fry fish\nYo, I\'m a god and you ain\'t, you wish\nI\'m a f###ing god and your f###ing doodoo\nYou a piece of s###, go eat some poopoo\nI was walking, she was talking\nSaw a guy, and we start gawking\nCause he was outside, jaywalking\nHe asked, you got any skills and this was my answer\nYo you know that I\'m an epic dancer\nI was out in London and started moonwalking\nAll the people out there came to me, started flocking\nAnd everyone knows that I\'m the best rapper\nCuz I\'m the commander and you a salamander\nThese kids be tryharding, they\'re noobs for real\nBro you so fat you\'re an elephant seal\nFight me b##ch, I\'ll peel you like a banana\nYou be trying to look cool with Lil Mosey\'s bandana\nRemember in his song he says blueberry faygo\nHe was talking to you, saying f###ot-just go\nOh, you a mother f###ing a## h##\nCome see my concert, I put up a big show\nYo, when the lights turn off I glow\nIts easy for me, I go with the flow\nI took her on a trip with a lotta cargo\nI went hunting, got a lotta ammo\nShe\'s pretty bad, she a oldstyle he\nI got the rifle, and she got the crossbow\nAnd then we went to a b-ball game show\nI took a shot and I made the free throw\nAnd then I left her and went to a plateau\nSaw a rhino, so I took a photo\nThen I walked all the way back to my Lambo\nI went inside and turned on the radio\nAnd guess what, the song was lit\nTurns out that they were playing Juice WRLD\nWhich is a good thing cuz he\'s outta this world\nAnd then I saw this stupid a## kid\nI almost hit him, but I slid\nI asked him if he was hurt\nHe said no, that was a lit skrrt\nAnd now its the end of my epic rap\nBut before I go I got something to ask\nDo you prefer a frappe or a cappe?\nI know what I like- a frappacappe');
  }
  //Rap 3
  else if (msg.content === 'd.rap3' ||msg.content === 'D.rap3'){
    msg.channel.send('Ooh, what the f### did you do\nWhat did you do to my expensive shoes\nYou, are f###ing poopoo\nI\'m in L.A. with a bad b##ch too\nOoh, you a bad b##ch too\nWhat should I do, Imma pull up on you\nI\'m on the roof wearing my Gucci shoes\nOoh, you a b##ch f### you\nF### you as I walk through\nYeah you want me but I don\'t want you\nBaby throw it back, I put it on you\nThey just want the racks, they don\'t want you\nPlaques on plaques yeah, that\'s a hundred trophies\nHate what I did to get these diamonds on me\nStill hittin\' licks, got new Amiri on me\nB-Bustdown, yeah, got some racks on my Rollie\nSome things, we\'ll never be\nMoney, cars, b##ches there for me\nSing you a lil\' symphony\nCheated on you, give me sympathy\nOoh, what the f### did you do\nWhat did you do to my expensive shoes\nYou, are f###ing poopoo\nI\'m in L.A. with a bad b##ch too\nOoh, you a bad b##ch too\nWhat should I do, Imma pull up on you\/I\'m on the roof wearing my Gucci shoes\nOoh, you a b##ch f### you\nYeah, yeah, yeah, yeah, yeah\nI am the man, man, man, man\nHopped out on you, they popped out again\nBands, bands, I\'m thumbin\'Just chill and relax, lay in the pool\nThey say you want, still pull up back to\nRarri, I\'m gone, still got the same coupe\nFlowing on songs, still popping things too\nSome things, we\'ll never be\nMoney, cars, b##ches there for me\nSing you a lil\' symphony\nCheated on you, give me sympathy\nOoh, what the f### did you do\nWhat did you do to my expensive shoes\nYou, are f###ing poopoo\nI\'m in L.A. with a bad b##ch too\nOoh, you a bad b##ch too\nWhat should I do, Imma pull up on you\nI\'m on the roof wearing my Gucci shoes\nOoh, you a b##ch f### you\nOoh, yeah Royce got the juice\nHe got the Rolls Royce and he skrrted off too\nOoh, and I\'m lookin\' very cool\nIce on my neck, yeah, you got some too\nYeah, yeah what did you do, lookin\' like a fool\nRuined my gucci shoes\nYeah, big s###');
  }
  //Rap 4
  else if (msg.content === 'd.rap4' ||msg.content === 'D.rap4'){
    msg.channel.send('Yeah, I haven\’t told you this\nIt\’s, been a while\nAnd now, I think it\’s time\nTime, to tell you this\n\nGirl, every time I see you\nIt’s like I can\’t move\nI get so confused \nGirl, every time I see you\nIt\’s like I can\’t move\nLove how you stay cool\n\nThat\’s why I love you, love you, love you, love you, love you, love you\nYeah yeah, I love you, love you, love you, love you, love you, love you\nOh yes I love you, love you, love you, love you, love you, love you\nYeah girl I love you, love you, love you, love you, love you, love you (oooh)\n\nGirl, you\’re so beautiful\nYou\’re too pretty, it\’s wonderful\nYou\’re super hot, incredible\nGirl you\’re so cute, so lovable\nI want your love, make my heart full\nI want your heart, make my heart whole (whole, whole, whole)\nYeah make it whole (whole, whole, whole)\nMake my heart whole (whole, whole, whole)\nYeah girl, make my heart whole (whole, whole, whole)\n\nOh yeah, I love you, love you, love you, love you, love you, love you\nYeah yeah, I love you, love you, love you, love you, love you, love you\nOh yes I love you, love you, love you, love you, love you, love you\nYeah girl I love you, love you, love you, love you, love you, love you (oooh)\n\nWherever you go I\’ll follow you\nWherever you go I\’ll come with you\nYeah, I love you all the way\nPlease come back I miss your face\nGirl for you there\’s always space\nCome with me on one last date\nPromise you I won\’t be late\nUs together, it\’s our fate\nGirl can you be my soul mate?\n\nOh yeah, I love you, love you, love you, love you, love you, love you\nYeah yeah, I love you, love you, love you, love you, love you, love you\nOh yes I love you, love you, love you, love you, love you, love you\nYeah girl I love you, love you, love you, love you, love you, love you (oooh)\n\nGirl, don\’t run away\nI, want you to stay\nLet\’s, do this my way\nYeah, you are my babe');
  }
  //Meme Mode
  else if (msg.content === 'd.meme' || msg.content === 'D.meme'){
    randomNumber = (Math.round(Math.random(1, 30) * 100)/3);
    console.log(randomNumber);
	if (randomNumber < 2){
      const tenor1Attachment = new Discord.MessageAttachment('./tenor-1.gif')
      msg.reply(tenor1Attachment);
    }
    else if (randomNumber < 3) {
      const tenor2Attachment = new Discord.MessageAttachment('./tenor-2.gif')
      msg.reply(tenor2Attachment);
    }
    else if (randomNumber < 4){
      const tenorAttachment = new Discord.MessageAttachment('./tenor.gif')
      msg.reply(tenorAttachment);
    }
    else if (randomNumber < 5){
      const tenor3Attachment = new Discord.MessageAttachment('./tenor-3.gif')
      msg.reply(tenor3Attachment);
    }
    else if (randomNumber < 6) {
      const deezgunzAttachment = new Discord.MessageAttachment('./teachergunmeme.jpg')
    msg.reply(deezgunzAttachment);
    }
    else if (randomNumber < 7){
      const tenor4Attachment = new Discord.MessageAttachment('./tenor-4.gif')
      msg.reply(tenor4Attachment);
    }
    else if (randomNumber < 8){
      const tenor5Attachment = new Discord.MessageAttachment('./tenor-5.gif')
      msg.reply(tenor5Attachment);
    }
    else if (randomNumber < 9) {
      const tenor6Attachment = new Discord.MessageAttachment('./tenor-6.gif')
      msg.reply(tenor6Attachment);
    }
    else if (randomNumber < 10){
      const tenor7Attachment = new Discord.MessageAttachment('./tenor-7.gif')
      msg.reply(tenor7Attachment);
    }
    else if (randomNumber < 11){
      const tenor8Attachment = new Discord.MessageAttachment('./tenor-8.gif')
      msg.reply(tenor8Attachment);
    }
    else if (randomNumber < 12){
      const tenor9Attachment = new Discord.MessageAttachment('./tenor-9.gif')
      msg.reply(tenor9Attachment);
    }
    else if (randomNumber < 13){
      const tenor10Attachment = new Discord.MessageAttachment('./tenor-10.gif')
      msg.reply(tenor10Attachment);
    }
    else if (randomNumber < 14) {
      const tenor11Attachment = new Discord.MessageAttachment('./tenor-11.gif')
      msg.reply(tenor11Attachment);
    }
    else if (randomNumber < 15){
      const tenor12Attachment = new Discord.MessageAttachment('./tenor-12.gif')
      msg.reply(tenor12Attachment);
    }
    else if (randomNumber < 16){
      const scissorsAttachment = new Discord.MessageAttachment('./scissors.jpg')
      msg.reply(scissorsAttachment);
    }
    else if (randomNumber < 17) {
    const microsoftAttachment = new Discord.MessageAttachment('./microsoft.jpg')
      msg.reply(microsoftAttachment);
    }
    else if (randomNumber < 18){
      const goodboyAttachment = new Discord.MessageAttachment('./goodboy.jpg')  
      msg.reply(goodboyAttachment);
    }
    else if (randomNumber < 19){
      const moodAttachment = new Discord.MessageAttachment('./mood.png')
      msg.reply(moodAttachment);
    }
    else if (randomNumber < 20) {
      const squirrelAttachment = new Discord.MessageAttachment('./squirrel.jpg')
      msg.reply(squirrelAttachment);
    }
    else if (randomNumber < 21){
    const work2Attachment = new Discord.MessageAttachment('./work2.png')
      msg.reply(work2Attachment);
    }
    else if (randomNumber < 22){
      const mcdonaldsAttachment = new Discord.MessageAttachment('./mcdonalds.jpg')
      msg.reply(mcdonaldsAttachment);
    }
    else if (randomNumber < 23){
      const schoolAttachment = new Discord.MessageAttachment('./school.jpg')
      msg.reply(schoolAttachment);
    }
    else if (randomNumber < 24){
      const goalAttachment = new Discord.MessageAttachment('./goal.jpg')
      msg.reply(goalAttachment);
    }
    else if (randomNumber < 25){
      const fridayAttachment = new Discord.MessageAttachment('./friday.jpg')
      msg.reply(fridayAttachment);
    }
    else if (randomNumber < 26){
      const inkAttachment = new Discord.MessageAttachment('./ink.jpg')
      msg.reply(inkAttachment);
    }
    else if (randomNumber < 27){
      const teachingAttachment = new Discord.MessageAttachment('./teaching.jpg')
      msg.reply(teachingAttachment);
    }
    else if (randomNumber < 28){
      const teamAttachment = new Discord.MessageAttachment('./team.png')
      msg.reply(teamAttachment);
    }
    else if (randomNumber < 29){
      const workfromhomeAttachment = new Discord.MessageAttachment('./workfromhome.jpg')
      msg.reply(workfromhomeAttachment);
    }
    else if (randomNumber < 30){
      const challengeAttachment = new Discord.MessageAttachment('./challenge.jpg')
      msg.reply(challengeAttachment);
    }
  }
  //Flip coin
  if (msg.content === 'd.flip' || msg.content === 'D.flip'){
    var randomNumber = (Math.round(Math.random(1, 100) * 100));
    if (randomNumber >= 50){
      const headsAttachment = new Discord.MessageAttachment('./heads.jpg');
      msg.reply(headsAttachment);
    }
    else if(randomNumber < 50){
      const tailsAttachment = new Discord.MessageAttachment('./tails.jpg');
      msg.reply(tailsAttachment);
    }
  }
  //Random Number Generator
  else if (msg.content === 'd.number' || msg.content === 'D.number'){
    randomNumber = (Math.round(Math.random(1, 100) * 100));
    msg.reply('Your random number is ' + (Math.round(Math.random(1, 100) * 100)));
  }
  //Moderation Commands
  //Clean
  if (msg.content === 'd.clean' || msg.content === 'D.clean'){
    for (let index = 0; index < 10; index++) {
        msg.channel.messages.fetch({ limit: 100 }).then(messages => { // Fetches the messages
        msg.channel.bulkDelete(messages, // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
        );
    });
    }
    msg.reply('I finished cleaning this channel!');
  }
  //Kick
  else if (msg.content === 'd.kick' || msg.content === 'D.kick') {
    if (msg.member.permissions.has('ADMINISTRATOR') || msg.member.user.id == 459185417678487552) {
      const user = msg.mentions.users.first();
      if (user) {
        console.log(`${user.id}`);
        if(`${user.tag}` == 'satvikag#7832') {
          msg.reply('Sorry, I was unable to kick this user.');
        }
        else if (`${user.username}` == 'ThyMaster555') {
          msg.reply('ThyMaster555 has Deez Gunz so I can\'t kick him!');
        }
        else if (`${user.tag}` != 'satvikag#7832' & `${user.tag}` != 'ThyMaster555#5555') {
          const user = msg.mentions.users.first();
          const member = msg.guild.member(user);
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              msg.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              msg.reply('I was unable to kick the member!');
              console.error(err);
            });
        }
        else {
          msg.reply('That user isn\'t in this server!');
        }
      }
      else {
        msg.reply('You didn\'t mention a user to kick!');
      }
    }
    else{
      msg.reply('You don\'t have sufficient permissions!');
    }
  }
  //Ban
  else if (msg.content === 'd.ban' || msg.content === 'D.ban') {
    if (msg.member.permissions.has('ADMINISTRATOR')) {
      const user = msg.mentions.users.first();
      if (user) {
        const member = msg.guild.member(user);
        if(`${user.tag}` == 'satvikag#7832') {
          msg.reply('Sorry, I am unable to kick this user!');
        }
        else if (`${user.username}` == 'ThyMaster555') {
          msg.reply('ThyMaster555 has Deez Gunz so I can\'t kick him!');
        }

        else if (`${user.tag}` != 'satvikag#7832') {
          member
            .ban({
              reason: 'Not specified!',
            })
            .then(() => {
              msg.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {
              msg.reply('I was unable to ban the member!');
              console.error(err);
            });
        }
        else {
          msg.reply('That user isn\'t in this server!');
        }
      }
      else {
        msg.reply('You didn\'t mention a user to ban!');
      }
    }
    else{
      msg.reply('You don\'t have sufficient permissions!');
    }

  }
});
 
 
 client.login('Nzc2NTIyODMyNjQ4ODYzNzc1.X62HPg.9d6PvZ3WftDlQTX97OC4XPHc9t0');