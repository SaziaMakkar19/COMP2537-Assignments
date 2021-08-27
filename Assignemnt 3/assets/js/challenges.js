class Challenge {
    constructor(Title, Content) {
        this.title = Title;
        this.content = Content;
    }
}

let c1 = new Challenge("Walking to work", "Have a nice walk to your work");
let c2 = new Challenge("Picking up garbage", "Pick up a garbage on a street and put it in a garbage can");
let c3 = new Challenge("Using reusable straw", "Plastic straw can harm the environment. Get a reusable straw.");
let c4 = new Challenge("Turn it off", "Energy conservation is one of the most important things you can do to reduce your carbon footprint. Leaving your electricals on standby needlessly uses up energy – hit the off switch and you could see huge improvements, most noticeably in your energy bills!");
let c5 = new Challenge("Invest in eco-friendly technology", "Want to go further than simply turning it off? Make sure that the tech you have got is as energy-efficient as possible. This way, you’re using much less energy for the time that the product is on, saving money, and reducing your energy output.");
let c6 = new Challenge("Eat less meat", "Being careful with what you’re consuming is at the heart of being more eco-friendly, and cutting down on the amount of meat you eat can have a huge impact. Not having red meat - even if it’s just for two or three days a week - can have quite a significant impact on reducing your carbon footprint.");
let c7 = new Challenge("Switch to renewables", "Changing your energy supplier to one that’s 100% renewable is a great eco-friendly tip for any home. Anyone can do it, switching is simple and hassle-free plus all the electricity you use when on a 100% renewable tariff is effectively zero carbon!");
let c8 = new Challenge("Don’t waste food", "Waste not, want not. Did you know that 7.3 million tonnes of food is wasted in the UK every year? This isn’t just a huge waste of food and money, it adds to the amount of CO2 being created in landfills.");
let c9 = new Challenge("Compost", "If you have let your food go that little bit too far past its ‘best by’ then you need to be sure to compost it rather than putting it in the bin. Not only will this help create a natural fertiliser and keep your garden green, it’ll also reduce the amount of waste going to landfill - and as it won’t break down anaerobically, there will not be a build-up of methane gas.");
let c10 = new Challenge("Recycle everything", "Chances are that if you’re thinking about taking on a more eco-friendly lifestyle then you’ll already be recycling. But could you improve your recycling-ability (now a word)? You can recycle almost everything, from batteries to paper to cars. Before you throw it away, take a minute to find out if you could recycle it instead");


var challenges = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];

function createUL(array) {
    for (var i = 0; i < array.length; i++) {
        var div = $("<div class='jumbotron'></div>");
        //var b1 = $("<a id='slot' type='button'></a><br>");
        var head = $("<h3 class='head'>" + array[i].title + "</h3>")
        var content = $("<p class='content'>" + array[i].content + "</p>")
        // var head = $("<div class='form-group'><p class='chalange_name'>" + array[i].title + "</p></div>");
        // b1.append(head);
        // b1.append(div);
        div.append(head);
        div.append(content);
        $("#list").append(div);

    }
}

createUL(challenges);