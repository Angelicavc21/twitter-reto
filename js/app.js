var btn = document.querySelector('#btn');
btn.disabled = true;
btn.style.backgroundColor = '#b9e1fa'; 
var span = document.querySelector('span');
var textarea = document.querySelector('#text');

textarea.addEventListener('keyup', validate);
textarea.addEventListener('keyup', countText);
textarea.addEventListener('keydown', resizeTextArea);

btn.addEventListener('click', sendTweet);


function validate() {
	if (textarea.value.length === 0) { 
		btnDisabled();
	} else {
		btnEnabled();

	}
}

function resizeTextArea(event) {
	var colsInitial = textarea.getAttribute('cols');
	var rowsInitial = textarea.getAttribute('rows');
	if (textarea.value.length !== 0) {
		if (event.keyCode == 13 || parseInt(textarea.value.length) % 62 == 0) {
			var rowsFinal = parseInt(rowsInitial) + 1;
			textarea.setAttribute('rows', rowsFinal);
		}
	} else {
		textarea.setAttribute('rows', 2);
	}
}



function btnDisabled() {
	btn.disabled = true;
	btn.style.backgroundColor = '#b9e1fa';
}

function btnEnabled() {
	btn.disabled = false;
	btn.style.backgroundColor = '#50b6f5';
}


function sendTweet(event) {
	var textTweet = textarea.value;
	var newTweet = document.createElement('div');
	newTweet.setAttribute('class','tweet-style');
	newTweet.textContent = time() + '    ' + textTweet;
	var parent = document.querySelector('.container-tweets');
	parent.appendChild(newTweet);

	clear();
	validate();

}

function clear() {
	document.querySelector('#text').value = '';
	span.textContent = '';
}


function countText() {
	var count = textarea.value.length;
	var show = 140 - count;
	span.textContent = show;
	var parent = document.querySelector('.post');
	parent.appendChild(span);
	if (count > 0 && count < 119) {
		span.style.color = '#50b6f5';
	} else if (count >= 120 && count <= 130) {
		span.style.color = "#f5b40d";
	} else if (count > 130 && count <= 140) {
		span.style.color = "red";
	} else {
		btnDisabled();
	}
}

 
function time() {
	var date = new Date();
	var hours = date.getHours();
	var min = date.getMinutes();
	var time;
	if (min < 10) {
		min = '0' + min;
	}
	if (hours >= 12 && hours <= 24) {
		time = hours + ':' + min + ' PM';
	} else {
		time = hours + ':' + min + ' AM';
	}
	return time;
}
