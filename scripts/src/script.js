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
						{buffer:true, bufferTimeout:750});  //buffer timeout - deliver feed every 750 ms
	
	s.register(function(tweet){  //tell it what to do when data is delivered (tweet is the variable we are declaring for the incoming messages)
		
		//2. Add profile images (tweet.profile_image_url)

		var profile_image = "<img src='"+tweet.profile_image_url+"' />";
			
		$("#tweets").append("<p>"+profile_image+tweet.text+"</p>");	//add to the dom using jquery

		
	});  
	
	s.start(); //start the spotter
	
		//s.stop() //stops the spotter


	
	
    //3. Make the tweets occur so the most recent are at the top  (check jquery documentation)
    //4. Make the tweets slide down (store temporarily in a jquery object, then apply slidedown)
    //5. Alternate the colors or the background of the tweets (create a variable that changes the css class of the tweet based on the order that it's coming in)
    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)  (easiest way is to use arrays to create a cycle)


}

main();
