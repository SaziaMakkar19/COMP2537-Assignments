'use strict';

const express = require('express');
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');

// GENERAL CONSTANTS
const errorMsg = 'These are not the codes that you are looking for.';


app.use('/css', express.static('private/css'));
app.use('/js', express.static('private/js'));
app.use('/image', express.static('private/image'));

const items = [{
        title: "Drink more water",
        body: "Few of us drink enough plain water every day. I’m certainly guilty of choosing coffee over a glass of water.Proper hydration can make a huge difference to our general health and well-being, from clearer skin to a healthy digestive system.",
        date: "2021-05-01"
    },
    {
        title: "Brush your teeth twice a day",
        body: "Oral health plays a massive role in overall health.Make sure you’re doing your best to keep your teeth and gums healthy. That means using a soft toothbrush and brushing twice a day.",
        date: "2021-05-02"
    },
    {
        title: "Eat an extra serve of vegetables each day",
        body: "No matter how well you’re currently eating, an additional serve of colorful vegetables is a good thing. Remember, a serving is a cup of salad greens or half a cup of cooked vegetables.",
        date: "2021-05-03"
    },
    {
        title: "Ban added sugar",
        body: "This can be a tough one as sugar seems to be added to everything!If you’re new to the sugar challenge, start with the most obvious things like cakes, cookies, and chocolate bars.",
        date: "2021-05-04"
    },
    {
        title: "Eat home-cooked meals",
        body: "Eating a home-cooked meal every day will probably require some forward planning and meal prep, but you won’t regret the effort.You’ll eat better and spend less money. Win/win!",
        date: "2021-05-05"
    },
    {
        title: "10,000 steps every day",
        body: "Many of us spend most of our days sitting at a desk. That’s not great for your body.Grab an apple watch, pedometer, or dust off that Fitbit and start tracking your steps.Achieving 10,000 steps a day will require effort.",
        date: "2021-05-06"
    },
    {
        title: "Get 8 hours sleep",
        body: "Getting sufficient sleep is the foundation of good health. Most of us don’t get anywhere near enough sleep.Aim to be in bed for at least 8 hours, longer if you can manage it.",
        date: "2021-05-06"
    },
    {
        title: "Take the stairs (up and down)",
        body: "Taking the stairs is a great way to add extra steps to your day, but it’s also an excellent way to tone your lower body – legs and butt. ",
        date: "2021-05-07"
    },
    {
        title: "Read every day",
        body: "Reading can be a wonderful way to expand your mind and reduce stress.You can choose whatever books strike your fancy: fiction or non-fiction. Reading before you turn the lights out at the end of the day is an excellent way to unwind and disconnect from technology.",
        date: "2021-05-08"
    },
    {
        title: "Follow a productivity system",
        body: "Challenge your productivity by taking whatever method you use to the next level.If your productivity currently sucks, choose a system to use for 30 days to see how much more you can achieve.",
        date: "2021-05-09"
    },
    {
        title: "Set 3 priorities each day and achieve them",
        body: "A large part of being productive is self-discipline. So, each evening, set three priorities for the following day and make sure you achieve them.",
        date: "2021-05-10"
    },
    {
        title: "Learn to meditate",
        body: "It doesn’t have to be complicated. Sometimes, simply sitting comfortably with your eyes closed, allowing thoughts to waft through your mind, and breathing deeply can help quiet your anxiety and stress.",
        date: "2021-05-11"
    },
    {
        title: "Be an idea machine",
        body: "James Altucher is a proponent of being an idea machine. Every day, write down at least 10 ideas.Revisit your ideas when you’ve got a quiet moment to see if there’s anything you want to pursue.",
        date: "2021-05-12"
    },
    {
        title: "Practice a hobby",
        body: "Do you have a hobby you’ve let slide lately? Knitting? Playing the guitar? Photography? DIY anything?Whatever it is, spend some time each day practicing your hobby. ",
        date: "2021-05-13"
    },
    {
        title: "Learn a language",
        body: "Learning a new language can entail learning to speak a different language or learning to write computer code.ither one will challenge your mind and could benefit you",
        date: "2021-05-14"
    },
    {
        title: "Random acts of kindness",
        body: "Do one small thing every day for someone else.Help carry groceries. Hold the door for someone. Buy a sandwich for a homeless person.It doesn’t have to be a monumental event for you, but it might be for the recipient.",
        date: "2021-05-15"
    },
    {
        title: "Gratitude journal",
        body: "Each day, write down a minimum of three things for which you’re grateful. It can be about people, things, experiences. Whatever is happening in your life that sparks gratitude, big or small.",
        date: "2021-05-16"
    },
    {
        title: "Smile :)",
        body: "Smiles are contagious. Smile and say hello to your workmates, the barista, the bus driver.At the end of 30 days, see how your relationship with the people you see regularly but aren’t friends or family have changed.",
        date: "2021-05-17"
    },
    {
        title: "Say “thank you” – actively",
        body: "Most of us, I hope, say thank you all the time. But, do you do it actively? For 30 days, make sure you look the person in the eye and say thank you. ",
        date: "2021-05-18"
    },
    {
        title: "No complaining",
        body: "Retrain your mindset to focus on the positive. The hardest part of that is not complaining, as it seems to have become a national pastime.",
        date: "2021-05-19"
    },
    {
        title: "Create a vision board",
        body: "Creating a vision board can be a fun process, but, you need to use it to get the real benefit. Once you’ve put your board together, put it somewhere you’ll see it morning and night.",
        date: "2021-05-20"
    },
    {
        title: "Affirmations",
        body: "An affirmation or two can be part of your vision board, or you can write them on post-it notes and put them in prominent places so you’ll see them throughout your day.",
        date: "2021-05-21"
    },
    {
        title: "Laugh",
        body: "This is especially useful if you’re feeling a bit stressed or generally overwhelmed by the world.Have a good laugh every day. It’s good for the soul.",
        date: "2021-05-22"
    },
    {
        title: "Take a break from social media",
        body: "You might want to warn those people who expect to see you on Facebook that you’re taking a break. Then sign out of Facebook (or whatever your preferred social media platform might be)",
        date: "2021-05-23"
    },
    {
        title: "Declutter",
        body: "Speaking of clutter… Take a 30-day challenge to reduce both the physical and digital clutter in your life.Put a “No Junk Mail” sticker on your mailbox.",
        date: "2021-05-24"
    },
    {
        title: "Share a meal with family/loved ones",
        body: "If your family is a bit like mine and we tend to eat on the run and/or at different times because of our schedules, try to find one meal a day you can sit at the table and enjoy a meal together. ",
        date: "2021-05-25"
    },
    {
        title: "Spend some time outside",
        body: "Get some fresh air and sunshine every day. Depending on where you live, this one might be a bit challenging in winter. But, if the sun is shining, even if snow is on the ground, get outside and soak it up.",
        date: "2021-05-26"
    },
    {
        title: "Use cash only",
        body: "If your financial discipline has evaporated lately, try going “cash only” for 30 days.You can use a cash envelope system if you like or just take out the cash you’ll need for all your usual expenses for the week. ",
        date: "2021-05-27"
    },
    {
        title: "Track your spending",
        body: "If using cash seems like too harsh a challenge, try tracking your spending for 30 days.This is also a great foundation for organizing a new budget, too. (Check out our free printable budget sheet!)",
        date: "2021-05-28"
    },
    {
        title: "Take your lunch to work",
        body: "If you’ve developed some bad habits around buying lunch every day, which can put a sizeable dent in your budget, try making lunch and taking it with you.",
        date: "2021-05-29"
    }
]


app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(bodyParser.json());

app.get('/', function (req, res) {


    res.set('Server', 'NewsFeed');
    res.set('X-Powered-By', 'Magical Pixies');

    fs.readFile("./private/html/index.html", function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write(errorMsg);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
        }

        res.end();
    });

});

class newsItem {
    constructor(title, body, date) {
        this.title = title;
        this.body = body;
        this.date = date;
    }

    get Title() {
        return this.title;
    }

    get Body() {
        return this.body;
    }

    get Date() {
        return this.date;
    }

    set Title(title) {
        this.title = title;
    }


    set Body(body) {
        this.body = body;
    }

    set Date(date) {
        this.date = date;
    }

    toString() {
        let string = this.title + "\n" + this.body +
            "\n" + this.date;
        return string;
    }
}

app.get('/newsfeed-update', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    let randomItem = Math.floor(Math.random() * 30);
    let randomChallenge = items[randomItem];
    let object = new newsItem(randomChallenge.title, randomChallenge.body, randomChallenge.date);
    let jsonObject = JSON.stringify(object);
    console.log(jsonObject);

    res.send(jsonObject);
});

let port = 5050;
app.listen(port, function () {
    console.log('App listening on port ' + port + '!');
});