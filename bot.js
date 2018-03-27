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
"<+TSM-ThepeoplesChamp> i take off my t shirt but i dont know why",
"<@ABot>  PUG has been filled. Type !captain to become a captain (40secs) \ <+TSM-ThepeoplesChamp> DAMN i was giving a webcam show to one of my girls \ <+TSM-ThepeoplesChamp> but the asshole writte join",
"<+TSM-ThepeoplesChamp> if you take the eyes and the nouses and the lips from the ultranooba face it just looks like a big bean not even a real face why you call him sexy",
"<+AnNiHiLaToR[HERO]> god i hope tsm never has sex...and passes his retarded genes.. \ <+TSM-ThepeoplesChamp> actually i get tired of have lots of sex \ <+TSM-ThepeoplesChamp> thats why i come here \ <+TSM-ThepeoplesChamp> fucking nerdo",
"<+TSM-ThepeoplesChamp> my dick will break your teeth \ <+TSM-ThepeoplesChamp> my muscular dick \ <+TSM-ThepeoplesChamp> will break your smile",
"<+TSM-ThepeoplesChamp> i bet lineth have never got a women in hes bed \ <+TSM-ThepeoplesChamp> he well get scared as shit \ <+Lenneth|^> you know the chick in that pic that you used \ <+TSM-ThepeoplesChamp> hahahahaha \ <+TSM-ThepeoplesChamp> shes not even loocking at you \ <+TSM-ThepeoplesChamp> you must fart lots of times",
"<+THEREALSEXIESTMAN> im an atlethe i want people happiness",
"<+THESEXIESTMAN-dArealdEal> rocky is a movie about know yourself \ <+THESEXIESTMAN-dArealdEal> the messages \ <+THESEXIESTMAN-dArealdEal> rocky gives to his son \ <+THESEXIESTMAN-dArealdEal> is the key of life",
"<+TSM-THEKING> for a winner theres always a tomorrow \ <+TSM-THEKING> for a loser \ <+TSM-THEKING> not",
"<+TSM-Mexicoschampion> only thing a man got are his honour and his memorys",
"<+TSM-Mexicoschampion> in my life i set objetives \ <+TSM-Mexicoschampion> one objetive was boxing \ <+TSM-Mexicoschampion> one objetive was modeling \ <+TSM-Mexicoschampion> one objetive was to prepare myself to hard life \ <+TSM-Mexicoschampion> when i complete those objetives \ <+TSM-Mexicoschampion> i can feel like a winner \ <+TSM-Mexicoschampion> amen",
"<+TSM-ThepeoplesChamp> youre living in the real world dragon the real world isnt nice \ <+TSM-ThepeoplesChamp> you cant stop throwing punches in your life",
"<+TSM-ThepeoplesChamp> get out of your house son \ <+TSM-ThepeoplesChamp> you live in a bubble of dreams",
"<+TSM-LatinoLegend> if i die \ <+TSM-LatinoLegend> people gona make a festival for me \ <+TSM-LatinoLegend> in the streets and ut \ <+TSM-LatinoLegend> if you die no one cares",
"<+TSM-Mexicoschampion> im a respected champion man",
"<@TSM-Mexicoschampion> in mexico some people considers me a national hero",
"<+TSM-ThepeoplesChamp> my youtube channel got one prize \ <+TSM-ThepeoplesChamp> most viewed gurus channel in mexico \ <+TSM-ThepeoplesChamp> place number 48",
"<+TSM-ThepeoplesChamp> im gona post the truths \ <+TSM-ThepeoplesChamp> cos people will follow me \ <+TSM-ThepeoplesChamp> until the day of my death \ <+TSM-ThepeoplesChamp> like superman",
"<@TSM-ThepeoplesChamp> we are both in the top of heaven \ <@TSM-ThepeoplesChamp> cos we are legends \ <@TSM-ThepeoplesChamp> hes in the floor dancing with the fucking worms",
"(+TSM-ThepeoplesChamp) shes my fan \ (+TSM-ThepeoplesChamp) youre jealous \ (+Rachela) Now ignoring TSM-ThepeoplesChamp \ (+TSM-ThepeoplesChamp) you made me lost a female fan \ (+TSM-ThepeoplesChamp) you piece of shit \ (+TSM-ThepeoplesChamp) disgusting acne asshole",
"<+TSM-ThepeoplesChamp> i got followers \ <+TSM-ThepeoplesChamp> the day i get out of irc \ <+TSM-ThepeoplesChamp> irc dies",
"<+TSM-ThepeoplesChamp> im in the wikipedia \ <+TSM-ThepeoplesChamp> im one of the biggest celebrities of this year",
"<+TSM-ThepeoplesChamp> dr dre? \ <+TSM-ThepeoplesChamp> i interviewed him once for my radio show hes a very natural person a good man \ <+TSM-ThepeoplesChamp> he got 3 kids",
"* ChanServ sets mode: -v+b wafk|baked *!*@WingLeSS.user \ * wafk|baked was kicked by ChanServ ((ABot) Repeat flood, 1 min ban.) \ <+TSM-LatinoLegend> hahah \ <@suga|51> wow TSM \ <@suga|51> dont use ur hack console here \ <+TSM-LatinoLegend> the fucker messed with me \ <+TSM-LatinoLegend> im teaching him a lesson",
"<+TSM-LatinoLegend> a hacker is my friend \ <+TSM-LatinoLegend> he knows all the codes of mirc \ <+TSM-LatinoLegend> thats why i get unbaned always in speedpug",
"* KingOfEthiopia was kicked by suga|TSM (SPAM) \ <+TSM-Mexicoschampion> i kicked him \ <+TSM-Mexicoschampion> with my console \ <+TSM-Mexicoschampion> !kick ethipopian \ * KingOfEthiopia was kicked by suga|TSM (TSM HACK CONSOLE) \ <+TSM-Mexicoschampion> dont ever mess with me \ <+TSM-Mexicoschampion> worm \ <+TSM-Mexicoschampion> you get it?",
"<+TSM-THEKING> alt f4 closes the MIRC \ <+TSM-THEKING> i study computers \ <+TSM-THEKING> for 3 years in university",
"<+TSM-ThepeoplesChamp> anti tweak alert whata fuck is that man is kicking me \ <+TSM-ThepeoplesChamp> mintek put me a tramp \ <+TSM-ThepeoplesChamp> the eagle will follow my way as the freedom will find the real heroe \ <+TSM-ThepeoplesChamp> im going strong againts the rivers",
"[23:08:29] [TSM-GOD]: not yet friend im bloging after my meals",
"<+TSM-LatinoLegend> your momy says hello since the deep lungs of hell you fucking weirdo scumbag",
"<+TSM-LatinoLegend> flux true has rat face \ <+TSM-LatinoLegend> he got face textures like a rat",
"<+TSM-Mexicoschampion> you fucking diarrea shit face \ <+TSM-Mexicoschampion> dont mess with me",
"<+soifon> well im not realyl picking the same source of comedy from him than what u guys are getting \ <+TSM-Mexicoschampion> comedy? \ <+TSM-Mexicoschampion> your life is a comedy \ <+TSM-Mexicoschampion> fucking sad nerd clown",
"<+TSM-Mexicoschampion> i beat you dont even know how to talk a girl \ <+TSM-Mexicoschampion> with your big balls of acne \ <+TSM-Mexicoschampion> and your stupid retarded glasses \ <+TSM-Mexicoschampion> you wear brasses too \ <+TSM-Mexicoschampion> fucking disgusting \ <+TSM-Mexicoschampion> il spit my salive into your face youre pathetic",
"<+KingOfEthiopia> u need to take a break from your race. \ <+TSM-Mexicoschampion> whats a race \ <+KingOfEthiopia> u know \ <+TSM-Mexicoschampion> racing? \ <+KingOfEthiopia> u know \ <+TSM-Mexicoschampion> race cars \ <+KingOfEthiopia> u know \ <+TSM-Mexicoschampion> you shut up",
"<+TSM-Mexicoschampion> HAVE FUN of your mom bitch asshole",
"<+TSM-Mexicoschampion> disgusting psycho pathetic i bet you live alone in shithole with lot of old pizza boxes and rotten hamburgerses",
"<+TSM-Mexicoschampion> i feel compasive today \ <+TSM-Mexicoschampion> dont wana make you cry \ <+TSM-Mexicoschampion> punk",
"<+TSM-ThepeoplesChamp> youre fucking with me arctopus \ <+TSM-ThepeoplesChamp> wana troubles?",
"<+TSM-ThepeoplesChamp> ep show your real pic \ <+TSM-ThepeoplesChamp> fat mother fucker \ <+TSM-ThepeoplesChamp> body fat ball \ <+eP|> brb reboot \ * +eP| (evilpriest@Evil_Priest.user) Quit (Signed off) \ <+TSM-ThepeoplesChamp> is he muscular?",
"<+TSM-ThepeoplesChamp> il teach you some modals \ <+TSM-ThepeoplesChamp> fucking bastard",
" <+newb> i am suggesting you are good at putting your hands on long thick things \ <+TSM-ThepeoplesChamp> like your mom? \ <+newb> like penises \ <+TSM-ThepeoplesChamp> like the penises of your mom",
"<+TSM-ThepeoplesChamp> suga you got the proves friend \ <+TSM-ThepeoplesChamp> lets berry this scum in the worms \ <+TSM-ThepeoplesChamp> only the worst scum in planet do that things",
"<+TSM-ThepeoplesChamp> i think this freak \ <+TSM-ThepeoplesChamp> is just jealous cos im a sucsesfull person \ <+TSM-ThepeoplesChamp> and hes not even well know by his parents \ <+TSM-ThepeoplesChamp> no lifer social rejected",
"<+TSM-ThepeoplesChamp> what are you doing reading all the day \ <+TSM-ThepeoplesChamp> the fucking mirc \ <+TSM-ThepeoplesChamp> watching my mouth moving and then \ <+TSM-ThepeoplesChamp> spiting your venenus poison",
"<+afk> http://img707.imageshack.us/i/swb.jpg/ \ <+TSM-ThepeoplesChamp> you need a cut your hair \ <+TSM-ThepeoplesChamp> animal hair \ <+TSM-ThepeoplesChamp> and the sweater looks like \ <+TSM-ThepeoplesChamp> your grandmomka \ <+TSM-ThepeoplesChamp> make it for you",
"<+Lenneth|^> seinfeld looks like a cool dude \ <+TSM-ThepeoplesChamp> wow \ <+TSM-ThepeoplesChamp> i dont wana imagine how ugly \ <+TSM-ThepeoplesChamp> he looks to think \ <+TSM-ThepeoplesChamp> seinfield looks cool \ <+TSM-ThepeoplesChamp> lineth must look like the scarriest weirdo in the town",
"<+TSM-ThepeoplesChamp> your muscles gives me repulsion \ <+TSM-ThepeoplesChamp> they looks must like tumours",
"<+TSM-ThepeoplesChamp> im gona clean the macdonals shits with his faces",
"<@TSM-ThepeoplesChamp> im gona fuck you so hard now \ <@TSM-ThepeoplesChamp> until your weight goes down \ <@TSM-ThepeoplesChamp> and stop beign a nerdy fatty guy youre now",
"<@TSM-ThepeoplesChamp> fat pancakes \ <@TSM-ThepeoplesChamp> i got tthis bitch \ <@TSM-ThepeoplesChamp> down in the floor",
"<+TSM-ThepeoplesChamp> youre a fucking fatto \ <+TSM-ThepeoplesChamp> il throw your punches to your body fat mass until you fall",
"<+TSM-ThepeoplesChamp> hey fucking disgusting mocosus blunts in ts \ <+TSM-ThepeoplesChamp> shut up \ <+TSM-ThepeoplesChamp> youre always sorning your ugly nouses in the mic",
"<+KingKilla> r bug on server i r not git shox rifle \ <+KingKilla> r jiz gota throw lil buble up dur \ <+TSM-ThepeoplesChamp> i dont understand the english of this dude",
"<+TSM-Mexicoschampion> i was police officer i had the drug reports",
"<@TSM-ThepeoplesChamp> i work for 3 magazines \ <@TSM-ThepeoplesChamp> and got my own radio show \ <@TSM-ThepeoplesChamp> i was making my own political team but gets fucked up \ <@TSM-ThepeoplesChamp> after the mexican elections",
"<@TSM-ThepeoplesChamp> i worked before in the mexican jungles \ <@TSM-ThepeoplesChamp> in the radio \ <@TSM-ThepeoplesChamp> like 4.000 persons were with me",
"<+TSM-ThepeoplesChamp> well america is the most fat country \ <+TSM-ThepeoplesChamp> im a teacher asshole",
"<+TSM-Mexicoschampion> i prepare an special sexiestman sauce for sushi im gona upload",
"<+TSM-ThepeoplesChamp> the kitchen is good for cock the greatest recetes",
"<+THEREALSEXIESTMAN> pearl harbor got no war \<+THEREALSEXIESTMAN> stupid love shit story \<+THEREALSEXIESTMAN> and japanese people wins that war \<+THEREALSEXIESTMAN> not the americans"
"<Imp> u guys got like 10x the action of speedpug \ <SEXIESTMANAUSENTE> im gona punch you",
"<REALSEXIESTMAN> i play foootball so i know a lot about teamwork",
"<+REALSEXIESTMAN> stupid fat pie eater \<+REALSEXIESTMAN> you cant even put your hands up cos youre so fat",
"<+REALSEXIESTMAN> i was downloading the movie dragon <+REALSEXIESTMAN> the history of bruce lee \<+REALSEXIESTMAN> from ares \<+REALSEXIESTMAN> and when the download finished \<+REALSEXIESTMAN> i play it and was a porno shit movie",
"<+REALSEXIESTMAN> torrent is nerd i never use it \<+REALSEXIESTMAN> too much configuration crap \<+REALSEXIESTMAN> i already download 2 movies from ares\ <+REALSEXIESTMAN> funhouse <+REALSEXIESTMAN> and predator 1",
"<+TSM-KIngOfLatinos> dont suck my dick anymore \ <+TSM-KIngOfLatinos> go find another dick",
"<TSM-LatinoLegend> its the pic of gays i knew it asshole psycho rotten meat sandguiche",
"<+TSM-KIngOfLatinos> i won \ <+TSM-KIngOfLatinos> but my stomach \ <+TSM-KIngOfLatinos> hurts so bad \<+TSM-KIngOfLatinos> so i let the kid have the lead",
"<+REALSEXIESTMAN> egg licker \<+REALSEXIESTMAN> of the americans \<+REALSEXIESTMAN> fucking asshole \<+REALSEXIESTMAN> i will teach you a lesson \<+REALSEXIESTMAN> im gettin bored \<+REALSEXIESTMAN> .leave",
"<+REALSEXIESTMAN> sure im bad i make the 80%of caps of my team on any speepug game dude \ <+REALSEXIESTMAN> im a good player \ <+REALSEXIESTMAN> respect me bitches",
"<+TSM-GOD> Sorry, but you have to pay me to give you an interview",
"<+MHAD`nomic> YOU STUPID FUCKING NIGS JOIN NOW \ <+REALSEXIESTMAN> WHY HE IS USING BIG LETTERS",
"TSM: TSM SHIRT IS CHICK AND LOOKS NICE IN EVERYONE WHO WANTS TO BE A WINNER. \ You can deposit the money here: Bank-Banco: HSBC Account number- Numero de cuenta: 6181361917",
"<+REALSEXIESTMAN> make a photoshop of your nasty body \<+REALSEXIESTMAN> small man with no life \<+REALSEXIESTMAN> ugly smile \<+REALSEXIESTMAN> you cant kiss a girl \<+REALSEXIESTMAN> the smile of sober is like blades thats cos nobody wana kiss him",
"<+REALSEXIESTMAN> you must be are on fire \<+REALSEXIESTMAN> cos i show to the world \<+REALSEXIESTMAN> how fucking ugly youre",
"<TSM-LEGENDA> hello friend you see they add my famous quotes of irc \ <TSM-LEGENDA> to channel dedecatid to only me with all of my followers \ <nfrs> yes i saw, mr popular *shaking hands* \ <TSM-LEGENDA> *friends hugh* \ <TSM-LEGENDA> yes a channel filled with scum worshipping me and i even have real ops",
"(@TSM-LEGENDA) i have been in UTV already like 100 times, counting my pugs and official matches",
"<TSM-LEGENDA> i fix my pc \ <nfrs> what was wrong with it \ <TSM-LEGENDA> the ventilators \ <TSM-LEGENDA> were stucked with scum",
"(@TSM-LEGENDA) il piss my shit in all the fake logs who do it to be famous with my name",
"<@TSM-LEGENDA> wow everything i say you quote it, somebody needs to get a life",
"<+TSM-GOD> sounds as to me friend that this nigger want a troubles",
"<TSMChampion> who cares about IQ when a nerd with high IQ cant live a day in the streets and everybody punches him in school",
"<@TSM-LEGENDA> if you gona add what i say add only the smart ones, where i teach you about the game of life not about stupid videogames",
"<TSMChampion> But sorry kid girls like atlethes like me, not stupid animalnerd lovers like you. By the way your sister is hot man i want her MSN to make a webcam show. I wait your answers.",
"<TSMChampion> my dick got more muscles than all your body",
"<TSMChampion> you touches yourself watching my pshycally perfection",
"<TSMChampion> go jerk off with your freaking animals, you PSYCHO fenomenous body disgusting pale face",
"<TSMChampion> i make you and i can destroy you, in other words youre like a poop that i need to throw down in the bathroom",
"<TSMChampion> I have lived in the streets a fucking childo like you will never bring me down, not even with a knife a shootgun or a missiles weapon.",
"<TSMChampion> SK gaming is in negosiations with me for a contract.",
"<TSMChampion> i was born to bring down all the quests and hard test in life.",
"<TSMChampion> youre fucking girly and skinny in a real street fight il take you down with one single touch",
"<TSMChampion> you looks like a death cadaver, you need look at my healthy recetes if you wana live some more time ANOREXIC GUY",
"<+REALSEXIESTMAN> youre ugly dude \ <+REALSEXIESTMAN> dont blame \ <+REALSEXIESTMAN> me \ <+REALSEXIESTMAN> cos of that \ <+REALSEXIESTMAN> i dont have the fault you look like a fucking monster",
"<TSMChampion> gona give you my personal adress so i can show you my modeling pics while you touches",
"<+REALSEXIESTMAN> i show me on cam and girls pay me",
"<+REALSEXIESTMAN> he thinks im ugly like you sober but when he see me he go to make some more work out",
"<TSMChampion> you can call me mister 50 efficiency",
"<+REALSEXIESTMAN> i know like im not a nerd like theyre \ <+REALSEXIESTMAN> are jelous \ <+REALSEXIESTMAN> the same guy that kick theyr asses on school \ <+REALSEXIESTMAN> come here and kiss theyr asses on videogames \ <+REALSEXIESTMAN> thats me",
"<+REALSEXIESTMAN> storm is falling on mexico \ <+REALSEXIESTMAN> storms gibes me lag"
"<+melissa7> till this day i cant believe sexiest is not banned \ <+REALSEXIESTMAN> you must be are banned for pretend by a female \ <+REALSEXIESTMAN> when youre a old fat man",
"<+[CAMBODIA]TaTa_SnOrLaCk> wha is boost? <+TSM-GOD> boost is a kind of bot <+TSM-GOD> who gives velocity <+TSM-GOD> to your player",
"<+WoW-TSM> i drinking some whiskey (+WoW-TSM) for celebrate my victory \ <+WoW-TSM> johnny walker \ <+WoW-TSM> blue lavel \ <+WoW-TSM> i like toplay clasical music \ <+WoW-TSM> and drink fine whiskey \ <+WoW-TSM> after a victory",
"<+TSM-ThepeoplesChamp> both you and me are legends in this game gogeta you follow your path \ <+TSM-ThepeoplesChamp> il follow mine",
"<+TSM-ThepeoplesChamp> i reinvented the combo in movement \ <+TSM-ThepeoplesChamp> jumping and combo",
"<TSM-Mexicoschampion> i take my gaming serios when i play i focus on my enemys and nothing but the enemy",
"<+TSM-ThepeoplesChamp> i got a old \ <+TSM-ThepeoplesChamp> LP from rocky 1 2 and 3 \ <+TSM-ThepeoplesChamp> sometimes i put it when i play this game \ <+||speedemon||> EYE OF THE TIGER? \ <+TSM-ThepeoplesChamp> yes and hearts on fire",
"<Joe> 72 weeks ago [00:52] <MISTERSEXIESTMAN> thats almost a year [00:53] <Joe> how many weeks are in a year? [00:53] <MISTERSEXIESTMAN> like 70 [00:54] <MISTERSEXIESTMAN> whata [00:54] <MISTERSEXIESTMAN> 42 weeks in a year [00:55] <Joe> wow [00:55] <MISTERSEXIESTMAN> what [15:02] <BRONCOS4LIFE> thats hilarious [15:03] <MHAD> isnt there 36? [15:03] <Joe> :|",
"<FERNANDO> heelo <TSM-GOD> hello <FERNANDO> wat u doin <TSM-GOD> watching my muscles at the mirror <TSM-GOD> what you doing",
"[05:18] <+TSM-GOD> i ride yoshi always \ [05:18] <+TSM-GOD> in mario kart ds \ [05:18] <+TSM-GOD> i like that caracter is very fast \ [05:18] <+TSM-GOD> i got some real yoshis of toys \ [05:18] <+minteK> Do they get along with your homer simpson chair?",
"<TSM> beans are one of the most great aliments",
"[6:52:32] <TSM-GOD> your a discrase to your country and will never be a real mexican like me from the ghetos",
"[12:21:35] <TSM-GOD> girls at my school know im a true champ when they read it in my blog",
"<+WoW-TSM> in the old times magic was better than weapons \ <+WoW-TSM> but they baned magic from all across europe and when rasputin dies magic dies, now magic is just used by dorks",
"<+WoW-TSM> Since im one of the few rich persons in my Town, everybody wana come to my house and uses my XBOX, too bad i lock the doors of my big house and start the adventure by myself.",
"<+WoW-TSM> the anals is like a history book like historial of matches",
"[12:45:52] <WoW-TSM> yeah i let that match chicken beat me cos hes only weapon was that fucking @ in his nickname",
"[12:24] <+WoW-TSM> the cientific persons says that you need at least misticate 100 times your aliments for good digestion",
"<WoW-TSM> you dont belive in magic cos you got no soul nfrs <WoW-TSM> i wish to have rasputin magic books for make you an spell so you can stop be so gay",
"<+WoW-TSM> no fags in a mexican macho family of atlethes",
"<+WoW-TSM> you cant say im wrong when you see those kind of cocksucker like chriss angel making rich with his magic",
"<+WoW-TSM> i have give master classses of guitar in the ts of unrealtournament",
"<+WoW-TSM> but the statics are contundent",
"<+TSM-GOD> this planet needs to be restarted <+TSM-GOD> cos is fucked up <+TSM-GOD> fucked of cos people like you who is jealous of me <+TSM-GOD> people who sits in the chair all the day and never make something about life just watch pornkid <+TSM-GOD> and jerkoff while <+TSM-GOD> smokes <+TSM-GOD> and plays ut",
"<+TSM-GOD> you will be in the punishment chair if you touch me",
"<+TSM-GOD> i have always i dream <+TSM-GOD> if to make my own school and prepare people to become winners at what they like to do <+TSM-GOD> by example <+TSM-GOD> 4 months with me il change your life tom <+TSM-GOD> make you an atlethe",
"<+TSM-GOD> cherrios cant be degustated for the stomach , the little things get stucked in your stomach forever",
"<+lkemas> TSM have you ever been in space | <+TSM-ThepeoplesChamp> yeah man that was like 3 years ago | <@Area51|flux> was it cold up there? | <+TSM-ThepeoplesChamp> whata fool | <+TSM-ThepeoplesChamp> the space cant be cold | <+TSM-ThepeoplesChamp> space dont even got temperature",
"<+TSM-KINGOF1VS1> canadians fucking rocks, poor americans only thing they got is spiderman and baseball",
"<+DerrickRose> remember the alamo sexi \ <+TSM-KINGOF1VS1> yes \ <+TSM-KINGOF1VS1> the alamo \ <+TSM-KINGOF1VS1> is a fucking fake history \ <+eP|> REMEMBER THE FUCKING ALAMO",
"<+TSM-LatinoLegend> fucking retarded teacher of thiefs",
"-WoW-TSM: owned with fflag cannonball from the space",
"<+TSM-ThepeoplesChamp> you need to cut the envolture of the cucumber \ <+TSM-ThepeoplesChamp> rip the cucumber from the middle \ <+TSM-ThepeoplesChamp> you extract the bones of the cucumber \ <+TSM-ThepeoplesChamp> with the spon you take the bones of the cucumber \ <+TSM-ThepeoplesChamp> and then cut it down in pieces \ <+TSM-ThepeoplesChamp> add all the pieces of cucumber to the liquiefy machine",
"<TSMChampion> Womans from all the cultures and countrys have been in my bed ... i just missing a finlandece what do you say?",
"<TSMChampion> I show the evidence to a girls, not a fucking homo cadaver like you... your so thin i can confuse you with a girl if you put a wig and you make up your anemia face. And i know jessica alba, we are both worldwide stars i have meet it in partys, we dont talk too much hes realy not my type.",
"<TSMChampion> Stop the anorexia man and maybe i can help you, by watching my mango videos is the first step to become a winner.",
"<TSMChampion> i know 3 things about you Mr... 1.- You got a lot of free time. 2.- You hormones start to dance when i post a coment for you cos you feel excited 3.-Youre like the fucking media and the paparazzis that follows me everyday, and thats fucking anoying.",
"<DASEXIESTMAN> MAYBE \ <DASEXIESTMAN> IM A LITTLE FAT \ <DASEXIESTMAN> SOME ACNE \ <DASEXIESTMAN> NO SLEEP ON YEARS \ <DASEXIESTMAN> A VERY DIRTY MAN \ <DASEXIESTMAN> NOT TAKING BATS",
"<TSMBlog> Yo yo to all my followers i introduce you my new little simpson`s couch. I just buy it for 35 dollars, very confortable and good to relax when youre resting the muscles of a hard day of training.",
"<TSMBlog> Some guy from speedpug called Kingkilla send me this nasty disturbing pic ... i think this guy is a fucking loser depravated that just want some attention showing his ugly dick on the plate."

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
