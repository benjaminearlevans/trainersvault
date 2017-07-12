$(document).ready(function(){

})

$(window).scroll(function(){
	if($("header .dropdown.yamm-fw").hasClass("open")){
		$("header .dropdown.yamm-fw a").trigger("click");
	}
})

$(document).on('click', '.yamm .dropdown-menu', function(e) {
  e.stopPropagation()
})