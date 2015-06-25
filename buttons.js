function shia () {
	document.getElementById('button1').style.display = 'none';
	document.getElementById('doit').style.visibility = 'visible';
	document.getElementById('button2').style.visibility = 'visible';
	return true;
}

function randomShia () {
	document.getElementById('button1').style.display = 'none';
	document.getElementById('doit').style.display = 'none';
	document.getElementById('button2').style.display = 'none';
    var shiaImages = new Array ();
    shiaImages = ["", "http://www.kiss925.com/files/2015/06/CncnJmJ.gif" ];
    var rnd = Math.floor( Math.random() * shiaImages.length );
    if( rnd == 0 ) {
        rnd = 1;
    }
    document.getElementById('place').append("<img/>");

    html_code = '<img class="who" src="' + myImages1[rnd] + '" />";
}

