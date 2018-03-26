const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const quotes = [
"[+TSM-GOD] youre the one who uses asteroids for get laid",
"[02:29:12] <WoW-TSM> some of my matches were telebroadcasting there",
"[01:58:06] <TSM-GOD> when i talk shit is because you need a warning cos im a competitor like football manager",
"[01:57:12] <TSM-GOD> i talk shit when you deserves \ [01:57:22] <TSM-GOD> like a father who punish his sons",
"[23:57] <TSM-GOD> you cant make a headshot when youre crunched",
"[11:58:50] <TSM-GOD> the mexicans invent the video games with the little stick",
"[01:19:01] <TSM-GOD> the guy eat like 3 cigarretes boxes per day",
"[11:58:42] <TSM-GOD> i cant travel to the border just for a videogame \ [11:58:50] <TSM-GOD> i maybe get shoot by those fucking racist",
"[01:30:24] <TSM-GOD> i have all the ladies with his mouth open anytime im a real model asshole",
"[11:53:24] <TSM-GOD> im gona trade pink ds for xbox 360",
"[10:09:19] <TSM-GOD> batman legos and pure was about shit bicicletes",
"[11:18:09] <TSM-GOD> all the kids in the hood wana come to play my xbox",
"[11:49:02] <TSM-GOD> theres nothing better that work out your muscles while listen some too pack oldschool gangster rap",
"[01:43:30] <TSM-GOD> you can talk all the shit you want, but you have never be like me \ [01:43:05] <TSM-GOD> is like in real life, when youre a winner everybody want to take a piece of the pie make fake bullshit and be jealousness",
"[11:47:34] <TSM-GOD> in my house we are always me and my niggas",
"[01:46:37] <TSM-GOD> when they grow up they gona say in the future, damn that guy tsm was right i should have do something with my life besides be a fucking computer weirdo antisocial",
"[11:44:34] <TSM-GOD> did you ever hear too pack spic \ [11:44:38] <TSM-GOD> hes amagazing \ [11:46:38] <TSM-GOD> old school hip hop from the gettos",
"[11:17:42] <TSM-GOD> im one of the few people in mexico \ [11:17:48] <TSM-GOD> with xbox 360",
"<THESEXIESTMAN> im gona writte a book actually",
"[02:57:43] <TSM-GOD> my fist are like prayers of jesus ready to kick your ass",
"[10:51:02] <+TSM-GOD> i wanted to punch the guy who gets teletransportated in the flag stand",
"<+echo|HV> tsm you want to suck toms penis for new xbox games ? \ [21:40:26] <+TSM-GOD> what games",
"[01:31:30] <TSM-GOD> if i see you in front of me il throw you a punch to your nouse and it bleeds",
"[01:02:26] <TSM-GOD> if you got muscles \ [01:02:27] <TSM-GOD> show it \ [01:02:39] <TSM-GOD> prove yourself bitch",
"[01:03:43] <TSM-GOD> il cum your tees so they will be more rotten",
"[10:57:34] <TSM-GOD> im listening this album \ [10:57:49] <TSM-GOD> niggas with attitue \ [10:57:51] <TSM-GOD> for inspiration",
"<+TSM-GOD> im here doing chicken dance just to mess with you in front of your nerd face",
"[06:45:48] <TSM-GOD> .join \ [06:45:52] <TSM-GOD> lets make a pug to remember",
"[12:16:57] <+WoW-TSM> i dont belive nothing until i say it with my real eyes",
"<+TSM-GOD> rap comes from the heart straight to the gargant",
"[01:04:48] <Thesexiestman> you cant stand always in the same place \ [01:04:52] <Thesexiestman> with the same people \ [01:04:42] <Thesexiestman> in life you must change constantly your places",
"[12:18:22] <Thesexiestman> just follow the rivers",
"[06:12:31] <Thesexiestman> you fucking anemias bitch \ [06:12:36] <Thesexiestman> anorexican",
"[02:08:47] <WoW-TSM> i teach ppl to play thats why im gona make my own Ut training camp \ [02:08:49] <WoW-TSM> in youtube",
"[01:10:15] <Thesexiestman> but one fishes grave was in the batroom \ [01:10:20] <Thesexiestman> flushing the toilet \ [01:10:50] <Thesexiestman> everything that dies \ [01:10:56] <Thesexiestman> becomes in life in other places \ [01:11:03] <Thesexiestman> a rock \ [01:11:07] <Thesexiestman> is life \ [01:11:11] <Thesexiestman> same as the ground \ [01:11:19] <Thesexiestman> or the little microbies in your bed",
"<TSM-Mexicoschampion> my videos are a lesson in life about how a normal person with a lot of training and self courage can become one of the top players here",
"<TSM-Mexicoschampion> in mexico you must work in police if you want to end your collegiatures",
"<TSM-THEMEXICOSCHAMP> i got the muscles of an ancient aztec warrior and the handsomeness of a french person",
"<TSM-THEMEXICOSCHAMP> im a rich persons but i prefer to throw my money to man of the streets",
"<TSM-GOD> when the sun goes down and the moon lights my muscles",
"<TSM-GOD> owned well from behind",
"[21:19] <+TSM-GOD> il defend my gold with my lifes \ [21:20] <+TSM-GOD> like a laprechhaunt",
"<TSM-Legend> i bought my car thanks to ut",
"<TSM-Legend> im a celebrity here in mexico",
"<TSM-GOD> owned from the skies above",
"<TSM-GOD> i rice up from the ashes like the fenix",
"<+Ultranova> Cocksuckers dont join the pug if you will not play <+TSM-GOD> Calm down you Ape",
"<TSM-GOD> Davis you play so good that if you keep playing like that you will be my succesor",
"TSM Answers: I have another 3 professions besides be a professional UT player",
"<TSM-GOD> i have a heart of a brave lion",
"<TSM-GOD> Once time i went to boxing gym and let the kids suck some of my big dick",
"<+TSM-GOD> spain arent latinos <+TSM-GOD> youre so fucking ignorant dude",
"[03:12] <@TSM-GOD> my name was in the last prints of UT mintek says \ [03:12] <@TSM-GOD> featuring TSM \ [03:12] <@TSM-GOD> in the boxes of ut 99",
"<@TSM-GOD> I retire ut players",
"<+TSM-GOD> *putting out my belt to punish little brock*",
"[03:07] <@TSM-GOD> idont use nerd glasses \ [03:08] <@TSM-GOD> i got vission of an eagle",
"[05:26:31] <TSM-GOD> in my schoole i am like the celebreti aprentise",
"<+TSM-GOD> remember this words mintek forever <+TSM-GOD> even when everything is lost you need to use the earth of a lion always <+TSM-GOD> that words<+TSM-GOD> make me what i am now<+TSM-GOD> only fucking losers like ciro gets angry when you try to help him those people are the cancer of the world",
"[02:53] <@TSM-GOD> watch that @ in my nickname \ [02:53] <@TSM-GOD> it means i am the law here now",
"<+TSM-ThepeoplesChamp> you think youre thought cos you got @ ... jesus and me the perfect offense",
"<TSM-GOD> !8ball im the best ut player from latinoamerica <@ChanServ> TSM-GOD: Are you out of yout MIND?",
"<+TSM-GOD> youre just a phatologycal liar",
"[02:21:46] <TSM-GOD> all the girls in my school see me as the champ of games",
"[07:52:14] <TSM-GOD> com on and join already and get killed by the lion",
"<TSM-Legend> [10:24:36] im like the shark that swims in the silent",
"[05:08] <+TSM-GOD> are they swords from the age of dragons? \ [05:09] <+TSM-GOD> in europe was were the people fight dinosaurs and dragons \ [05:09] <+TSM-GOD> in the old ages",
"<DAREALSEXIESTMAN> you will run when you see my muscles",
"<REALSEXIESTMAN> WHEN I GO TO NIGHT CLUBS I ALWAYS GET 1 OR 2 WOMANS",
"<+SEXIESTMAN4EVER> your mom have animalips",
"<+SEXIESTMAN4EVER> dont call me sexyboy you fucking nixon"

];


