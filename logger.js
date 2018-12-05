/*
MIT License

Copyright (c) 2018 smef.pw (smef.cc)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Download the public JavaScript file here -> https://github.com/smefcc/eventlogs-javascript
*/


var i=0

function checkConsole(){
    if (i === 10) {
	document.getElementById('bombpw2').innerHTML = "<font color=\"#D23F6A\">[allbombson.pw]</font> Console reset<br></font>";
	i=1;
	}
}


// disable rightclick
document.addEventListener("contextmenu", function(disablemouse) {
 disablemouse.preventDefault();
document.getElementById('bombpw2').innerHTML += "<font color=\"#D23F6A\">[allbombson.pw]</font> Context Menu is disabled</font><br>";
i += 1;
checkConsole();
}, false);
// disable rightclick

// urls functions
function twitter() {
	document.getElementById('bombpw2').innerHTML += "<font color=\"#D23F6A\">[allbombson.pw]</font> twitter link was clicked by user</font><br>";
	i += 1;
	checkConsole();
}

function discord() {
	document.getElementById('bombpw2').innerHTML += "<font color=\"#D23F6A\">[allbombson.pw]</font> Discord link was clicked by user</font><br>";
	i += 1;
checkConsole();
}

function selly() {
	document.getElementById('bombpw2').innerHTML += "<font color=\"#D23F6A\">[allbombson.pw]</font> selly link was clicked by user</font><br>";
	i += 1;
checkConsole();
}

function youtube() {
	document.getElementById('bombpw2').innerHTML += "<font color=\"#D23F6A\">[allbombson.pw]</font> youtube link was clicked by user</font><br>";
	i += 1;
checkConsole();
}

function contact() {
	document.getElementById('bombpw2').innerHTML += "<font color=\"#D23F6A\">[allbombson.pw]</font> Contact link was clicked by user</font><br>";
	i += 1;
checkConsole();
}


function spotify() {
	document.getElementById('bombpw2').innerHTML += "<font color=\"#D23F6A\">[allbombson.pw]</font> Spotify link was clicked by user</font><br>";
	i += 1;
checkConsole();
}

function github() {
	document.getElementById('bombpw2').innerHTML += "<font color=\"#D23F6A\">[allbombson.pw]</font> Github link was clicked by user</font><br>";
	i += 1;
checkConsole();
}


// urls functions

// site checker
function checkURL() {
var currentLocation = window.location.href;
	if (currentLocation == "https://allbombson.pw/") {
		document.getElementById('bombpw').innerHTML += "<br><font color=\"#D23F6A\">[allbombson.pw]</font> official site<br></font>";
}	
else {
		document.getElementById('bombpw').innerHTML += "<br><font color=\"#D23F6A\">[allbombson.pw]</font> Current site is unverified  <br>" + "<font color=\"#D23F6A\">[allbombson.pw]</font> " + window.location.href + "<br>" + "<font color=\"#D23F6A\">[allbombson.pw]</font> Differs from official site allbombson.pw<br></font> <br>";
	}
}
// site checker
