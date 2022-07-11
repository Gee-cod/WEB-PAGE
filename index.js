var navbar = document.querySelector("#menu");
var sticky = navbar.offsetTop;
if(window.pageYOffset >= sticky){
	navbar.classList.add("fixed");
}else{
	navbar.classList.add(false);
}
function execute(){
	var elm = document.querySelector('.responsive_nav');
	elm.style.height = "100%";
}
function disexecute(){
	var elm = document.querySelector('.responsive_nav');
	elm.style.height = "0%";	
}
/*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*/