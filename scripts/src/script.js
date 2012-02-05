/**
* This is the entry point for our JavaScript program
*/
function main() {
    //your code goes here
    //alert("hello world!");


    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM

var s = new Spotter("twitter.search",
{q:"npr", period:120}, //period is the amount of seconds between searches, curly braces hold jason objects
{buffer:true, bufferTimeout:750}); //buffer timeout - deliver feed every 750 ms

s.register(function(tweet){ //tell it what to do when data is delivered (tweet is the variable we are declaring for the incoming messages)

//2. Add profile images (tweet.profile_image_url)

var profile_image = "<img src='"+tweet.profile_image_url+"' />";
var user_name = tweet.from_user_name;
var created_date = tweet.created_at;
var dateParse = created_date.split(' ');
//created at format is Sun, 05 Feb 2012 19:40:51 +0000
var day = dateParse[0];
var time = dateParse[4];

//4. Make the tweets slide down (store temporarily in a jquery object, then apply slidedown)
var tweetReceived = $("<p>"+profile_image+"&nbsp;"+user_name+"&nbsp;"+day+"&nbsp"+time+"</p>"+"<p>"+tweet.text+"</p>");
tweetReceived.hide().slideDown();

 //3. Make the tweets occur so the most recent are at the top (check jquery documentation)
$("#tweets").prepend(tweetReceived);

	
/*tweetReceived.hide().fadeIn('5000', function() {
  $("#tweets").prepend(tweetReceived);
});*/


});

s.start(); //start the spotter

//s.stop() //stops the spotter




   
 
    //5. Alternate the colors or the background of the tweets (create a variable that changes the css class of the tweet based on the order that it's coming in)
    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom) (easiest way is to use arrays to create a cycle)


}

main();


