document.getElementById("quote-btn").onclick = newQuote;

function newQuote() {

// necessary to load JSON file, linking it to the project
// fyi, this has already converted the file into a string
	$.getJSON("quotes.json", function(data) {
// convert JSON object to Javascript object
	var allQuotes = data.workHardWisdom;
// need to snip JSON object text

// generates number reflects random quote in the workHardWisdom json array
var randomNumber = Math.floor(Math.random() * (allQuotes.length));
document.getElementById("quoteDisplay").innerHTML = allQuotes[randomNumber];
console.log(allQuotes[randomNumber]);

// // need to loop through JSON array and print quote attribute
// for (var i = 0; i < quotes.length; i++) {
// 	var item = console.log(quotes[i].quote);
// }
});
}










