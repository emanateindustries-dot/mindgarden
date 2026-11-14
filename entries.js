/* =====================================================================
   A MINDGARDENER'S WAY TO GARDENING  —  CONTENT FILE
   Everything in the guide lives here. Edit freely.

   Each entry:
     id      unique short name (letters/numbers only)
     title   shown in caps as the entry heading
     cat     "Rules" | "Places" | "Things"   (groups the list)
     quote   (optional) your own words from the map — array of strings
     text    the Guide's voice — array of paragraphs (HTML ok: <b>, <i>)
     see     (optional) ids of related entries
     pins    (optional) where it sits on the map, as [x, y] 0–100 (% across, % down)
     pin     (optional) "door" | "gully" for the special pins
   ===================================================================== */

window.GUIDE = {
  title: "A Mindgardener's Way to Gardening",
  tagline: "Respect your dose.",
  doorOpens: "06:00",
  doorCloses: "18:00",
  timezone: "Australia/Melbourne",

  /* Door dates are generated automatically in index.html (equinoxes and solstices, Melbourne time), so the countdown never runs out. */

  entries: [

    /* ================= RULES & HOW IT WORKS ================= */
    { id:"first", cat:"Rules", title:"Read This First",
      text:[
        "Mind Garden is a 06:00 to 18:00 day out on a 110 acre bush block, and only Brodie knows where Mind Garden is. He starts at 6, and you are welcome to follow him in.",
        "Mind Garden is an <b>all-weather event</b>. Rain, wind or shine, the Door opens. Pack and dress for whatever the day throws at you.",
        `<b>Do not come if:</b>`,
        `<ul>
          <li>you're not ready for an experience of mind, body and soul</li>
          <li>you're scared of taking psychedelics</li>
          <li>you don't want to grow and be more than you are now</li>
        </ul>`,
        "Mind Garden isn't easy. Let Brodie tell you."
      ],
      see:["rules","day","find"] },

    { id:"ticket", cat:"Rules", title:"Your Ticket In",
      text:[
        "Your ticket is a <b>book</b> that has impacted you or made you grow. Fiction or non-fiction, it doesn't matter. It's donated to the Mind Garden library for others to take home and read. <b>You don't get it back.</b> It's your ticket in.",
        "You also bring <b>something you've made</b> to share with another Mind Garden participant: handmade sliced bread, anything that might help a fellow traveller find Mind Garden. <b>It must be made by you, not bought.</b>"
      ],
      see:["must","day"] },

    { id:"rules", cat:"Rules", title:"The Rules",
      text:[
        "<b>1.</b> Be at the Mind Garden Door at <b>06:00</b>. If you're late, that's okay. Follow your map into Mind Garden. It's close to the public toilet. But don't forget to go through the Door at the top of the map.",
        "<b>2.</b> Every guest gets a map. Check this app for the <a href=\"#map\" data-tab=\"map\">map</a>. Pay close attention to it. It will help you navigate the block and, hopefully, find Mind Garden.",
        "<b>3.</b> Find Mind Garden. There's no path in.",
        "<b>4.</b> Be back at the Door by <b>18:00</b>.",
        "<b>5.</b> You can't “win” Mind Garden. You already won if you opened the Door. But you can lose it.",
        "<b>6.</b> No littering. Ever. Seriously. This is our family property, and it's a zero chance system. We don't actually have a bin here, so pack it out.",
        "<b>7.</b> Respect your dose. Buddy system advised.",
        "<b>8.</b> Everyone who opens the Mind Garden Door must obey the <a href=\"#\" data-open=\"substances\">substance rules</a>. Carers of children, and of dogs, must also obey the sober rule if you bring them. Dogs must be on a leash at all times. See <a href=\"#\" data-open=\"children\">Bringing Children</a>.",
        "<b>9.</b> Respect Kevin."
      ],
      see:["day","losers","leave","substances","children","kevin"] },

    { id:"day", cat:"Rules", title:"The Day, Start to Finish",
      text:[
        `<ol>
          <li><b>06:00.</b> Everyone at the Door at the top. Ornate door, multiple locks, old trinkets. We open it and walk through. Brodie leaves both doors open for the whole day, so anyone running late can still come in.</li>
          <li><b>Hike in.</b> Open-world sandbox: no path, just your map. Please respect your dose, and a buddy system is advised.</li>
          <li><b>Find Mind Garden.</b> Brodie will guide people down into Mind Garden, for those who are keen enough to meet him at the Mind Garden Door at 06:00.</li>
          <li><b>12:00.</b> Music at Mind Garden stops. Brodie hikes out with everyone who's found him and heads down to the Bend, then the Trench, for more music. Haven't found it by noon? Head down to the Trench and we'll meet you there.</li>
          <li><b>Swim, rest, party.</b> Jonah's Pool or the Bend, metres from the party in the Trench.</li>
          <li><b>Back to the Door by 18:00.</b> That's 200 metres of climb, at the end of the day. Don't be late. Remember, this is a carry in, carry out deal. You have to pack and carry everything you need for the day, and if you open the Mind Garden Door, that's your responsibility.</li>
        </ol>`,
        `You can finish early if you want. Hang out with <a href="#" data-open="neil">Neil</a>, or spend time with the family at camp or on <a href="#" data-open="easy">Easy Street</a>.`,
        `<div class="sec">After the Door Closes</div>`,
        `Music is still allowed once the Door is closed, but after <b>9 pm</b> we switch to <b>instruments only</b>.`,
        `In an ideal world, the perfect Mind Gardener is home by then: showered, and asleep in their own bed.`,
        `<a href="#" data-open="camping">Camping</a> is allowed, free, and recommended for your first Mind Garden experience.`
      ],
      see:["find","gully","trench","losers","door","neil","easy","camping"] },

    { id:"find", cat:"Rules", title:"How to Find Mind Garden",
      quote:["You will know when you find Mind Garden. It's hard to find, but once you find it, you'll know."],
      text:[
        "There's no path into Mind Garden. It's an open-world sandbox type deal.",
        "Follow your map. It will help you.",
        "Reception is patchy out there, but there's some. Bring headphones, or a small speaker if travelling in a duo, and call each other to help find the way in.",
        "<b>The only clue:</b> Mind Garden is near the public toilet."
      ],
      see:["gully","day","must"] },

    { id:"must", cat:"Rules", title:"The Must-Have List",
      text:[
        "Pack everything you need and leave no trace. Brodie has done this enough times to know what you need. Don't be afraid to pack extra, but it may weigh you down.",
        `<ul>
          <li><b>Water.</b> At least 3 litres for the day. Brodie usually drinks 4.</li>
          <li><b>Food</b> for the full day. There's 200 m of vert to climb back to the Door at the end.</li>
          <li><b>Headphones</b>, or a small speaker if travelling in duos.</li>
          <li><b>A hammock.</b> A small lightweight one, to rest or dance at Mind Garden. There's a bunch of trees to clip to.</li>
          <li><b>Good hiking shoes.</b> Long pants if you're scared of snake risk. Change at Mind Garden for a good fucking boogie if you find Brodie.</li>
          <li><b>A zip lock bag</b> for rubbish.</li>
          <li><b>Toilet paper.</b> There's no toilet. See Leave No Trace.</li>
          <li><b>Bathers</b> for the swim at Jonah's Pool or the Bend.</li>
          <li><b>Your ticket:</b> a book, and something you made.</li>
          <li><b>A good and respectful attitude.</b></li>
        </ul>`
      ],
      see:["ticket","leave","kevin","jonahs"] },

    { id:"leave", cat:"Rules", title:"Leave No Trace",
      quote:["If you litter you are instantly disqualified."],
      text:[
        "If you litter, Brodie will be forced to remove you from Mind Garden, violent or not, your choice.",
        "<b>Rubbish:</b> pack a small zip lock bag.",
        "<b>Organic waste:</b> can be disposed of at the Trench, where the giant ants' nest lives nearby. They love a good donation.",
        "<b>Toilet:</b> there's a toilet at Neil's, but it's only for the few who arrive early with Brodie. For everyone else there isn't one. If you must poo or wee, pick a spot and use toilet paper only. <b>No wet wipes.</b>"
      ],
      see:["trench","must"] },

    { id:"camping", cat:"Rules", title:"Camping",
      quote:["Camp anywhere. Leave nothing."],
      text:[
        `Camping is allowed, welcomed, free, and recommended for your first Mind Garden experience. Many people make a night of it, and the Guide thoroughly approves. One night only.`,
        `<div class="sec">What Camping Is For</div>`,
        `Camping is just for the night of Mind Garden. This is not a party. It is an experience. Mind Garden is a day-only event, and camping at night is there for one reason: <b>safety</b>. A lot of people travel a long way to get here, and driving home after a full day of Mind Gardening is a real risk. Camp so you don't have to.`,
        `<div class="sec">When</div>`,
        `You can arrive early and set up camp before Mind Garden, or set up after it. Either works. Remember, this isn't a party. It's an experience.`,
        `<div class="sec">Where</div>`,
        `You are welcome to camp anywhere on the block. The property is large, with many places to camp, so there is no need to pile on top of each other. Find a spot you like, away from everyone else if that is what you want. The Guide has never known anyone to run out of options.`,
        `<div class="sec">Off Limits</div>`,
        `Two places only. <b>The main drive</b> and <b>the road down to Recovery Lane.</b> Both are used to get in and out, and someone will need to drive down them at an inconvenient hour. Do not camp on either. Do not park across either, either.`,
        `<div class="sec">Leave No Trace Still Applies</div>`,
        `<a href="#" data-open="leave">Leave No Trace</a> is a firm rule, and it does not take the night off. Camping makes it harder, not easier, so plan for it. In particular, <b>pack a shitter.</b> Bring a way to take your waste with you, and then take it with you. If you bring it in, you carry it out.`,
        `<div class="sec">It Gets Easier</div>`,
        `Over the years, as you get better at Mind Garden, you will learn how much to pack and how long to stay. You will learn what you actually used and what you carried up a hill for nothing. And you will learn to be okay with missing some of it. Nobody sees all of Mind Garden in one go.`
      ],
      see:["leave","must","recovery","day"] },

    { id:"substances", cat:"Rules", title:"Drugs: What's In, What's Out",
      text:[
        "<b>Recommended for a Mind Garden experience:</b> LSD (advanced), mushrooms, MDMA, ketamine (this may well slow you down finding Mind Garden), DMT, mescaline and edibles.",
        "<b>Respect the dose.</b> A buddy system is advised. Lower doses are recommended for your first time here. Sober is also great, especially if you're hanging out with your family and bring them to swim.",
        "Vaping is allowed.",
        `<div class="sec">This Is Not the Place for a Mega Dose</div>`,
        "Mind Garden is not the time or the place to take a mega dose of anything and disappear on a solely internal journey. It is a game of the ultimate self control. It is about respecting your body, respecting your resources, and respecting everyone else out there doing the same.",
        "If you take a big dose and think you are going to walk into Mind Garden, that is fucking idiotic. It cuts against everything this is about: control, resource management, community and presence. You will not find the gully. You will find a log, and you will sit on it, and that is a perfectly good day, but it is not this one.",
        "Make no mistake, Mind Garden is a journey of mind, body and soul. It goes outwards as much as it goes inwards. The water you carry, the people beside you, the ground under your feet and the hours left before the Door closes are all part of it. Remember that.",
        "<b>Banned at Mind Garden:</b>",
        `<ul>
          <li>Methamphetamine</li>
          <li>Amphetamine (unless prescribed)</li>
          <li>Cocaine</li>
          <li>Nitrous</li>
          <li>Alcohol, from 06:00 to 18:00 (door to door)</li>
          <li>Smoking cigarettes</li>
          <li>Anything fucking disgusting, really</li>
        </ul>`,
        `<div class="sec">After 18:00</div>`,
        `Once Mind Garden is finished at 18:00, the drug ban lifts and alcohol is allowed. The rules above are for Mind Garden, door to door. Carers of children stay sober for as long as the children are in their care, whatever the time. See <a href="#" data-open="children">Bringing Children</a>.`,
        `<div class="sec">Neil's Place</div>`,
        `This is Neil's property, so Neil is not bound by any Mind Garden rules. He can do whatever he sees fit. It is his place, and he has let Brodie use it four times a year to show everyone how beautiful it is. Treat it, and him, accordingly.`
      ],
      see:["safety","rules","children","neil"] },

    { id:"safety", cat:"Rules", title:"The Boring Bit",
      text:[
        "Stick with your buddy. Someone sober knows the plan and the 18:00 deadline, and nobody drives.",
        "Water is a big deal on a long climb, but sip rather than skol: drinking far too much is a real risk on MDMA too. Anything that dissociates (ketamine) makes steep bush a lot less forgiving, so stay close to your buddy.",
        "Reception is patchy: <b>screenshot the map before you leave the Door.</b>",
        "Check the fire danger rating for the day. Hot, dry bushland and a deadline is a bad mix.",
        "Mixed up on where you are? Stop, sit, breathe. Walk the blue Easy Street lines. They all lead somewhere you know.",
        "Emergency: <b>000</b>. Poisons Information Centre: <b>13 11 26</b>."
      ],
      see:["easy","kevin","substances"] },

    { id:"children", cat:"Rules", title:"Bringing Children (and Dogs)",
      quote:["Sober. Present. Yours."],
      text:[
        `Children are welcome in the lower part of the block. The Guide would like this to be clear: <b>if you bring children, you and solely you are responsible for them.</b> Not the group, not Brodie, not the nearest adult who looks capable. You.`,
        `<div class="sec">The Sober Carer</div>`,
        `Every child needs a designated carer, and that carer must <b>remain sober at all times</b> while the child is under their supervision. Not mostly sober. Not sober until the afternoon. Sober, for as long as the child is yours to watch. If you cannot promise that, the Guide's advice is to leave the child at home.`,
        `<div class="sec">The Water</div>`,
        `There are three river swimming spots along the Trench. They are beautiful, and they are a river. Children must be supervised at all times, in and out of the water. This is your responsibility, and yours alone.`,
        `<div class="sec">The Standard Rule</div>`,
        `If you open the Mind Garden door, you are not caring for children. That is the standard rule, and it has no exceptions. Whoever is walking the day is not on childcare. So your partner must stay behind, or stay with you and the children on <a href="#" data-open="easy">Easy Street</a>, down into <a href="#" data-open="recovery">Recovery Lane</a>.`,
        `<div class="sec">Getting Down There</div>`,
        `There is 4x4 access down Easy Street into Recovery Lane. Brodie can bring his family of five into <a href="#" data-open="bend">the Bend</a> for a half day, and it is, as he puts it, easy as. It is steep, but you will find a spot. In the worst conditions Brodie has only ever needed high-range four-wheel drive to get back up the hill.`,
        `<div class="sec">Bringing a Dog</div>`,
        `The same rule applies to dogs. If you bring a dog, it is treated exactly like a child: <b>someone sober must watch it the entire time.</b> Not the group, not Brodie, not whoever happens to be nearest. You. A dog on a block this size is one distracted afternoon away from a snake, a wallaby, a cliff or a very long walk home without you.`,
        `<div class="sec">Firm Rule: Dogs on a Leash</div>`,
        `<b>Every dog must be on a leash, at all times, with no exceptions.</b> The block is full of wild animals, and a dog that catches a scent will go after it. It may run off and never be seen again. The Guide has no way of finding it, and neither does anyone else. This rule is not up for discussion, and it applies to the good dog, the old dog and the dog that has never once run off.`,
        `<div class="sec">The Good Bit</div>`,
        `If you do Mind Garden right, your life partner will be there to meet you for a loving embrace as you walk into <a href="#" data-open="trench">the Trench</a> to finish the day. This is one of the best things the Guide knows of, and it only works if the children were looked after, and somebody was sober, and the partner stayed behind and made it down. Do it properly and you get the embrace.`
      ],
      see:["trench","bend","easy","recovery","substances"] },

    { id:"losers", cat:"Rules", title:"The Door of Losers",
      text:[
        `There is no winning Mind Garden. There is only losing it, and the Guide would like to be honest that losing is the only part of the whole experience with an actual procedure.`,
        `<div class="sec">How You Lose</div>`,
        `You lose Mind Garden by not being back through the Door by <b>18:00</b>. That's all. No dramatic failure is required. You simply have to be somewhere else when the clock gets there.`,
        `<div class="sec">The Carving</div>`,
        `If you lose, <b>you will need to carve your name into the Door of Losers yourself.</b> Nobody else will do it for you. It is your name, and it is your hand, and the Door of Losers is a door that only accepts honest work.`,
        `<div class="sec">The Alternative</div>`,
        `Refuse to carve, and you <b>lose your right to attend Mind Garden again.</b> The Guide notes that this is the more expensive of the two options, and that the carving only takes a few minutes.`,
        `<div class="sec">No Strike</div>`,
        `Lose, and you don't get a strike against your name on the Door for completing Mind Garden. Your name stays where it was. Your column of strikes does not grow. Come back next time and try again, provided you carved.`,
        `<div class="sec">A Note From the Guide</div>`,
        `The Guide recommends being on time. It has never once regretted recommending this.`
      ],
      see:["door","day","rules"] },

    /* ================= PLACES ================= */
    { id:"door", cat:"Places", title:"The Door", pin:"door", pins:[[53.8,91.6]],
      quote:["Mind Garden. Door."],
      text:[
        `Most doors are there to keep things out. This one exists to let you in, which makes it, in the opinion of the Guide, either the most generous door in the galaxy or the most suspicious. Possibly both. It is an ornate door, with multiple locks and a collection of old trinkets, and it stands at the top of the property, where the day begins.`,
        `<div class="sec">Opening and Closing</div>`,
        `Brodie opens the Door to Mind Garden at <b>06:00</b>, and closes it at <b>18:00</b>. We walk through together at the start, and Brodie leaves <b>both doors open for the duration of the day</b>. There is a second door, right next to the Mind Garden entry, and it is our exit for the day. Between the two is everything else.`,
        `Running late? You are still welcome. People may attend Mind Garden late, and the doors stay open for them. Come through whenever you arrive, follow the music in (see: Following Brodie), and be back through before 18:00, or you lose Mind Garden. See: the Door of Losers.`,
        `<div class="sec">The Right to Carve</div>`,
        `Everyone who passes through the Door has the right to carve their name into it. This is not a courtesy. It is a right, granted by the Door itself, and exercised by every guest who has ever made it through. Bring a steady hand and a good sense of where you want to be remembered.`,
        `<div class="sec">The One Rule of Carving</div>`,
        `<b>Please do not put your name in the top section, where Mind Garden is scribed.</b> That part belongs to Mind Garden itself. Everything below it is yours. The Guide cannot stress this enough, mainly because the Door can stress it better.`,
        `<div class="sec">The Ledger</div>`,
        `Over the years, the Door becomes a ledger of how many Mind Gardens you have attended.`,
        `<div class="sec">Strikes</div>`,
        `Once your name is scribed, you can add <b>strikes</b> against it, below it, one for each Mind Garden you complete. Make it back through before 18:00 and the Door will let you add one. Miss the deadline and there is no strike, only the Door of Losers. For a guide to how it's done, see <b>Brodie's name on the Door</b>. He has been at this a while, and the Door will show you.`,
        `Some names will carry a single strike, quietly, near the middle. Others will grow a long column of them, until the Door begins to look like a very polite diary of people who couldn't stay away.`,
        `<div class="sec">A Living Art Piece</div>`,
        `The Door is never finished. As the place changes, grows and evolves, so does the Door: a slow, ongoing, living art piece, made by everyone who has walked through it, and added to every time they do. It has no artist, only authors. The Guide considers this the correct way to make a door.`
      ],
      see:["rules","losers","brodie","day","gully"] },

    { id:"gully", cat:"Places", title:"Mind Garden", pin:"gully", pins:[[40.3,80.0]],
      quote:["The hardest bloody place to find on the property."],
      text:[
        `Mind Garden is the hardest bloody place to find on the entire property. The only clue Brodie will give you is that it is close to a public toilet. That is all. The Guide has read the clue many times and is no closer, which is sort of the point.`,
        `It is also, and the Guide does not say this lightly, <b>fucking spectacular</b>. This gully is one of the most spectacular on the property. Like wow. Go and have a look.`,
        `<div class="sec">If You Arrive at 6</div>`,
        `Those who arrive at 06:00 and follow Brodie in get the best deal on offer. You will get one of the best bush walks around, and you will be treated to some of the best tunes all along the way. At the end of it is a dance party stage, designed over thousands of years, and made, the Guide is told, entirely for us. It is the one bit of Mind Garden that comes with a guide.`,
        `<div class="sec">If You Are Late</div>`,
        `Latecomers may try to follow the music into the gully. This is possible. The Guide must also tell you that taking a dose of acid and walking into unknown bush is not advised. Only an advanced Mind Gardener can pull it off, and, truthfully, Brodie might be the only person unhinged enough to do it, and he has, in fact, walked into Mind Garden on acid multiple times. An encounter with <a href=\"#\" data-open=\"kevin\">Kevin</a> on acid is not recommended. <b>You are responsible for your own safety.</b> The Guide has said this before and will say it again, because it is the only sentence in here that is not a joke.`,
        `<div class="sec">The Music</div>`,
        `Once he is there, Brodie plays some seriously insane tunes that he has found along the way. This is why you need a hammock. Bring one, hang it, lie down, and enjoy some of the best music he can bring you, in a place that no human had been to until Brodie stumbled upon it.`,
        `<a href=\"#\" data-open=\"kevin\">Kevin</a> might be with us somewhere. But every time Brodie has had a speaker with him, he has never found a single glimpse of life. Kevin hides until we are gone.`,
        `<div class="sec">The Log</div>`,
        `When Brodie first found it, he stood on a log, in the sun, in the middle of it, and was so overwhelmed that he said he was ready to die right there. This is Brodie's way of saying that it is the most special place he has ever been. The Guide recommends taking him at his word on the specialness and not on the dying.`,
        `<div class="sec">Make No Mistake</div>`,
        `There is no path into it. It is one of the most remote places Brodie has ever been. That is exactly why it is so good.`,
        `Music stops at 12:00, after which we hike out and head to <a href="#" data-open="trench">the Trench</a>.`
      ],
      see:["find","day","door","trench"] },

    { id:"trench", cat:"Places", title:"The Trench", pins:[[53.9,7.2]],
      text:[
        `Where the day finishes, metres from the Bend.`,
        `<div class="sec">A Dance Floor, Built by a River</div>`,
        `The Trench is a purpose-built dance floor. Nobody built it, exactly. It was foraged over years, as the river moved and changed with the landscape and left behind a long, benched stretch of soft sand, cut deep into the old riverbed. It sits in exactly the right place to dance in bare feet.`,
        `<div class="sec">Why It Works</div>`,
        `The soft sand is kind to your feet. The deep old riverbed gives shelter from the wind, and also, as it happens, amazing acoustics. The Guide has stood in a great many places and has rarely found one that sounds this good with no assistance. It is the sort of dance floor a lot of venues would like to have, and which none of them can buy.`,
        `<div class="sec">A Deeply Spiritual Place</div>`,
        `For all the dancing, the Trench is not only a dance floor. It is a deeply spiritual place, much like Mind Garden itself: ancient, untouched, and old enough to make most human concerns look brief. Some of Brodie's friends have had their first psychedelic experiences here, and the Guide understands why. The place does a lot of the work.`,
        `So please respect it. If you come across someone lying on the sand with their eyes shut, let them be. Don't wake them, don't ask if they're alright (unless you genuinely think there is an issue), and don't dance on them. They are almost certainly fine. They are doing exactly what the Trench is for. Step around, keep your voice down, and carry on. The party will go on without them, and they would not want it any other way.`,
        `<div class="sec">Who It Is For</div>`,
        `A fellow traveller. A family member. A child. The Trench is built for dancing barefoot with all of them, and the Guide recommends bringing the family along and having a boogie.`,
        `<div class="sec">If You Bring Children</div>`,
        `<b>If you bring family into the Trench, you need a sober person looking after them, and they are your responsibility.</b> Yours, and nobody else's. The carer stays sober at all times while the children are under their supervision. There are three river swimming spots along the Trench, and children must be supervised at all times, in and out of the water. The Guide is very fond of the dancing and the family. It is far fonder of everyone going home. Full details are in <a href="#" data-open="children">Bringing Children</a>.`,
        `<div class="sec">There Is Much to See</div>`,
        `The Trench runs for hundreds of metres, and there is a lot in it. Take your time. Walk it. Look up at the walls the river made. You will not see it all in one afternoon, and the Guide considers that a feature.`,
        `<div class="sec">Where It Leads</div>`,
        `The Trench feeds into <a href="#" data-open="wwa">WWA</a>, <a href="#" data-open="bend">the Bend</a> and <a href="#" data-open="jonahs">Jonah's Pool</a>. If you want to see them, follow the Trench. It is, in effect, the main road, and the river was its engineer.`,
        `<div class="sec">The Afternoon</div>`,
        `Once the proper Mind Gardeners have made it through, avoiding <a href="#" data-open="kevin">Kevin</a> on the way, they descend into the Trench for the rest of the afternoon. This is what the day was building towards. Come down, kick your shoes off, and join them.`,
        `You still have to walk back.`
      ],
      see:["bend","jonahs","leave","wwa","recovery","children"] },

    { id:"bend", cat:"Places", title:"The Bend", pins:[[53.6,5.0]],
      text:[
        `The big turn right at the bottom of the property, as far from the Door as you can get, and a swim spot, metres from the party in the Trench. Bring bathers.`,
        `<div class="sec">The Deepest, Sandiest Spot</div>`,
        `The Bend is the deepest swimming spot near the Trench, and one of the sandiest. The river swings round in a long, slow turn and leaves the deep water on the outside and the soft sand on the inside, which is exactly where you want them both.`,
        `<div class="sec">Built for Basking</div>`,
        `The Bend was made for lying on warm sand. That is its job. You swim, you get out, and you lie in the sun on the sand while it dries you off. The Guide has watched many people arrive at the Bend with a plan for the afternoon and abandon it in under four minutes.`,
        `<div class="sec">An Escape From the Noise</div>`,
        `The Trench is loud, in the best way. It has the dancing, the acoustics, the sound of a great many people having the time of their lives. The Bend is only metres away, and the Guide does not know how, but it is a different world. If you have had enough of the noise, walk a few steps, get in the water, and the party gradually turns into something you can hear from a comfortable distance. Then, when you are ready, you walk back and rejoin it.`,
        `<div class="sec">If You Have Children</div>`,
        `The Bend is deep, and it is a river. If you bring children, a sober carer must supervise them at all times, in and out of the water. See <a href="#" data-open="children">Bringing Children</a>.`
      ],
      see:["trench","jonahs","children"] },

    { id:"jonahs", cat:"Places", title:"Jonah's Pool", pins:[],
      text:[
        `A swim spot. Bring bathers.`,
        `The Guide has been told the full story of Jonah's Pool, and it has been told it is not the Guide's to tell. Ask Matt about this one.`
      ],
      see:["bend","trench","must"] },

    { id:"wwa", cat:"Places", title:"WWA", pins:[[50.7,7.2]],
      quote:["“WWA” or weight of the world above me"],
      text:[
        `Up near the Trench.`,
        `The Guide has been told the full story of WWA, and it has been told it is not the Guide's to tell. Ask Matt about this one.`
      ],
      see:["trench"] },

    { id:"recovery", cat:"Places", title:"Recovery Lane", pins:[[48.3,24.6]],
      quote:["If you knock anything over here, not to worry just stack them back up again."],
      text:[
        `Recovery Lane is a short stretch of track that looks, at first glance, like somebody has been very busy and then gone away. This is accurate. It is a living, breathing art installation, and it has been built entirely by hand, one small contribution at a time, by people who happened to be walking past.`,
        `Recovery Lane was essential to Brodie's recovery from his injury. The Guide does not know exactly how a pile of arranged objects in the bush repairs a person, but it has stopped asking. It works. Brodie says so, and the Lane is still there.`,
        `<div class="sec">It Is Collaborative</div>`,
        `Nobody owns Recovery Lane, nobody curates it, and nobody has ever been asked to sign off on a change. It is the only piece of art on the block with no artist, which is to say it has every artist. What you see when you walk through is the sum of everyone who stopped, looked around, and felt like doing something about it.`,
        `<div class="sec">The Custom</div>`,
        `It is customary to add something to Recovery Lane when you pass through, if you feel the need. You may feel nothing, and that is fine. You may feel a sudden and unexplained urge to move a stick six inches to the left. Trust that. It is probably load-bearing.`,
        `<div class="sec">What You May Add</div>`,
        `Anything you like, provided it meets two conditions. <b>It must be found nearby</b>: a stick, a stone, a strip of bark, a particularly judgmental seed pod. Nothing carried in, nothing bought, nothing that was not already living within sight of the Lane. And <b>it must be constructive, not destructive</b>. Add. Arrange. Balance. Stack. Do not snap a living branch off a tree to make your point, and do not take the Lane apart to make a better one. The Lane forgives a great deal, but not that.`,
        `<div class="sec">If You Knock Something Over</div>`,
        `You will. The Lane is made of things balanced on other things, and you will be walking past in a state of mild enlightenment or severe fatigue. If you knock anything over here, not to worry. Just stack it back up again. That's the whole lane. It was always going to fall over a bit, and the Lane is, in a real sense, the act of putting it back.`
      ],
      see:["trench","leave"] },

    { id:"easy", cat:"Places", title:"Easy Street", pins:[[49.7,68.0]],
      quote:[
        "All roads and made walking trails with machine are called easy street.",
        "Easy way off easy street, also the #9 best termite mound is here.",
        "Even easier way off easy street."
      ],
      text:[
        `It is a truth universally acknowledged, in every corner of the galaxy that has ever had a corner, that nothing good is ever easy. The Guide has checked this against every known civilisation, three or four unknown ones, and a surprisingly well-travelled dog, and found no exceptions. Easy Street is the exception that proves the rule, and, as we shall see, it is only an exception in the sense that it is very nearly one.`,
        `<div class="sec">What Easy Street Is</div>`,
        `Easy Street is every road, and every walking trail made with a machine, on the whole property. On the map they are the blue lines. They are wide, they are sensible, they go somewhere, and they have been put there by somebody who wanted you to arrive. This makes them, by definition, the opposite of everything Mind Garden stands for.`,
        `<div class="sec">On the Enjoyment of Easy Street</div>`,
        `The Guide wishes to be perfectly clear that <b>you can have a great time on Easy Street.</b> You will enjoy yourself. The walking is pleasant. The views are agreeable. The people around you will be happy, well-rested, and in no particular hurry. Entire afternoons have been spent on Easy Street, and none of them have been wasted. It is a thoroughly decent place to be, and nobody will think any less of you for being on it.`,
        `You will also, and this is the part the Guide feels obliged to mention gently, <b>never find Mind Garden there.</b> Not once. Not on a good day, not on a great day, not on the sort of day when the whole property seems to lean in and whisper. Mind Garden is not on Easy Street. Mind Garden is not near Easy Street. Mind Garden is, in the strictest geographical sense, wherever Easy Street isn't.`,
        `<div class="sec">On Leaving</div>`,
        `There is, you will notice on the map, an <i>easy way off Easy Street</i>, and an <i>even easier way off Easy Street</i>. The Guide admires the optimism of this. It is true that leaving Easy Street is as easy as stepping sideways. It is also true that stepping sideways is the only part of the whole day that anyone has ever found hard. This is not a contradiction. It is, if anything, the entire point.`,
        `Beyond the edge of the blue, the ground gets steeper, the scrub gets closer, the map gets more of an opinion, and the whole thing starts to feel like exactly the sort of idea that sounded better at 06:00. That is where Mind Garden begins. The Guide has no further advice, except that nothing you came here for was ever going to be handed to you on a paved path.`,
        `<div class="sec">A Note on the Way Home</div>`,
        `For the record, Easy Street is also the way back. This is not a loophole, it is a safety net. If you are tired, if it is getting late, or if the day has gone sideways in a way that no longer feels like adventure, the blue lines will get you to the Door. Take them without shame. Just be through it before 18:00.`,
        `On the dose: Easy Street may, at certain hours, appear to be moving. It is a road. It is not. Stay on it or step off it, but make the decision on purpose.`,
      ],
      see:["termites","safety"] },

    { id:"schwechten", cat:"Places", title:"G. Schwechten Ridge", pins:[[45.8,50.5]],
      quote:["Worth a visit."],
      text:[
        `G. Schwechten Ridge is a ridge. It is a perfectly good ridge, with a view, and some trees, and a gradient. It is also, the Guide is obliged to report, the site of the most spectacular thing that did not happen at Mind Garden.`,
        `<div class="sec">The Piano</div>`,
        `At one point Brodie set out to put something near Mind Garden that would absolutely blow every visitor's mind. The idea was a grand piano, deep in the woods, on this ridge. This was not a drunken notion, as both Brodie and Matt rarely drink. Brodie and Matt had an entire plan: logistics, routes, a method. They could have flown the piano onto the ridge. Ask them about it. It was going to happen. It would have been unforgettable.`,
        `Then Brodie listened to Alan Watts, while on LSD. (That was Brodie's dose, not a recommendation. See: respect your dose.) Somewhere in the middle of it, he realised that hauling a grand piano into the bush would be a destructive act, and that doing it would cut directly against the ethos of Mind Garden, and so violate the whole point of it.`,
        `<div class="sec">The Plan</div>`,
        `Both Brodie and Matt had the plan fully laid out. The Guide has not reproduced it here. If you want to know how they came to it, ask them. They will tell you, in detail, and with some regret that it was so good.`,
        `<div class="sec">The Lesson</div>`,
        `Sometimes the lesson life is trying to teach is a few more experiences down the road. And sometimes stopping and waiting is a better guide to what to do than the plan you were certain about. This ridge stands for that. It is the place where something got stopped on purpose.`,
        `Mind Garden isn't about Brodie. It is not about hauling a piano through the bush to impress people Brodie already knows are impressed by him. Impressing your friends is not how you fill your cup. Spending time in the bush sharing a cup of water or juice with a weary traveller will do it. So will holding someone who needs support, or simply sitting in the mud when life gets brutal in the most vicious of ways. That is the best form of impression, and the piano could not have done any of it.`,
        `<div class="sec">Where the Piano Is Now</div>`,
        `The piano lives at Neil's house, as a testament to all of the above. It sits in the heart of the home, above Neil's most treasured painting, the one from his mum. You are welcome to visit Neil and play it. Play it gently. It has been through a lot of thinking.`,
        `<div class="sec">A Dedication</div>`,
        `G. Schwechten Ridge is dedicated to Matthew Guillot.`,
        `Two ancient Australian pine trees stand on this ridge. On the original journey that became Mind Garden, when Brodie was following the fence line, he stopped here and had one of the best solo dance parties of his life, under those trees, with nobody watching. The ridge was already special before the piano was ever a thought.`,
        `But the story of the ridge is really a story about a friend. Matt was willing to find the piano, locate it, buy it, and get ready to fly it into the section, all to prove a point. It turns out the point was never the piano. The point was that you can have a friend who will listen to your crazy plan, humour it, and take action once they see the passion in your eyes, even when it is, at the time, completely unhinged.`,
        `The Guide considers that a rare thing, and rarer than any grand piano. If you have a friend like that, stand under the trees for a minute and think of them. If you don't have one yet, be one.`,
        `This one's for you, MG. Love, your lifelong friend.`,
        `<i>P.S. If you find Matthew on the trail, ask him if he knows where his clippers are.</i>`
      ],
      see:["neil","gully","leave"] },

    { id:"fringes", cat:"Places", title:"The Fringes", pins:[[45.1,58.5]],
      quote:["The edge of the crowd is where the room is."],
      text:[
        `The pink zone on the map, in among the yellow ones.`,
        `<div class="sec">The Other Half of the Lesson</div>`,
        `<a href="#" data-open="marketing">Marketing 101</a> teaches you that a gully is a competitive market: crowded, dense, resource rich and fought over by everything that wants the same light. That is half the lesson. The Fringes are the other half, and they sit right in among the yellow zones, which is the first thing worth noticing. The competition is on one side of you, and here you are, not in it.`,
        `<div class="sec">Open and Uncontested</div>`,
        `The Fringes are open. They are uncontested. Where the gully is full, the Fringes have room. Where everything in the gully is fighting for the same sliver of sky, nothing here is fighting for anything, because there is plenty to go around. Nobody is elbowing you. The light is just there.`,
        `The Guide feels it should say this plainly: in a crowded market, the best move is rarely to push harder through the crowd. It is to notice that the crowd has edges, and the edges are empty.`,
        `<div class="sec">Why Nobody Is Here</div>`,
        `Because the crowd looks like where the action is. Everything in a gully is alive, busy and visibly succeeding, so it draws your eye and your feet. The Fringes look quiet, and quiet gets mistaken for empty, and empty gets mistaken for pointless. Most people walk straight past, into the thick of it. The ones who stop are the ones who have understood Marketing 101 properly.`,
        `<div class="sec">A Note on the Ridge</div>`,
        `A <a href="#" data-open="schwechten">ridge</a> is a niche you find by climbing. The Fringes are a niche you find by looking sideways. Both are the same idea from different angles, and both are best understood by standing in them.`,
        `<div class="sec">What to Do Here</div>`,
        `Stand in the pink zone. Breathe. Look at the yellow on either side and notice how much effort is going into it. Then ask yourself where you are, in whatever you do back home: in the middle of the crowd, or on the edge of it, with all that room around you.`
      ],
      see:["marketing","schwechten","bigdog"] },

    { id:"marketing", cat:"Places", title:"Marketing 101", pins:[[44.0,61.9],[42.2,67.7]],
      text:[
        `Two of the three yellow zones carry this name. The third, up the top, is unlabelled. Make of that what you will.`,
        `<div class="sec">Where It Came From</div>`,
        `On the second unofficial run through Mind Garden, Brodie and Matt were pushing through dense forest, and Brodie had the best marketing lesson of his life. It did not come from a book, a podcast, or a man in a lanyard. It came from a gully. Brodie was sitting in a dense, hidden gem of a spot that no human had been to for a very long time, crying with laughter, with tears of joy running down his face. In that instant came the understanding of marketing: experienced, not learnt.`,
        `<div class="sec">The Lesson</div>`,
        `<b>Gullies are competitive markets.</b>`,
        `Consider the gully. It is resource rich: water, shade, soil, everything a living thing could want. So everything living wants it. The result is dense, crowded and fiercely competitive. Every plant is fighting every other plant for the same sliver of light. Nothing is easy to push through, and nothing is easy to find a place in. If you are a seedling in a gully, you are a small business in a saturated market, offering the same product as ten thousand neighbours, with a lot of overheads and not much sky.`,
        `Now compare the <a href="#" data-open="schwechten">ridge</a>. Open, exposed, quiet. Fewer competitors, and a view. A ridge is a niche. Nobody on a ridge is fighting for light, because the light is just there. The Guide would like to note that you can only appreciate this after you have spent half an hour fighting your way through a gully, and not a moment before.`,
        `<div class="sec">Why This Is Not in a Book</div>`,
        `There are hundreds of marketing books, and they cover positioning, differentiation, finding your niche and standing out from a crowded field, at length and with diagrams. The Guide has nothing against them. But some lessons are best learnt by experiencing them. Marketing 101 can teach you in ten seconds what the hundreds of books spend their pages on. You will be standing in the thick of it, scratched and tangled and unable to see anything, and it will just click.`,
        `<div class="sec">What to Do With It</div>`,
        `When you are in a yellow zone, stop for a moment and look around. Notice how crowded it is. Notice how hard it is to move, and how much everyone around you wants the same thing you do. Then think about whatever you are working on back in the real world, and ask yourself whether you are in a gully or on a ridge.`
      ],
      see:["schwechten","fringes","bigdog"] },

    { id:"bigdog", cat:"Places", title:"Big Dog", pins:[[44.4,66.8]],
      quote:["BIG DOG is located in this area."],
      text:[
        `The brown zone. You've been told.`,
        `<div class="sec">What Big Dog Is</div>`,
        `Big Dog is an ironbark. It is the biggest iron bark Brodie has ever found, ever, and it is ancient and extremely impressive. It is also, the Guide is sorry to say, at the end of its life. Go and see it while it is still standing. Be quiet when you do.`,
        `<div class="sec">Why Ironbark Is Called Ironbark</div>`,
        `Most eucalypts shed their bark every year, like a person quietly changing clothes. An ironbark does not. It keeps every layer it has ever grown, and over the decades the dead bark builds up into deep, dark, furrowed armour. The tree also seeps kino, a kind of resin, into the bark, and the resin sets hard and cements the whole lot together. The result is a coat that is famously difficult to cut with anything primitive, and still a challenge with something modern. The Guide advises against testing this with your knuckles.`,
        `<div class="sec">A Few Things About the Family</div>`,
        `More than 40 species of eucalypt are classed as ironbarks. The red ironbark, <i>Eucalyptus tricarpa</i>, grows from Gippsland across to the south coast of New South Wales, so the Guide would not be shocked if Big Dog turns out to be one. It makes no promises, since nobody has asked the tree.`,
        `The timber is so hard and durable that it has been used for railway sleepers, fence posts, heavy construction and, in a rare moment of tenderness, furniture. It is rated at the top of the scale for durability in the ground. Old ironbark fence posts outlast the fences, the farms and sometimes the farmers. Ironbark is also known as a good insulator for electric fencing, which the Guide finds oddly poetic for a tree that carries itself like a lightning rod.`,
        `Its flowers produce a great deal of nectar, so bees and birds love it, and beekeepers put hives next to it to make dark, distinctive honey. Koalas eat the leaves. Gliders and possums shelter in it. A tree like this is a whole town with one front door.`,
        `<div class="sec">The End of a Dog</div>`,
        `Big Dog is at the end of its life. This is not a tragedy, and the Guide asks you not to treat it as one. A big old tree dying is one of the most generous things a forest does. The hollows become homes. The wood feeds the ground. For a century or two after it has stopped standing, it is still feeding something. The Guide thinks there is a lesson in that, and has decided to leave it to you.`,
        `<div class="sec">How to Visit</div>`,
        `Stand next to it. Put a hand on the bark, gently. Remember that this tree was already large when most of the things you are worried about were invented. Then leave it exactly as you found it. You may not take a piece home. You may not carve your name in it, either. That is what the Door of Losers is for.`
      ],
      see:["marketing","leave","losers"] },

    /* ================= THINGS ================= */
    { id:"brodie", cat:"Things", title:"Following Brodie",
      quote:["Brodie will start at the door at 6 am. People are welcome to follow me into Mind Garden, but Mind Garden is so hard to find even Brodie misses it at times."],
      text:[
        `Every expedition needs a leader. Every leader needs a plan. Brodie has the first, and takes a relaxed and deeply personal view of the second.`,
        `<div class="sec">The Plan</div>`,
        `Brodie starts at the Door at <b>06:00</b>. From there he heads for Mind Garden by the shortest route he knows, which is also, by any ordinary standard, the hardest, steepest and most indirect route available. You are welcome to follow. He knows these hills better than anyone alive. Whether this helps you is a separate question.`,
        `<div class="sec">A Note on Reliability</div>`,
        `Mind Garden is so hard to find that even Brodie misses it at times. The Guide regards this as an honest feature rather than a flaw. A guide who occasionally walks straight past the destination is simply the most accurate possible description of the destination.`,
        `<div class="sec">If You're Late</div>`,
        `Late? Then follow the music in. Mind Garden has a sound, and once it's going, it carries. Music stops at 12:00, after which the day heads down to the Trench. Be warned that following sound through thick bush is a skill, and the bush has opinions about it.`,
        `<div class="sec">The Residents</div>`,
        `Mind Garden is beautiful. It is also a wild place, and its residents were not consulted about your itinerary. There is a clear and known danger on the property, and it comes in several forms:`,
        `<ul>
          <li><b>Kevin</b>, the red-bellied black snake. See his entry. Kevin has relatives: tiger snakes, brown snakes and copperheads also live in this part of Victoria. Nearly all Victorian snakes are venomous. None of them want anything to do with you.</li>
          <li><b>Eagles and hawks.</b> Overhead, with an excellent view of you. Keep well clear of any nest.</li>
          <li><b>Victorian funnel-web spiders.</b> A relative of the famous Sydney funnel-web, living in silk-lined burrows in the ground, ferns, stumps and tree trunks. Best treated with respect, and a bandage if it goes wrong.</li>
          <li><b>Scorpions.</b> Under bark, logs and rocks. Small, and sulky.</li>
          <li><b>Ants.</b> Bull ants in particular, who regard your ankle as a personal insult. Some people are seriously allergic to stings.</li>
          <li><b>Everything else.</b> Redbacks, centipedes, wasps and bees, falling branches, heat, steep ground, and tired legs at the end of the day.</li>
        </ul>`,
        `<div class="sec">What To Do About It</div>`,
        `<ol>
          <li>Long pants and sturdy boots. Walk with a bit of noise: most snakes and many other creatures will retreat when they hear you coming.</li>
          <li>Look before you put hands or feet anywhere you can't see. Logs, rocks, tree stumps and hollows are homes.</li>
          <li>Check the tree before you clip your hammock to it, and check your boots before you put them back on.</li>
          <li>Look, don't touch, and don't try to be a hero. If you see something, back away and tell the others.</li>
        </ol>`,
        `<b>If someone is bitten:</b>`,
        `<ul>
          <li><b>Snake or funnel-web spider:</b> keep them completely still, call <b>000</b>, and apply a pressure bandage over the bite and up the limb. Splint the limb. Don't wash the bite.</li>
          <li><b>Redback or other spiders:</b> wash the area and apply a cold pack for 15 minutes or more, and get medical help. No bandage for these.</li>
          <li><b>Ants, scorpions, wasps and bees:</b> cold pack on the sting. Trouble breathing or a swelling face or throat means <b>000</b>.</li>
          <li><b>Never</b> cut a bite or use a tourniquet.</li>
        </ul>`,
        `Poisons Information: <b>13 11 26</b>. The Guide is not a doctor and nor, for the record, is Brodie.`,
      ],
      see:["find","gully","kevin","safety","day"] },

    { id:"panic", cat:"Things", title:"Don't Panic",
      quote:["Not on the cover. Somewhere more useful."],
      text:[
        `The Guide does <b>not</b> have the words DON'T PANIC inscribed on its cover, unlike certain other books that claim to be the guide to the universe. The Guide has no cover to speak of. It has you. It is the most useful piece of advice in the entire Guide, and it is also the one most often forgotten at exactly the moment it is needed, so the Guide would like it inscribed on you instead.`,
        `<div class="sec">If You Find Yourself Having a Bad Time</div>`,
        `It happens to the best of travellers. The gully looks wrong, the trees look too interested, and a thought has arrived that will not leave. The Guide's advice is simple, and it comes in order.`,
        `<div><blockquote>&ldquo;Every tree was a snake, and every branch was barbed wire, and every rock a spider.&rdquo;<br><span style="font-style:normal;font-size:13px;color:var(--mute)">Brodie, on his second Mind Garden</span></blockquote></div>`,
        `<ol>
          <li><b>Reach out to a fellow traveller first.</b> Somebody on this block is within shouting distance, and almost all of them have been exactly where you are. Say so out loud. &ldquo;I'm having a hard time&rdquo; is a complete sentence, and it is the beginning of the cure.</li>
          <li><b>If that fails, hang your hammock.</b> Pick a spot, string it up and climb in. Bunker down.</li>
          <li><b>Put on some of your best tunes.</b> You know the ones. Let them do the talking for a while.</li>
          <li><b>Breathe.</b> Focus on your breathing, and get back into your body. The Guide states that this is usually the best way through, and in its experience it is also the cheapest.</li>
        </ol>`,
        `<div class="sec">There Are No Bad Trips, Only Experiences</div>`,
        `This is not a slogan. Some of Brodie's most horrific solo Mind Gardens taught him that there is only the experience, and that when it turns hard, it is because you have started asking yourself the great question of the age: <i>&ldquo;But what does it all mean, Basil?&rdquo;</i> as Austin Powers once put it.`,
        `The Guide has examined the evidence and found that the answer is nearly always the same. The problem was never the meaning. The problem is that you stopped being present with the experience, and went looking for the meaning somewhere else. Come back. Feel your feet and your breath. The experience is not trying to tell you anything. It is just happening, and you are in it.`,
        `<div class="sec">But Remember: Don't Panic</div>`,
        `If you find yourself having a bad trip, help is never far away. The block is large, but the people on it are close. And if you respected your dose, which the Guide has asked you to do several times, the chances of any of this are very, very slim.`,
        `<b>The one exception:</b> a medical emergency is not an experience. If someone is hurt, unresponsive, having a seizure, overheating or injured, <b>that is the one time to act quickly.</b> Stay calm, get to the Door for signal and call <b>000</b>. See <a href="#" data-open="safety">The Boring Bit</a>.`,
        `Everything else can wait. You have a map, some water, some company and a very good view. Don't panic.`
      ],
      see:["safety","kevin","day","find"] },

    { id:"termites", cat:"Things", title:"The Definitive Guide to Ranking Termite Mounds", pins:[[42.5,43.7],[54.9,18.0]],
      quote:[
        "Brodies #1 ranked termite mound.",
        "Brodies #3 ranked termite mound. Raff owns this termite mound so please don't touch it.",
        "Easy way off easy street, also the #9 best termite mound is here."
      ],
      text:[
        `Of all the great disciplines of the known universe (philosophy, mathematics, the correct folding of a fitted sheet), few have been as quietly neglected as the ranking of termite mounds. This is a great pity, because it is the one discipline on the property that has a single, undisputed, fully accredited authority. His name is <b>Brodie</b>.`,
        `<div class="sec">Credentials</div>`,
        `Brodie is the foremost and ultimate master of termite mound ranking, formally accredited by the <a href="#" data-open="society"><b>Official Termite Mound Ranking Society of the World</b></a>. The Society has never, in its entire history, overturned one of his rankings.`,
        `<div class="sec">How a Mound Is Ranked</div>`,
        `The method is simple, in the way that all profound methods are simple. Brodie stands in front of a mound. Time passes. A number arrives. The number is final.`,
        `For the curious, the Guide understands that the number is shaped by the following, none of which are written down anywhere, because they live in Brodie:`,
        `<ol>
          <li><b>Stature.</b> How much mound there is, and how seriously it takes being one.</li>
          <li><b>Posture.</b> Straight, leaning or quietly defiant.</li>
          <li><b>Presence.</b> How it sits in the bush. Some mounds simply belong to their spot. Others look like they've been dropped there.</li>
          <li><b>Texture and craft.</b> A mound is the work of a great many tiny builders with no blueprint. The Guide notes that this is more than most of us can say.</li>
          <li><b>Neighbourhood.</b> Location, location, location. Even for a mound.</li>
          <li><b>Aura.</b> Not measurable. Brodie measures it anyway.</li>
        </ol>`,
        `<div class="sec">The Rankings on the Property</div>`,
        `<ul>
          <li><b>#1.</b> The big one, on the west side of the property. It holds the top spot and has done so with great dignity. Marked on the map.</li>
          <li><b>#3.</b> Up near the Trench. Owned by Raff. <b>Please don't touch it.</b> Marked on the map.</li>
          <li><b>#9.</b> On Easy Street. Still comfortably in the top ten, which is more than most mounds in the universe can claim.</li>
          <li><b>#2, #4 to #8, and everything below #9.</b> They exist. Their whereabouts are known to Brodie. Ask nicely.</li>
        </ul>`,
        `<div class="sec">Etiquette</div>`,
        `<ol>
          <li>Look, don't touch. Mounds are homes, and the residents are busy.</li>
          <li>Do not propose a mound for promotion. Mounds are not promoted. They are discovered, and then ranked, once, correctly.</li>
          <li>Do not lodge an appeal. There's no appeals desk. There is Brodie, and he has already given his answer.</li>
          <li>On the dose: a mound may appear to breathe, shimmer, or hum. In fairness, it is full of insects. Appraise from a respectful distance.</li>
        </ol>`,
      ],
      see:["society","easy","kevin"] },

    { id:"society", cat:"Things", title:"The Official Termite Mound Ranking Society of the World",
      text:[
        `Every great discipline needs a governing body, and ranking termite mounds is no exception. The Official Termite Mound Ranking Society of the World is that body. It is the only organisation of its kind anywhere in the known universe, which has made its membership rules refreshingly easy to write.`,
        `<div class="sec">Purpose</div>`,
        `To see that every termite mound on the planet is ranked correctly, once, and that nobody is allowed to rank it a second time.`,
        `<div class="sec">Founding</div>`,
        `The Society was founded before records began, which it considers the proper time to found a thing. It has no head office. It has a mound, and a great many more mounds, and that has always been enough.`,
        `<div class="sec">Accreditation</div>`,
        `There is one examination. It is held in the bush, it has no questions, and it consists of a very long look at a termite mound followed by a number. The number must be right. <b>Brodie</b> holds the Society's highest accreditation: Foremost and Ultimate Master of Termite Mound Ranking.`,
        `<div class="sec">The Constitution</div>`,
        `<ol>
          <li>Every mound shall be ranked.</li>
          <li>Rankings are final.</li>
          <li>Mounds are looked at, never touched. A mound owned by a named individual (see: Raff, #3) is doubly protected.</li>
          <li>The Society's motto is under review. It has been under review for some time.</li>
        </ol>`,
        `<div class="sec">The Society's Reading List</div>`,
        `For the benefit of the unconvinced, the Society keeps a small library of facts. A termite mound is built from a mixture of soil, termite saliva and dung, which the Society regards as the finest possible endorsement of the dung. In the Northern Territory, cathedral termites build some of the tallest mounds in the world, over seven metres of them. The Society has seen the photographs and is satisfied.`,
        `Across northern Australia there is a long tradition of dressing mounds in old shirts and hats. The Society neither condones nor condemns this, but notes that a mound in a hat is, strictly speaking, not being looked at as a mound.`,
        `<div class="sec">Contacting the Society</div>`,
        `There is no phone number and no website. If you need the Society, find Brodie. He is, in every practical sense, the Society's voice.`,
      ],
      see:["termites"] },

    { id:"kevin", cat:"Things", title:"What to Do If You Find Yourself Running Into Kevin", pins:[[43.3,33.6],[43.4,52.8]],
      quote:["Kevin sighted."],
      text:[
        `<b>Kevin</b> is a red-bellied black snake: glossy black on top, a flash of red down the sides and belly, and a general air of having somewhere better to be. He lives near the Mind Garden gully, has done so for far longer than any of us have been coming here, and holds no opinion whatsoever about your plans for the day. The Guide has found no record of Kevin ever paying rent. This has never come up.`,
        `The most important thing to understand about Kevin is that he does not want to meet you either. Of all the things on the property capable of ruining your afternoon, Kevin is the one most determined not to. His entire strategy is to leave. The only thing that turns this into a problem is you, standing in the way of it.`,
        `<div style="margin:18px 0 6px"><img src="photos/snake.jpg" alt="" style="width:100%;border-radius:12px;display:block"><div style="font-size:12px;color:var(--mute);line-height:1.45;margin:6px 4px 0"><b>Kevin, in the wild.</b> A real sighting on the block, and the best camouflage in the Guide. Look left of the rock, among the sticks: he is the dark, glossy shape about halfway down. He is not hiding from you. He is simply better at this than you are at noticing.</div></div>`,
        `<div style="margin:18px 0 6px"><img src="photos/kevin-zoom.jpg" alt="" style="width:100%;border-radius:12px;display:block"><div style="font-size:12px;color:var(--mute);line-height:1.45;margin:6px 4px 0"><b>Kevin, zoomed in.</b> Glossy, calm, and entirely uninterested in the camera.</div></div>`,
        `<div class="sec">Brodie's Spirit Animal</div>`,
        `The Guide has reviewed the evidence and hereby declares that Kevin is Brodie's spirit animal. This was not Brodie's idea. It is the Guide's finding, and it is final. Both are at their best in the gully. Both go quiet when anyone gets too close. Both have been on this block longer than any visitor, and both are entirely sure of the way out.`,
        `<b>If you see Kevin:</b>`,
        `<ol>
          <li><b>Stop.</b> Don't leap backwards, don't lunge forwards, don't attempt an interpretive dance.</li>
          <li>Find where his whole body is, then check where everyone else's feet are.</li>
          <li>Give him room: a few metres is the polite minimum. He'll go the moment you give him somewhere to go.</li>
          <li>Back away slowly, or take the long way round. The gully isn't going anywhere. Kevin might be.</li>
          <li>Tell the others, calmly. Not &ldquo;SNAKE&rdquo;. More &ldquo;Kevin's over there&rdquo;.</li>
        </ol>`,
        `<b>Things not to do:</b> pat him, pick him up, throw things at him, creep in for a closer photo, or try to kill him (snakes are protected in Victoria, and Kevin was here first).`,
        `The Guide understands that, depending on the hour, Kevin may appear to be a message from the universe, a shimmering ribbon of ancient wisdom, or the most beautiful thing you have ever seen. He may well be all three. He is also a snake. Appreciate him from a distance that would be considered excessive at a dinner party.`,
        `<b>If Kevin has bitten someone</b> (extremely unlikely, and entirely avoidable by not standing on him), treat it as an emergency no matter how fine they feel:`,
        `<ol>
          <li>Keep the person calm and <b>completely still</b>. Movement spreads venom.</li>
          <li>Call <b>000</b>. No signal? Send one person up to the Door to get it, and everyone else stays put.</li>
          <li>Apply a <b>pressure immobilisation bandage</b>: firm, over the bite and then up the whole limb, as snug as you'd do for a sprained ankle, then splint the limb. Don't wash the bite and don't take clothes off.</li>
          <li>Keep them still until the ambulance arrives. No cutting, no sucking, no tourniquet.</li>
        </ol>`,
        `Symptoms can be hard to tell apart from the dose, which is exactly why you don't wait around to find out. Poisons Information is <b>13 11 26</b>.`,
        `<div class="sec">Super Cool Facts About Kevin</div>`,
        `<ol><li><b>He has a Latin name.</b> <i>Pseudechis porphyriacus</i>. The second word has to do with the colour purple, which is a bold choice for a snake that is black and red.</li><li><b>He swims.</b> Red-bellied blacks love the water's edge, swim well, and will happily hunt in and around creeks. This is why you should look before you step near the river.</li><li><b>He eats frogs, lizards and other snakes.</b> He will eat other snakes, which is a good reason to be pleased he is on the property. He also has some resistance to cane toad toxin, which is more than most can say.</li><li><b>He is mostly bluff.</b> A cornered Kevin will flatten his neck, hiss and make mock strikes, often with his mouth closed. He is announcing a position, not issuing a threat.</li><li><b>He gives birth to live young.</b> Kevin's relatives do not lay eggs. A mother has a dozen or so babies, fully formed, and they are on their own from the first day.</li><li><b>He is shy, even among his own.</b> Males wrestle each other upright in what is called a combat dance. It looks like a slow, glossy tango. It is not romantic.</li><li><b>He is seasonal.</b> Kevin is slow in the cold and far more active when the days warm up. The summer solstice is peak Kevin. The winter solstice is probably a long nap.</li><li><b>His venom is real, his reputation is mostly not.</b> Bites are rare and almost always happen when someone steps on him, picks him up or tries to kill him. They are still a medical emergency, which is why the steps below matter.</li></ol>`,
        `<i>Kevin is a protected native animal. He has outlived everyone's opinion of him. Be worthy of him.</i>`,
        `<div class="short"><b>The short version:</b> See Kevin. Stop. Leave him alone. Let him leave. Tell the others. Carry on. Note that Kevin has never lost Mind Garden, as he lives there. The Guide considers this deeply unfair.</div>`,
        `<i>Kevin has been sighted at two spots on the map. Kevin does not read maps and moves about, so treat the dots as suggestions.</i>`
      ],
      see:["gully","safety","easy"] },

    { id:"neil", cat:"Things", title:"Neil", pins:[[49.9,77.3]],
      quote:["Hanging out with Neil, he's spiritually advanced, you won't get it."],
      text:[
        `Somewhere in the galaxy there are probably wiser beings than Neil. The Guide has looked, thoroughly, and has so far not found one. Neil is a spiritually advanced creature, and the orange clearing on the map is where he can be found.`,
        `<div class="sec">Credentials</div>`,
        `Neil is an exceptional teacher, and is regarded as the highest-ranked spiritual teacher on the planet Earth. Brodie only found this out recently, on the day he found Mind Garden, while carrying out a simple and basic task: following the boundary fence on a cosmic dose of mushrooms. (That was Brodie's dose, not a recommendation. See: respect your dose.) Even Brodie understands only a fraction of it. The Guide considers this encouraging. If a lifetime of study gets you a fraction, there's clearly a lot to go around.`,
        `<div class="sec">Where to Find Neil</div>`,
        `At the house, if he's there. Neil is not obliged to attend Mind Garden, and he keeps his own hours, so he may or may not be around on the day. If he is, then hanging out with Neil is highly recommended. You will learn a lot. Brodie has spent a lifetime hanging out with Neil, and reports that it is a very good time, and one that only gets better once you can understand and interpret his teachings.`,
        `<div class="sec">What Neil Is Not</div>`,
        `Neil is not Mind Garden. This matters. Time with Neil is wonderful, but it is a different thing, and the Guide wishes to be clear that you should not mistake one for the other. You can have a great afternoon with Neil and still, strictly speaking, not have done Mind Garden, even if you've opened the door and made it back in time. But time spent with Neil is valuable.`,
        `<div class="sec">What Mind Garden Is</div>`,
        `Mind Garden is about walking into the bush scared, with almost no plan. <b>Facing the fear is the core lesson Mind Garden teaches.</b> Neil can teach you a great deal, and he will do it gently, in comfort. Mind Garden will teach you something else, and it will do it somewhere uphill.`,
      ],
      see:["gully","find","brodie"] },
    { id:"love", cat:"Things", title:"Love",
      quote:["Mostly harmless. Occasionally load-bearing."],
      text:[
        `Love is the single most written-about subject in the known universe, and the Guide has read most of it. It can report that almost all of it is wrong, and that the remainder is correct only in the way that a map of a river is correct: accurate at the time, and not a lot of use once you are in the water.`,
        `<div class="sec">What It Is</div>`,
        `Love is a decision, an attention, and a physical event that happens in the chest, in roughly that order of importance. The physical event gets all the press, because it is dramatic and easy to put in a song. The decision and the attention are the bit that actually does the work. They are also the bit that looks, from the outside, like absolutely nothing at all: a person making a cup of tea for another person at a time of day nobody asked.`,
        `<div class="sec">The Many Kinds</div>`,
        `The Guide has catalogued several. There is the love of a partner, which is the one on the poster. There is the love of a child, which comes with a lifetime subscription and no cancellation option. There is the love of a friend, which is the quietest and most underrated, and which is the kind that will find, buy, and organise the airlift of a grand piano on the strength of a single unhinged phone call. And there is the love of a place, which is the kind this whole block runs on, and which is why people keep crawling back up the hill every quarter.`,
        `<div class="sec">What It Is Not</div>`,
        `It is not the same as being impressive. It is not a performance, and it does not need to be demonstrated to a crowd. The Guide has noted that the people who are best at it are very often doing something small and unremarkable at the time: passing a cup of water to a weary traveller, say, or sitting beside someone in the mud while life is being brutal in the most vicious of ways.`,
        `<div class="sec">The Mathematics</div>`,
        `Love is the only resource known to the Guide that increases when you give it away. It violates conservation of everything, and the physicists have more or less given up on it. A person can love more people than they have hours in the day, and the day somehow comes out fine. Economists are baffled. Poets are fine with it.`,
        `<div class="sec">How It Fits Mind Garden</div>`,
        `At the end of a day spent being scared, lost, tired and lightly rearranged by the bush, the Guide has noticed that the thing people want most is not a view, a swim or a revelation. It is the person who is waiting at the other end. Which is why, if you do Mind Garden right, your partner meets you as you walk into the Trench, and the embrace is, in the Guide's view, the whole point of the afternoon. Everything else is the long way of getting there.`,
        `<div class="sec">What to Do About It</div>`,
        `Very little, as it turns out. Turn up. Pay attention. Be sober when somebody needs you to be. Hold on when it is difficult, and put the piano down when it is a bad idea. Say the thing out loud while the person is still there to hear it. The Guide has looked into the alternatives and there are none.`,
        `<div class="short"><b>Safety note:</b> Love can cause sudden crying in the Trench. This is normal. Do not wake anyone.</div>`
      ],
      see:["trench","children","schwechten","neil"] },

    { id:"fortytwo", cat:"Things", title:"42",
      quote:["The answer is 42. This is not up for debate. The question, on the other hand, is."],
      text:[
        `Somebody will ask you what the answer is. They always do. They will ask it at the Door, in the Trench, or just after Kevin, and they will ask it as if you had it on you. You do. It is 42.`,
        `<div class="sec">What the Number Means</div>`,
        `Forty-two is the answer to the Ultimate Question of Life, the Universe and Everything. It has been worked out. It has been checked. By all accounts it is correct, and the Guide has no reason to doubt it. The Guide would like you to take a moment with that, because most people have spent their entire lives believing the answer to everything was going to be bigger.`,
        `<div class="sec">Where You Will See It</div>`,
        `Everywhere, once you start looking. Count the entries in the Guide. Count your steps from the Door to the first gully. Count the number of times someone tells you "it's not far now". The Guide has counted them all, and the total is always suspiciously close.`,
        `<div class="sec">What Brodie Says</div>`,
        `Brodie says that he has been hanging out with Neil for a lifetime, and has put a lot of thought into this. He has found that if you ask Neil what 42 means, Neil will answer straight away, without a pause. It is a very good answer. Brodie will not repeat it. Brodie says you had to be there.`,
        `<div class="sec">The Difficulty</div>`,
        `The difficulty with 42 is not the answer. It is that nobody, at any point in the history of the universe, has been entirely sure what the question was. It is an inconvenient detail. It means that every person who has ever got to the end of the day, lain down in the sand at the bottom of the Trench, looked up and thought "oh, <i>that's</i> it" has been working with half the information.`,
        `So the Guide did what any serious guide would do. It went to Neil, in the middle of the afternoon, at the house, with the piano going in the background, and asked him directly. It said: <i>Neil, if the answer is 42, what is the question?</i>`,
        `Neil looked up from his tea. He put the cup down, slowly, onto the table, on top of something that was clearly very important. He looked at the Guide for what felt like several minutes. Then he took a breath, and said:`,
        `<p style="font-size:22px;letter-spacing:.3em;margin-top:18px">&ldquo;Well, it's&hellip;</p>`
      ],
      see:["neil","brodie","trench"] },

    { id:"pyramids", cat:"Things", title:"What the Fuck Is the Pyramids",
      quote:["Tombs, apparently. Or fertiliser. Nobody on the block will say which."],
      text:[
        `The Guide gets asked this a lot, usually around the Trench, usually around sunset, and usually by someone who has just had a very large idea. The question is a fair one. The pyramids are enormous. They are 4,500 years old. And nobody has ever explained, in a way that fully satisfies a person lying in the sand at 4pm, <i>why</i>.`,
        `<div class="sec">The Official Answer</div>`,
        `Tombs. Pharaohs go in, pharaohs stay. Egyptologists have a great deal of evidence for this and are quite attached to it.`,
        `<div class="sec">The Other Answer</div>`,
        `Then there is a man on the internet. His name is Geoffrey Drumm, and his work, popularised in a very long series of videos, is the reason this entry exists. He has proposed that the pyramids were not tombs at all. They were <b>chemical factories</b>, and the product, mostly, was <b>fertiliser</b>.`,
        `<div class="sec">The Work of Geoffrey Drumm, Briefly</div>`,
        `Drumm's theory is that the pyramids were a connected industrial system, powered by lightning and electric fields in the earth. According to the theory, each pyramid had a job. The Step Pyramid at Saqqara handled methane. The Red Pyramid at Dahshur made ammonia, and the Bent Pyramid turned that into solid fertiliser. Giza, meanwhile, did the metallurgy, with acids for extracting metal. All of it, the Guide is assured, was in service of growing a great deal of food.`,
        `The Guide finds this interesting for one reason: it is the only theory it has heard that explains <i>why a pyramid has to be so big</i>. Reactors under pressure need something heavy on top. This is a more satisfying answer than "the king was very important", and it should be said that it is also a more fun one.`,
        `<div class="sec">The Guide's Position</div>`,
        `The Guide would like to be clear: the scientific community does not accept this. Egyptologists and chemists have looked at it, and have remained with tombs. The Guide is not telling you that pyramids made fertiliser. The Guide is telling you that a man on the internet has put in several years of work arguing they did, and that the sheer commitment is the point.`,
        `<div class="sec">Why This Is in the Guide</div>`,
        `Because it is a good example of what happens when a person stands in front of the largest thing they have ever seen and decides that the usual answer is not enough. You may disagree with him. You may think he is wrong. You may find yourself, by the end of a long afternoon in the Trench, with a theory of your own about something. The Guide recommends saying it out loud. Matt will humour it.`,
        `<div class="sec">Answer to the Question</div>`,
        `What the fuck is the pyramids? Nobody here knows. Possibly tombs. Possibly, if you go with the man on the internet, a very large garden centre.`
      ],
      see:["trench","schwechten","brodie"] },

    { id:"lifetime", cat:"Things", title:"How to Gain Lifetime Membership of Mind Garden",
      quote:["Membership has its privileges. Mostly they are the same as everyone else's."],
      text:[
        `Mind Garden has no membership card and no committee. The fee is a book you have read and some food to share with a fellow traveller. It does have a lifetime membership, which is held by almost nobody, because the Guide has only ever found one honest way to earn it: <b>keep turning up</b>. Currently, Brodie is the only holder of a lifetime membership, as his strikes of completing Mind Garden are greater than those of all other participants.`,
        `<div class="sec">The Honest Route</div>`,
        `Come through the Door. Make it back through the other one by 18:00. Do this at every equinox and every solstice, for the rest of your life, without once losing Mind Garden. The Guide notes that this is four attempts a year, that there is no way to win, and that the whole thing therefore rests on a person who simply refuses to stop. That person is a lifetime member. They are also, statistically, extremely rare.`,
        `<div class="sec">The Other Route</div>`,
        `There is a second category, <b>honorary lifetime membership</b>, awarded at Brodie's sole discretion for services to the block. The Guide cannot tell you what he looks for. It can only report that Brodie lets absolutely anyone use his mower, and that he takes a keen interest in who does. Applications are considered. Most are declined, and nobody has ever been told why.`,
        `<div class="sec">The Fine Print</div>`,
        `Lifetime membership confers the right to attend Mind Garden for life. It does not confer the right to win, because there is no way to win. It does not protect you from Kevin. It does not get you out of the Door of Losers.`,
        `<p style="margin-top:140px;text-align:right;font-size:9px;opacity:.35;letter-spacing:.05em">Brodie's mower is open to all. <a href="mower.html">Booking</a> is essential.</p>`
      ],
      see:["rules","losers","kevin"] },

    { id:"spiders", cat:"Things", title:"Why Spiders Cannot Be Farmed",
      quote:["Eight legs, eight eyes, no interest in your business plan."],
      text:[
        `The Hitchhiker's Guide has this to say about farming: it works for cows, sheep, bees and, with some persuading, salmon. It does not work for spiders, and several generations of very determined people have confirmed this at their own expense. This entry explains why, with pictures, because by the end of the afternoon in the Trench you will have a theory, and the Guide would like it to be a correct one.`,
        `<div style="margin:18px 0 6px;border:1px solid var(--line);border-radius:12px;padding:10px 8px 8px;background:#fff"><svg viewBox="0 0 340 200" width="100%" role="img" aria-label="A spider with labelled parts"><g transform="translate(170,100) scale(1.7)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(170,100) scale(1.7)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><g font-family="Inter,sans-serif" fill="var(--ink)" font-size="10"><text x="6" y="22">Eight legs</text><text x="6" y="34" fill="var(--mute)">(all of them busy)</text><line x1="60" y1="38" x2="125" y2="62" stroke="var(--mute)"/><text x="236" y="22">Eight eyes</text><text x="236" y="34" fill="var(--mute)">(none on your pitch)</text><line x1="262" y1="38" x2="190" y2="76" stroke="var(--mute)"/><text x="6" y="186">Fangs: for flies,</text><text x="6" y="198" fill="var(--mute)">and for colleagues</text><line x1="70" y1="172" x2="158" y2="116" stroke="var(--mute)"/><text x="226" y="186">Business sense</text><text x="226" y="198" fill="var(--red)">NONE DETECTED</text><line x1="262" y1="172" x2="200" y2="140" stroke="var(--mute)"/></g></svg><div style="font-size:12px;color:var(--mute);line-height:1.45;margin:6px 6px 2px"><b>Fig. 1.</b> A spider. Note the eight legs, the eight eyes and the complete absence of any interest in being your livestock.</div></div>`,
        `<div class="sec">Problem One: They Are Not Social</div>`,
        `A cow is content to stand beside another cow for eleven years. A spider regards another spider as one of two things: a meal, or a competitor who is about to become a meal. Put several spiders in a box and you have not made a farm. You have made a very slow, very polite fight.`,
        `<div style="margin:18px 0 6px;border:1px solid var(--line);border-radius:12px;padding:10px 8px 8px;background:#fff"><svg viewBox="0 0 340 130" width="100%" role="img" aria-label="Spiders in a box over a month"><rect x="8" y="14" width="96" height="84" rx="8" fill="none" stroke="var(--ink)" stroke-width="1.5"/><g transform="translate(30,46) scale(0.42)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(30,46) scale(0.42)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><g transform="translate(56,46) scale(0.42)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(56,46) scale(0.42)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><g transform="translate(82,46) scale(0.42)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(82,46) scale(0.42)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><g transform="translate(30,82) scale(0.42)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(30,82) scale(0.42)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><g transform="translate(56,82) scale(0.42)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(56,82) scale(0.42)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><g transform="translate(82,82) scale(0.42)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(82,82) scale(0.42)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><g transform="translate(43,64) scale(0.42)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(43,64) scale(0.42)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><g transform="translate(69,64) scale(0.42)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(69,64) scale(0.42)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><text x="56" y="114" text-anchor="middle" font-size="10" font-family="Inter,sans-serif" fill="var(--ink)">Day 1: 8 spiders</text><rect x="122" y="14" width="96" height="84" rx="8" fill="none" stroke="var(--ink)" stroke-width="1.5"/><g transform="translate(144,46) scale(0.42)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(144,46) scale(0.42)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><g transform="translate(170,46) scale(0.42)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(170,46) scale(0.42)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><g transform="translate(196,46) scale(0.42)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(196,46) scale(0.42)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><text x="170" y="114" text-anchor="middle" font-size="10" font-family="Inter,sans-serif" fill="var(--ink)">Day 9: 3 spiders</text><rect x="236" y="14" width="96" height="84" rx="8" fill="none" stroke="var(--ink)" stroke-width="1.5"/><g transform="translate(258,46) scale(0.42)" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="-6,-4.5 -14,-8 -32,-26 -42,-30"/><polyline points="-6,-1.5 -15,-2 -38,-8 -48,-12"/><polyline points="-6,1.5 -15,4 -38,14 -48,24"/><polyline points="-6,4.5 -13,9 -30,30 -40,40"/><polyline points="6,-4.5 14,-8 32,-26 42,-30"/><polyline points="6,-1.5 15,-2 38,-8 48,-12"/><polyline points="6,1.5 15,4 38,14 48,24"/><polyline points="6,4.5 13,9 30,30 40,40"/></g><g transform="translate(258,46) scale(0.42)" fill="var(--ink)"><ellipse cx="0" cy="8" rx="11" ry="14"/><ellipse cx="0" cy="-9" rx="7" ry="6.5"/><circle cx="-2.6" cy="-11" r="1.6" fill="var(--paper)"/><circle cx="2.6" cy="-11" r="1.6" fill="var(--paper)"/></g><text x="284" y="114" text-anchor="middle" font-size="10" font-family="Inter,sans-serif" fill="var(--ink)">Day 30: 1 big spider</text></svg><div style="font-size:12px;color:var(--mute);line-height:1.45;margin:6px 6px 2px"><b>Fig. 2.</b> Stocking density in practice. The Guide would like to stress that nothing was added to the box between Day 1 and Day 30 except time, and one spider's growing sense of entitlement.</div></div>`,
        `<div class="sec">Problem Two: They Eat Each Other</div>`,
        `This is not an occasional lapse. It begins before birth. A single egg sac can hold hundreds of babies, and the first lesson most of them learn is that the nearest sibling is lunch. Farmers talk about <i>yield per hectare</i>. The spider talks about <i>yield per sibling</i>, and it is always one.`,
        `<div style="margin:18px 0 6px;border:1px solid var(--line);border-radius:12px;padding:10px 8px 8px;background:#fff"><svg viewBox="0 0 340 190" width="100%" role="img" aria-label="Graph: more spiders per box means fewer spiders out"><line x1="40" y1="20" x2="40" y2="150" stroke="var(--ink)"/><line x1="40" y1="150" x2="320" y2="150" stroke="var(--ink)"/><polyline points="40,34 90,50 140,92 190,128 240,144 320,148" fill="none" stroke="var(--red)" stroke-width="3"/><g font-family="Inter,sans-serif" fill="var(--ink)" font-size="10"><text x="180" y="176" text-anchor="middle">Spiders you put in the box</text><text transform="translate(12,90) rotate(-90)" text-anchor="middle">Spiders you get out</text><text x="110" y="30" fill="var(--mute)">the optimistic bit</text><text x="200" y="112" fill="var(--mute)">the Guide is not laughing</text></g></svg><div style="font-size:12px;color:var(--mute);line-height:1.45;margin:6px 6px 2px"><b>Fig. 3.</b> The more spiders you add, the fewer you get out. Economists call this &ldquo;diminishing returns.&rdquo; Spiders call it &ldquo;dinner.&rdquo;</div></div>`,
        `<div class="sec">Problem Three: Dinner Is Alive</div>`,
        `Spiders eat live prey, and plenty of it. So to farm spiders you must first farm the thing the spiders eat, which is flies, which also need feeding, which is a different kind of horrible. At this point the Guide recommends sitting down. You are now a fly farmer who occasionally gets to look at spiders.`,
        `<div class="sec">The Famous Attempt</div>`,
        `In Madagascar, a few people did manage a spectacular version of the impossible. They gathered golden orb weaver spiders by the hundreds of thousands, held them in a harness for a short while, and gently collected their silk by hand. After years of work they produced a few rare, extraordinary golden textiles. Note what they did not do. They did not farm the spiders. They borrowed them for the day, collected the silk, and let them go. The Guide considers this the closest thing to a workable arrangement, and observes that it required a great deal of patience and almost no cooperation from the spiders.`,
        `<div class="sec">Problem Four: There Is No Market</div>`,
        `Even if you solved all of the above, there is the matter of what you would sell. Silk is thin and slow to collect. Venom comes in tiny volumes. Meat is, statistically, nobody's idea of a Friday night. The Guide has run the numbers three times and each time the answer was &ldquo;a very small cheque and a very large number of bites.&rdquo; See <a href="#" data-open="marketing">Marketing 101</a> for what happens to people who enter a market anyway.`,
        `<div class="sec">The Business Plan</div>`,
        `<div style="margin:18px 0 6px;border:1px solid var(--line);border-radius:12px;padding:10px 8px 8px;background:#fff"><svg viewBox="0 0 340 230" width="100%" role="img" aria-label="The spider farming business plan, a loop"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="var(--ink)"/></marker></defs><rect x="10" y="10" width="150" height="30" rx="6" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="85.0" y="29" text-anchor="middle" font-size="10" font-family="Inter,sans-serif" fill="var(--ink)">1. Buy 1,000 spiders</text><line x1="160" y1="25" x2="180" y2="25" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah)"/><rect x="180" y="10" width="150" height="30" rx="6" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="255.0" y="29" text-anchor="middle" font-size="10" font-family="Inter,sans-serif" fill="var(--ink)">2. Build a lovely farm</text><line x1="255" y1="40" x2="255" y2="60" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah)"/><rect x="180" y="60" width="150" height="30" rx="6" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="255.0" y="79" text-anchor="middle" font-size="10" font-family="Inter,sans-serif" fill="var(--ink)">3. Feed them flies</text><line x1="180" y1="75" x2="160" y2="75" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah)"/><rect x="10" y="60" width="150" height="30" rx="6" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="85.0" y="79" text-anchor="middle" font-size="10" font-family="Inter,sans-serif" fill="var(--ink)">4. Farm the flies first</text><line x1="85" y1="90" x2="85" y2="110" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah)"/><rect x="10" y="110" width="150" height="30" rx="6" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="85.0" y="129" text-anchor="middle" font-size="10" font-family="Inter,sans-serif" fill="var(--ink)">5. Discover flies bite</text><line x1="160" y1="125" x2="180" y2="125" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah)"/><rect x="180" y="110" width="150" height="30" rx="6" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="255.0" y="129" text-anchor="middle" font-size="10" font-family="Inter,sans-serif" fill="var(--ink)">6. Leave for one weekend</text><line x1="255" y1="140" x2="255" y2="160" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah)"/><rect x="180" y="160" width="150" height="30" rx="6" fill="none" stroke="var(--red)" stroke-width="1.5"/><text x="255.0" y="179" text-anchor="middle" font-size="10" font-family="Inter,sans-serif" fill="var(--ink)">7. Return: 1 spider</text><line x1="180" y1="175" x2="160" y2="175" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#ah)"/><rect x="10" y="160" width="150" height="30" rx="6" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="85.0" y="179" text-anchor="middle" font-size="10" font-family="Inter,sans-serif" fill="var(--ink)">8. Go to step 1</text><text x="170" y="216" text-anchor="middle" font-size="10" fill="var(--mute)" font-family="Inter,sans-serif">Profit: not found. Spider: delighted.</text></svg><div style="font-size:12px;color:var(--mute);line-height:1.45;margin:6px 6px 2px"><b>Fig. 4.</b> The complete spider farming business plan, as it has been attempted. Steps 1 to 8 have been repeated by real people. The Guide is unable to tell you which of them was Kevin.</div></div>`,
        `<div class="sec">What the Block Teaches Us</div>`,
        `Walk the <a href="#" data-open="fringes">fringes</a> of Mind Garden and you will see the point at once. Every web on the block is a spider running its own tiny uncontested market, alone, in the best available spot, with a perfect understanding of its own space. It is the opposite of a farm, and the most successful business on the property. The Guide suggests you look at one for a good long while before you decide how you feel about your own plans.`,
        `<b>The Guide's conclusion:</b> spiders cannot be farmed because spiders do not want to be farmed, and have the legs, the eyes and the cannibalistic temperament to make this entirely clear. They can only be left alone, admired and, occasionally, walked into at head height on the way down to the Trench. For that last one, see <a href="#" data-open="kevin">Kevin</a>.`
      ],
      see:["marketing","fringes","kevin","termites"] },

    { id:"secret", cat:"Things", title:"The Secret to Life",
      text:[`<div style="position:sticky;top:0;z-index:5;display:flex;align-items:center;justify-content:space-between;margin:0 -22px 10px;padding:10px 22px;background:var(--paper);border-bottom:1px solid var(--line);font:700 11px Cinzel,serif;letter-spacing:.2em;text-transform:uppercase;color:var(--mute)"><span>Easy way out</span><button onclick="closeSheet()" aria-label="Close" style="width:32px;height:32px;border-radius:50%;border:0;background:#e9e7df;font-size:20px;line-height:1;color:var(--ink)">&times;</button></div>`,`It begins with being able to <a href="mower.html">hire Brodie's mower</a>. And the final answer is at the footnote of this page.`,`<div class="loop" aria-hidden="true" style="height:6000px"></div>`,`<div class="loop" aria-hidden="true" style="height:6000px"></div>`,`<div class="loop" aria-hidden="true" style="height:6000px"></div>`,`<div class="loop" aria-hidden="true" style="height:6000px"></div>`],
      see:[] }
  ]
};
