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