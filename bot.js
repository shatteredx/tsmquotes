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
"<+SEXIESTMAN4EVER> dont call me sexyboy you fucking nixon",
"<DAREALSEXIESTMAN> my ut honour is more important to me than all my girls at school",
"<TSM-GOD> im focusin all my nowlege to UT like the chinse monks",
"<TSM-Legend> I just go time for one more question sorry, the message is clear, follow the eagle of freedom, follow what the heart says and listen to the messages of the nature,the river is the greatest master when youre in troubles",
"<DAREALSEXIESTMAN> i play 6 months in tdmpickups and when i come back to ctf it was real easy for me",
"<@suga|51> is that you in the picture holding hte trophy \ <+SEXIESTMAN4EVER> yes why \ <+sus> because you are not a sexy man \ <+sus> :\ \ <+SEXIESTMAN4EVER> im not that guy \ <@Solo][> yeah ur ugly \ <+SEXIESTMAN4EVER> dumbass \ <+SEXIESTMAN4EVER> stupid fuck \ <+sus> just said it was you \ <+sus> i think it is you now \ <+sus> because you said it was \ <+SEXIESTMAN4EVER> i never say that",
"<+THEREALSEXIESTMAN> you gona open your nerd comic book store tomorrow \<+THEREALSEXIESTMAN> stupid weirdo",
"<+THEREALSEXIESTMAN> youre the fucking loser \ <+THEREALSEXIESTMAN> selling shit comic spider man comic books",
"<%TSM-LEGENDA> well if you make this channel to learn about my philosophys you can make it 1 vs 1 so i can teach you some new moves",
"<@[51]chicken-> you\'re full of shit <+TSM-GOD> whats wrong with that?",
"<+REALSEXIESTMAN> my next plan is retired players <+REALSEXIESTMAN> challenges to a death challenge",
"<%TSM-LEGENDA> i am the king youre the peons",
"<%TSM-LEGENDA> all i say has been glorified, again it proves that a normal mexican guy can be smartert than all the fucking american computer workers from usa",
"<+THEREALSEXIESTMAN> i was in the army for 9 years <+THEREALSEXIESTMAN> we dont like fucking pussys",
"[04:43:05] <TSM-LEGENDA> give me more publicity assholes",
"[04:44:42] <TSM-LEGENDA> now youre goiginto the patheticism",
"<+THEREALSEXIESTMAN> we have army dumbfuck <+Seinfeld`Curse> a terrible army<+THEREALSEXIESTMAN> i injury <+THEREALSEXIESTMAN> my arm <+THEREALSEXIESTMAN> break the big bones <+THEREALSEXIESTMAN> on a practice",
"<TSM-ThepeoplesChamp> but i will owned him with intelligence | <Lenneth|^> if a gay guy jumped on your back would you beat him off TSM? <TSM-ThepeoplesChamp> yeah <TSM-ThepeoplesChamp> so bad",
"<%TSM-LEGENDA> when i won the teamwarfare league in 2006 you can see the webpage and put HMW CLAN i even beat flux clan called 51",
"<+TSM-KIngOfLatinos> and im gona kick your thiny ass \ <+melissa7> thiny LOL X D \ <+TSM-KIngOfLatinos> melissa \ <+TSM-KIngOfLatinos> i can move the muscles of my ass",
"<THESEXIESTMAN-dArealdEal> i call my muscles friends \ <THESEXIESTMAN-dArealdEal> and i got a lot of muscles \ <THESEXIESTMAN-dArealdEal> bitch",
"<+TSM-LatinoLegend> an average person got like \ <+TSM-LatinoLegend> 4.000 muscles in body \ <+TSM-HoF|lkemas> nice TSM what about you \ <+TSM-LatinoLegend> i got like 8.000 so i think i got more muscles \ <+TSM-LatinoLegend> than friends",
"<TSM-KingofMexico> my muscles are like arnold shwarsanagers",
"<+TSM-Mexicoschampion> of couyrse im not fat \ <+TSM-Mexicoschampion> im an atlethe \ <+TSM-Mexicoschampion> i prefer die to be fat",
"<+TSM-Mexicoschampion> your stinky disgustes me",
"<TSM-GOD> i dare you to challenge me to the fight of the streets",
"<@TSM-detox> i say us 3 celebrate this victory with a giant tub of chocolate pudding \ <+TSM-LatinoLegend> that will make your stomach hurts \ <+TSM-LatinoLegend> we can celebrate with something healty \ <+TSM-LatinoLegend> we can have a celebration with cucumber water \ <+TSM-LatinoLegend> and working out our muscles",
"<THEREALSEXIESTMAN> eat lots of beans for muslces and all the girls will want you",
"<TSM-LEGENDA> this is a chanel with my stuff i make i can talk to mirc police and they will shut down this crap",
"<+TSM-LatinoLegend> if tom keeps drinking and smoking and eating shitfood like that hes gona die at 50.",
"<+TSM-ThepeoplesChamp> cucumber water \ <+TSM-ThepeoplesChamp> will clean your body \ <+TSM-ThepeoplesChamp> and soul",
"<+TSM-ThepeoplesChamp> cucumber will give you perfect skin and will revive your body from inside",
"<+TSM-ThepeoplesChamp> i got lots of muscles for everybody \ <+TSM-ThepeoplesChamp> no need to fight",
"<+TSM-ThepeoplesChamp> brock only thing he does is eat macdonals like a fucking pig \ <+TSM-ThepeoplesChamp> thats a very boring unleathy life",
"<@detox> bah smokers infesting our pugs \ <+TSM-ThepeoplesChamp> yeah man \ <+TSM-ThepeoplesChamp> hes not fucking healthy and he kills the woods \ <+TSM-ThepeoplesChamp> with his smoke",
"<+TSM-ThepeoplesChamp> when you smoke \ <+TSM-ThepeoplesChamp> you killyourself your breath your stomach and your nouse but worst than that \ <+TSM-ThepeoplesChamp> when you smoke the air of the cigarretes contaminates the woods and the silvester animals \ <+TSM-ThepeoplesChamp> youre like cancer \ <+TSM-ThepeoplesChamp> for the pulmons \ <+TSM-ThepeoplesChamp> of this world",
"<+TSM-ThepeoplesChamp> i do my hands in a model",
"<+TSM-ThepeoplesChamp> in my days in the streets like i got no mmoney for the gym i trained throwing guys and cutting wood like the guy in the video",
"<+SEXIESTMAN-MostfamousUTplayer> i do kickboxing and box \ <+SEXIESTMAN-MostfamousUTplayer> try punch \ <+Seinfeld`Curse> i got a gun \ <+SEXIESTMAN-MostfamousUTplayer> i can kick your gun \ <+SEXIESTMAN-MostfamousUTplayer> and then with my fist broke your nouses",
"<+lkemas> TSM, what would you do if you meet a man in the streets with a green gun \ <+THESEXIESTMAN-dArealdEal> it depends if his a kid \ <+THESEXIESTMAN-dArealdEal> a normal man \ <+THESEXIESTMAN-dArealdEal> or a old man \ <+THESEXIESTMAN-dArealdEal> if hes a kid i run away",
"<+DAREALSEXIESTMAN> in the street like 42 fights \ <+DAREALSEXIESTMAN> since the highschool \ <+DAREALSEXIESTMAN> all fights in street counts like a loose",
"<+THESEXIESTMAN-dArealdEal> my fists are considered as a weapon by the mexican law actually",
"<+THESEXIESTMAN-dArealdEal> i almost won the golden globes of mexico but \ <+THESEXIESTMAN-dArealdEal> i get injured",
"<+TSM-LatinoLegend> you shit your pants and call your mom if i challenge you to a street fight",
"<TSM-Mexicoschampion> if you were in my face i will punch you so hard you cant even remember",
"<+TSM-Mexicoschampion> when i was in jail \ <+TSM-Mexicoschampion> people spitting to the weakest person \ <+TSM-Mexicoschampion> i defended lots of bitches in prision \ <+TSM-Mexicoschampion> the ddudes like brock will commit suicide before go to jail",
"<+TSM-Mexicoschampion> i will kick your doors of your house \ <+TSM-Mexicoschampion> until you come out to face me \ <+TSM-Mexicoschampion> in a street figght",
"<+TSM-Mexicoschampion> in kickboxing they always uses the expresion heart of a lion before the fights \ <+TSM-Mexicoschampion> you must program yourself with that words everyday \ <+TSM-Mexicoschampion> face the life like a lion",
"<+TSM-ThepeoplesChamp> there is a reason why i exist to protect people from assholes like you",
"<+TSM-ThepeoplesChamp> if you call me spic to my face you will be shitting in your pants right now \ <+TSM-ThepeoplesChamp> your nerd cats cant save you now",
"<@TSM-ThepeoplesChamp> i heard that gays are great fighters but im not scarred",
"<@TSM-ThepeoplesChamp> if a gay jumps in my back i will take his face and smashes his face into the walls \ <@TSM-ThepeoplesChamp> in aikido i learn a nice move \ <@TSM-ThepeoplesChamp> i can move the muscles of my ass before \ <@TSM-ThepeoplesChamp> he can do that",
"<+TSM-LatinoLegend> but friends who can give his life to save me are detox and dragon",
"<+TSM-ThepeoplesChamp> at least he got real female friends you got nothing seinfield scum \ <+TSM-ThepeoplesChamp> in the farm you cant even know real people only talk with animals",
"<+TSM-Kingofmexico> mexican culture is about temples, pyramids, historis \ <+detox> mexican culture is just tequila, pinatas, and donkey shows \ <+TSM-Kingofmexico> american culture is just fucking spiderman shit, gay cowboys and hamburgers.",
"<+TSM-LatinoLegend> i can speak other 4 lenguajes \ <+TSM-LatinoLegend> franch spanish mexican and american \ <+TSM-LatinoLegend> my karate master teach me some words in korean but just a little \ <+TSM-LatinoLegend> i speak cling- on too",
"<+TSM-MEXICOSNUMBER1> french got the style and handsomnes \ <+TSM-MEXICOSNUMBER1> mexico got the attitude of a warrior",
"<+xios> wat \'rices from the ashes\' mean? \ <+TSM-ThepeoplesChamp> wake from the death \ <+TSM-ThepeoplesChamp> like when \ <+TSM-ThepeoplesChamp> youre having abeating in boxing and then \ <+TSM-ThepeoplesChamp> you get stamina from the skies and you won the match",
"<@Joe> ill 1v1 you if its DM not ctf \ <+REALSEXIESTMAN> youre my friend joe \ <+REALSEXIESTMAN> i dont want to humillate you \ <@Joe> whoa",
"<TSM> i win and i can help you",
"<TSM-BLOG> Fishes are good for concentration and focus, before a 1 vs 1 duel you must consult the fishes so they can give you wiseness and relax yourself while you see them swing.",
"<TSM-Legend> someone hack my bullets",
"<THESEXIESTMAN-dArealdEal> well actually my pug stats are 85% won \ <THESEXIESTMAN-dArealdEal> i have all the ss of my games \ <THESEXIESTMAN-dArealdEal> in here i just lost a pug \ <THESEXIESTMAN-dArealdEal> in all the pug channel history",
"<TSM-BLOG> Well there is a reason why TSM matches are the most famous in the land of the videogames, i almost beat mellisa in one of the most exciting duels ever in the history of Unreal Tournament.",
"[22:51] <+TSM-GOD> i was in a rap fight \ [22:51] <+TSM-GOD> thats how i get respected by the black comunity \ [22:51] <+TSM-GOD> i won",
"<+TSM-LatinoLegend> im training and the fruits are growing up good",
"<+Nark> not my exact car | <+Nark> but i owna 3000gt vr4 | <+TSM-ThepeoplesChamp> you got not even a bircycle | <+TSM-ThepeoplesChamp> you fucking child poor playing old videogames | <+TSM-ThepeoplesChamp> i mean a biciclete",
"<+TSM-Mexicoschampion> i calculate the moment exactly when the opponent make his steps",
"<+Nark> not my exact car \ <+Nark> but i owna 3000gt vr4 \ <+TSM-ThepeoplesChamp> you got not even a bircycle \ <+TSM-ThepeoplesChamp> you fucking child poor playing old videogames \ <+TSM-ThepeoplesChamp> i mean a biciclete",
"<+TSM-Mexicoschampion> damn my back is sweety for so much games in my server",
"<TSM-KingofMexico> noobs pay me for advice and i show them the best training",
"<+TSM-Mexicoschampion> i never type \ <+TSM-Mexicoschampion> those are my keibinds",
"<+TSM-Mexicoschampion> listen here, if you want to make the best combos \ <+TSM-Mexicoschampion> you need to practice at 300 speed \ <+TSM-Mexicoschampion> and then slow down the game to -40 speed \ <+TSM-Mexicoschampion> i train like that 4 weeks \ <+TSM-Mexicoschampion> are changing to normal to profesional",
"<+TSM-Mexicoschampion> he cant even kill me \ <+TSM-Mexicoschampion> i was just making fun of him \ <+TSM-Mexicoschampion> eating some sushi and wine while he tries to kill me",
"<+TSM-Mexicoschampion> some people like tyson and paquiao are good at boxing \ <+TSM-Mexicoschampion> im good at ut",
"<+lkemas> TSM, i've been training with 850 speed, is this overkill? Should i go back to mere 300 speed to improve my combos in movement? \ <+TSM-ThepeoplesChamp> well ikemas \ <+TSM-ThepeoplesChamp> im not here now \ <+TSM-ThepeoplesChamp> so i cant give you advices \ <+TSM-ThepeoplesChamp> *not here *",
"<+TSM-ThepeoplesChamp> my brother play half of all \ <+TSM-ThepeoplesChamp> my pugs",
"<+TSM-ThepeoplesChamp> was a tought match \ <+TSM-ThepeoplesChamp> i get sweaty that match in the back",
"<+TSM-ThepeoplesChamp> well me and style we come together i one package i cant be me without have style",
"<+TSM-Mexicoschampion> i have a jacket exactly \ <+TSM-Mexicoschampion> like the one \ <+TSM-Mexicoschampion> who uses brad pitt \ <+TSM-Mexicoschampion> in the fight club",
"<+TSM-Mexicoschampion> youre jealous cos i can buy a simpson chair living in mexico",
"<+TSM-Mexicoschampion> i got a new cocodrile shoes \ <+TSM-Mexicoschampion> you asshole \ <+TSM-Mexicoschampion> cocodrile letter boots \ <+TSM-Mexicoschampion> cocodrile skin boots \ <+AnceriZ> whats a cocodrile? \ <+TSM-Mexicoschampion> reptile \ <+TSM-Mexicoschampion> that swings in the water",
"<+TSM-ThepeoplesChamp> i still have my football jacket of the collage \ <+TSM-ThepeoplesChamp> i call it the sexiestman jacket \ <+TSM-ThepeoplesChamp> i use it for hard games \ <+TSM-ThepeoplesChamp> in ut",
"<+TSM-LatinoLegend> il fuck your mom \ <+TSM-LatinoLegend> then your sisters \ <+TSM-LatinoLegend> then il fuck you \ <+Kaetzchen> my mom is dead \ <+TSM-LatinoLegend> im gona fuck her grave",
"<+TSM-Mexicoschampion> homosexual fag \ <+TSM-Mexicoschampion> mintek was \ <+TSM-Mexicoschampion> fucking me",
"<+nark> i may suck at a video game tsm but you suck dick in real life \ <+TSM-Mexicoschampion> well nark youre here at 11:00 in a hot friday night \ <+TSM-Mexicoschampion> whos the loser now? \ <+Brock> so are you tsm \ <+TSM-Mexicoschampion> just like i say in speedpug \ <+TSM-Mexicoschampion> i just comeback from the club \ <+TSM-Mexicoschampion> im tired of sex with all those womens everyweekend",
"<+TSM-Mexicoschampion> you call your cats girlfriends \ <+TSM-Mexicoschampion> and masturbate with them",
"<+TSM-Mexicoschampion> suck my dick \ <+Brock> ok ill suck it \ <+TSM-Mexicoschampion> no way \ <+Brock> u asked me to \ <+Brock> dumbass \ <+TSM-Mexicoschampion> my dick is my most presious thing",
"<THEREALSEXIESTMAN> i go walk down the streets and i hear girls calling my name i cant help it",
"<+TSM-ThepeoplesChamp> i dont wana see your fat nerd body naked dude \ <+TSM-ThepeoplesChamp> detox told me you was strong like a greek good",
"<+TSM-ThepeoplesChamp> i take off my t shirt but i dont know why"
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
