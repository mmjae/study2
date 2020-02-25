const apiKey='eKIeaoVCSpEINEhh8Uw0zqTWk8JLbn'; //레스트 회원 가입시 api 키를 생성하여 저장
const username='ddddddd11'; //유어아이디를 const= final 개념 으로 공통 js에 입력 시켜 놓음


/*공용 출력 js 메소드*/
$(function() {
	$('#header').load('/mjh_client/include/header.html'); //jsp일 경우 include 개념
	$('#nav').load('/mjh_client/include/nav.html');
	$('#aside').load('/mjh_client/include/aside.html');
	$('#footer').load('/mjh_client/include/footer.html');
});
// 코드 진행이 false 인경우 출력 될 메소드
function printErrorMessage(element,message) {
	element.text(message).css({'color':'red','font-size':'0,75em'});
	return false;
}
//코드 진행이 true 인경우 출력 될 메소드
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




