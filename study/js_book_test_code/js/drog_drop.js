window.onload = function(){

}
function drop(){
	var droptarget = document.getElementById('myDiv');
	EventUtil.addHandler(droptarget,'dragover',function(event){
		EventUtil.preventDefault(event);
	});
	EventUtil.addHandler(droptarget,'dragenter',function(event){
		EventUtil.preventDefault(event);
	});
}