var login = prompt('Whos there');
var password;
switch (login) {
	case null: {
		alert('Canceled');
		break;
	}
	case 'Admin': {
		password = prompt('Password');
		switch (password) {
			case null: {
				alert('Canceled');
				break;
			}
			case 'TheMaster': {
				alert('Welcome');
				break;
			}
			default: {
				alert('Wrong Password');
				break;
			}
		}
		break;
	}
	default: {
		alert('I dont know you');
		break;
	}
}