const quotesLower = quotes.map(function(value) {
      return value.toLowerCase();
    });

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]"
}

function toLower(x) {
	return x.toLowerCase();
}

client.on("message", (message) => {
	
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;
	
	var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	var argsLower = args.map(function(value) {
      return value.toLowerCase();
    });
	
	args = argsLower;

  if(message.content.startsWith(config.prefix + "prefix")) {
	if(message.author.id !== config.ownerID) return;
  // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
	let newPrefix = message.content.split(" ").slice(1, 2)[0];
  // change the configuration in memory
	config.prefix = newPrefix;

  // Now we have to save the file.
	fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
	}
  
  if (command === 'ping') {
    message.channel.send("pong!");
  } else
  if (command === 'blah') {
    message.channel.send("meh!");
  }
  
  if (command === "asl") {
  let [age, sex, location] = args;
  message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }
  
  if (command === 'quote' || command === 'q') {
	if (!isNaN(args[0]) && args[0] <= quotes.length) {
		quoteNum = parseInt(args[0]);
		message.channel.send("Quote " + quoteNum + ": " + quotes[quoteNum - 1]);
	}
	else if (isString(args[0])) {
		let matches = quotesLower.filter(s => s.includes(args[0]));
		var matchesNum = getRandomInt(matches.length);
		if (matches.length > 0) {
			quoteNum = quotesLower.indexOf(matches[matchesNum]) + 1;
			message.channel.send("Quote " + quoteNum + ": " + quotes[quoteNum-1]);
		}
		else {
			message.channel.send("No matches found.");
		}
	}
	else {
	var quoteNum = getRandomInt(quotes.length) + 1;
    message.channel.send("Quote " + quoteNum + ": " + quotes[quoteNum - 1]);
	}
  }
});

client.login(process.env.BOT_TOKEN);
