function toogleClass(ele, toggleClassName) {
	var classes = ele.className;
	var regex = new RegExp('\\b' + toggleClassName + '\\b');
	var hasOne = classes.match(regex);
	toggleClassName = toggleClassName.replace(/\s+/g, '');
	if (hasOne) {
		ele.className = classes.replace(regex, '');

	} else {
		ele.className = classes + toggleClassName;
	}
}



document.getElementById('nav-opener').onclick = function () {

	toogleClass(document.getElementById('wrapper'), 'nav-active')
};

document.getElementById('send-data').onclick = function (e) {

	e.preventDefault();

	var isConfirm = confirm('Sind Sie damit einverstanden, dass Ihre Daten durch den Dienst formspree.io mit Sitz in den USA verarbeitet werden? Alternativ, können Sie Ihre Anfrage auch per Mail an test@test.com senden.');

	if (isConfirm){

		console.log(isConfirm);

	}

};