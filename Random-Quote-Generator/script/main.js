var quotes = [
"Do a bunch by lunch...be a winner by dinner!",
"The most practical, beautiful, workable philosophy in the world won't work - if you won't",
"Success is dependent upon the glands - sweat glands. - Zig Ziglar",
"Big jobs usually go to the men who prove their ability to outgrow small ones. - Ralph Waldo Emerson",
"Your ability to discipline yourself to set clear goals, and then to work toward them every day, will do more to guarantee your success than any other single factor. - Brian Tracy",
"You have to learn the rules of the game. And then you have to play better than anyone else. - Albert Einstein",
"Sheer effort enables those with nothing to surpass those with priviledge and position - Toyotomi Hideyoshi",
"Sleep when you're dead.",
"Patience, persistence, and perspiration make an unbeatable combination for success. - Napoleon Hill",
"Good, better, best. Never let it rest. Until your good is better and your better is best. - Tim Duncan",
"Things may come to those who wait, but only the things left by those who hustle. - Abraham Lincoln",
"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.' - Muhammad Ali",
"I've always worked very, very hard, and the harder I worked, the luckier I got. - Alan Bond",
"Every time you stay out late; every time you miss a workout; every time you don't give 100% - You make it that much easier for me to beat you.",
"Anything and any dream is possible if you pay the price. Before you sit down to relax ask yourself: did I pay the price today?",
"To have a work ethic means to have an insatiable inner drive, to adopt the right values to bring about productivity as extension of the choices you make in your career.",
"When the boss suggests something to do, it is absolutely incontrovertibly true that it must be done. Other priorities need to be moved down the list. The task must be completed.",
 "In a practical sense, it is a habit of doing what must be done, doing it with a relentless attention to excellence, and then developing a strong desire to do more than you are asked to do.",
 "I had to change, had to do something different than I was. I had to become useful. That is to say, I had to contribute more value to the enterprise than I took out in wages. I had to become the kind of person that they wanted there because I made the business more successful. I had to become a person of positive value.",
 "The more valuable you can be to others in a marketplace, the better and more wonderful life you can have. And therein lies the beauty of the market. It calls us all to excellence and creativity in the service of others, and enables all of us to assist in making the world more wonderful. That’s not only good for prosperity. It’s also good for the human spirit itself.",
 "Work ethic requires very little other than focus and a handful of rules. They can be summarized: punctuality, the willingness to do what is asked of you, the discipline to stay on task, the drive for excellence, the capacity to be creative, the passion for discovery of unmet needs, and the adoption of a service-oriented mindset.",
 "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
 "Never give up, for that is just the place and time that the tide will turn. - Harriet Beecher Stowe",
"Never listen to the haters, work hard, and do what you love. - Ariel Martin",
"The secret of change is to focus all of your energy, not on fighting the old, but on building the new. - Dan Millman",
"Be yourself. People don't have to like you, but you don't have to care",
"Don't let your dreams be dreams. - Shia LaBeouf",
"To Learn, Read. To Know, Write. To Master, Teach",
"I'll study, I'll prepare myself, and when the time comes, I'll be ready",
"You can do and be anything you set your mind to",
"No one cares, work harder",
"Dude, suckin' at something is the first step at being sorta good at something. - Adventure Time's Jake",
"My experience is what I agree to attend to. - William James",
"Life is tough my darling, but so are you - Stephanie Bennett Henry",
"It is good to have an end to journey towards, but it is the journey that matters, in the end. - Ursula K. Le Guin"
]

function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}









