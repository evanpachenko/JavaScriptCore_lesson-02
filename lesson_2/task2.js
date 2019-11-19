var login = prompt('whos there');
var password;
if (!login) {
	alert('Canceled');

} else if (login === 'Admin') {
 	password = prompt('Password?');
	if (!password) {
		alert('Canceled');
	} else if (password === 'TheMaster') {
		alert('Welcome');
	} else {
		alert('Wrong Password');
	}
} else {
	alert('I dont know you');
}