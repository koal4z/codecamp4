function main(str, str2) {
	// Your code begins here;

	if (str.length === 3){
		return s1(str, str2) ;
	} else {
		return s2(str, str2) ;
	}

	function s1(str, str2) {
	if (str === str2) {
		return 0;
	} else if ((str[0] !== str2[0] && str[1] !== str2[1] && str[2] !== str2[2])){
		return  3;
	} else {
		return 2;
	}
}
function s2(str, str2) {
	if (str === str2) {
		return 0;
}	else if (str[0] === str2[0] && str[1] !== str2[1] &&
	str[2]!== str2[2] && str[3]!== str2[3] && str[4]!== str2[4] &&
	str[5]!== str2[5] ) {
		return 5;
	} else if (str[0]!== str2[0] && str[1]!== str2[1] &&
		str[2]!== str2[2] && str[3]!== str2[3] && str[4]!== str2[4] &&
		str[5]!== str2[5] ) {
			return 6;
	} else {
		return 2;
	}
}
}

module.exports = { main };