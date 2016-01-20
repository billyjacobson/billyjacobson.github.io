var body, msg, nameIntro, position;

function type () {
	position++;
	nameIntro.text(msg.slice(0, position));

	var time = position === 3 ? 500 : 100;
	if (position < msg.length) {
		setTimeout(function () {
			type();
		}, time);
	}
	else {
		body.removeClass('body-initial');
		setTimeout(function() {
			body.removeClass('transitioning');
		}, 1000);
	}

}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-72662505-1', 'auto');
ga('send', 'pageview');



/**
* Function that tracks a click on an outbound link in Google Analytics.
* This function takes a valid URL string as an argument, and uses that URL string
* as the event label. Setting the transport method to 'beacon' lets the hit be sent
* using 'navigator.sendBeacon' in browser that support it.
*/
var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){document.location = url;}
   });
}



$(document).ready(function() {
	nameIntro = $('#name-intro');
	body = $('body');
	msg = "Hi, I'm Billy Jacobson";
	position = 0;

	body.addClass('body-initial transitioning');
	body.on('click', function () {
		position = msg.length - 1;
	});

	type();
});