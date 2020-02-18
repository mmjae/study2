const apiKey='xhaEMjujsfB9JppOYmxlACIr193yYR';
const username='ddddddd1';


/*공용 출력 js 메소드*/
$(function() {
	$('#header').load('/mjh_client/include/header.html');
	$('#nav').load('/mjh_client/include/nav.html');
	$('#aside').load('/mjh_client/include/aside.html');
	$('#footer').load('/mjh_client/include/footer.html');
});
function printErrorMessage(element,message) {
	element.text(message).css({'color':'red','font-size':'0,75em'});
	return false;
}

function printMessage(element,message) {
	element.text(message).css({'color':'green','font-size':'0,75em'});
}


//3.Es6 of 반복문 이용한 formData 출력
function printFormData(formData) {
	for(var key of formData.keys()){
		console.log(key);
	}
	for(var value of formData.values()){
		console.log(value);
	}
}

	
function printError(error,msg) {
	toastr.error(msg);
	console.log(error);
}




